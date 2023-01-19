import Joi from '@hapi/joi';

exports.getValidate = {
    fetchRecipe: async (request) => {
        const schema = Joi.object().keys({
            solutionId: Joi.string().required(),
            recipeId: Joi.string().optional(),
            mode: Joi.string().optional(),
        });
        if (!schema.validate(request.payload).error) {
            return {
                solutionId: request.params.solutionId || null,
                recipeId: request.params.recipeId || null,
                mode: request.query.mode || null,
            };
        }
        return {code: 422, error: true};
    }
}

exports.postValidate = {
    createRecipe: async (request) => {
        const schema = Joi.object().keys({
            config_name: Joi.string().required(), // .max(30)
            config_description: Joi.string().max(120).allow('').required(),
            config_tool: Joi.string().max(15).required(),
            mode: Joi.string().max(15).required(),
            override: Joi.any().allow(Joi.object().keys({
                enable: Joi.any().required(),
                item_list: Joi.object().keys({
                    allowAllPixels: Joi.any().optional(),
                    colorSelector: Joi.any().optional(),
                    goToConstraint: Joi.any().optional(),
                    identity: Joi.any().optional(),
                    revertUIEnable: Joi.any().optional(),
                    sequentialTask: Joi.any().optional(),
                    referenceTask: Joi.any().optional()
                }).required()
            })).required(),
            additional_info: Joi.object().keys({
                instructions: Joi.array().optional()
            }).optional(),
            categories: Joi.array().optional(),
            classes: Joi.array().optional(),
            attributes: Joi.array().optional(),
            associations: Joi.array().optional()
        });
        if (!schema.validate(request.payload).error) {
            return request.payload;
        }
        return {code: 422, error: true};
    }
}