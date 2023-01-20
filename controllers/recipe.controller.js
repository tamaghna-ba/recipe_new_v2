import { getValidate, postValidate } from '../controllers/validation.controller';
import { getModel, postModel } from '../models/recipe.model';
import { mongoQueryConstant } from "../helpers/constant.util";

exports.getCtl = {
    fetchRecipe: async (request, cb) => {
        let query = JSON.parse(JSON.stringify(mongoQueryConstant));
        return await getValidate.fetchRecipe(request).then(async response => {
            if (!response.error) {
                query.settings = {...query.settings, solutionId: request.params.solutionId};
                if (response.config_code) {
                    query.filter.condition = {...query.filter.condition, config_code: response.config_code};
                }
                if (response.mode) {
                    query.filter.condition = {...query.filter.condition, mode: response.mode};
                }
                return await getModel.fetchRecipe(query).then(dbResult => {
                    return cb.response(dbResult).code(200);
                }).catch(err => {
                    return cb.response(err).code(500);
                });
            }
        }).catch(err => {
            return cb.response(err).code(500);
        });
    },
};

exports.postCtl = {
    createRecipe: async (request, cb) => {
        let query = JSON.parse(JSON.stringify(mongoQueryConstant));
        return await postValidate.createRecipe(request).then(async response => {
            if (!response.error) {
                query = {
                    ...query,
                    data: response,
                    settings: {
                        ...query.settings,
                        solutionId: request.params.solutionId
                    }
                };

                // As 2D Annotation tool has no such kind of entity
                if(query.data.config_tool !== 'odin'){
                    delete query.data['categories'];
                }

                // As 3D Annotation tool has no such kind of entity
                if(query.data.config_tool !== 'pct' && query.data.additional_info !== undefined){
                    if(Object.keys(query.data.additional_info).length > 0){
                        delete query.data.additional_info['instructions'];
                    }
                }
                return await postModel.createRecipe(query).then(result => {
                    return cb.response(result).code(200);
                })
            }
        })
    }
};

