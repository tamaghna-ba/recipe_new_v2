import { dbOperation } from './factory.model';
import { removeEmpty } from "../helpers/feature.util";
import { gChat } from '../logger/gchat.webhook';

exports.getModel = {
    fetchRecipe: async (query) => {
        query = {
            ...query,
            settings: { ...query.settings, command: 'fetch' },
            filter: {
                ...query.filter,
                condition: { ...removeEmpty(query.filter.condition), $and: [query.filter.condition] }
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
            // gChat.sendWebHook();
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
            // gChat.sendWebHook();
            return {message: "Configuration details did not saved!", status: 500, error};
        });
    }
}