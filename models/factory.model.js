import { schemaTransporter } from './recipe.schema';

/**
 *  DB queries based on command and filter condition
 * @param query
 * @param command
 * @returns {Promise<T>}
 */
exports.dbOperation = async (query, command) => {
    return await schemaTransporter(query.settings.solutionId).then((model) => {
        switch (command) {
            case 'fetch':
                return model.find({...query.filter.condition});
            case 'create':
                return model.create(query.data);
            case 'update':
        }
    });
};