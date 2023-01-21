import { dbOperation } from '../helpers/factory.util';
import { removeEmpty } from "../helpers/feature.util";

exports.getModel = {
    fetchRecipe: async (query) => {
        query.settings = {...query.settings, collection: 'class_config', command: 'fetch'};
        query.filter = {
            ...query.filter,
            condition: {
                ...removeEmpty(query.filter.condition),
                $and: [query.filter.condition]
            }
        };
        // return new Promise((resolve, reject) => {});
        return await dbOperation(query, query.settings.command).then(result => {
            return {
                message: 'Configuration details has been fetched successfully',
                status: 200,
                result
            };
        }).catch(error => {
            return {message: "Configuration details did not fetched!", status: 500, error};
        });
    }
};

exports.postModel = {
    createRecipe: async (query) => {
        query.settings = {...query.settings, collection: 'class_config', command: 'create'};
        return dbOperation(query, query.settings.command).then(result => {
            return {message: 'Configuration details has been saved successfully', status: 200, result};
        }).catch(error => {
            return {message: "Configuration details did not saved!", status: 500, error};
        });
    }
}