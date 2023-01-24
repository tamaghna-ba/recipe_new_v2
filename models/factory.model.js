import RecipeSchema from './recipe.schema';
import { mongoConnect } from '../config/mongoose.config';

exports.dbOperation = async (query, command) => {
    return await mongoConnect(query.settings.solutionId).then(async (mongodb) => {
        switch(command) {
            case 'fetch':
               return await RecipeSchema.collection
                   .find({...query.filter.condition})
                   .project(query.project).toArray()
                   .then((result) => {
                       // mongodb.disconnect();
                       return result;
               });
            case 'create':
               return await RecipeSchema.collection.insertOne(query.data).then((result) => {
                   // mongodb.disconnect();
                   return result;
               });
            case 'update':
        }
    });
};