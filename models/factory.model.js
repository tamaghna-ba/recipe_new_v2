import { schemaTransporter } from './recipe.schema';

/**
 * Query action based on query input(condition and command)
 * @param query
 * @param command
 * @returns {Promise<* | never>}
 */
exports.dbOperation = async (query, command) => {
    return schemaTransporter(query.settings.solutionId).then((model) => {
        switch (command) {
            case 'fetch':
                return model.find({...query.filter.condition});
            case 'create':
                return model.create(query.data);
            case 'update':
                return true;
        }
    });
};