import RecipeSchema from '../models/recipe.schema';
import mongoConnect from '../config/mongoose.config';

exports.dbOperation = async (query, command) => {
    return await mongoConnect(query.settings.solutionId).then(async (dbConnection) => {
        switch(command) {
           case 'fetch':
               return await RecipeSchema.collection
                   .find({...query.filter.condition})
                   .project(query.project).toArray()
                   .then((result) => {
                    dbConnection.disconnect();
                    return result;
               });

           case 'create':
               return await RecipeSchema.collection.insertOne(query.data).then((result) => {
                   dbConnection.disconnect();
                   return result;
               });
        }
    });
};