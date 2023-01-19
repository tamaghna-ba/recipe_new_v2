import { getValidate, postValidate } from '../controllers/validation.controller';
import { getModel, postModel } from '../models/recipe.model';
import { mongoQueryConstant } from "../helpers/constant.util";

exports.getCtl = {
    fetchRecipe: (request, cb) => {
        let query = JSON.parse(JSON.stringify(mongoQueryConstant));
        return getValidate.fetchRecipe(request).then(async response => {
            if (!response.error) {
                query.settings = {...query.settings, database: response.solutionId};
                if (response.recipeId) {
                    query.filter.condition = {...query.filter.condition, config_code: response.recipeId};
                }
                if (response.mode) {
                    query.filter.condition = {...query.filter.condition, mode: response.mode};
                }
                return await getModel.fetchRecipe(query).then(dbResult => {
                    return cb.response(dbResult).code(200);
                });
            }
        })
    },
}

exports.postCtl = {
    createRecipe: async (request,cb) => {
        return postValidate.createRecipe(request).then(async response => {
            console.log(response);
        })
    }
}

