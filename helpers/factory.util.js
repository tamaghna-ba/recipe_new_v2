import mongodb from '../config/mongodb.config';
import RecipeSchema from '../models/recipe.schema';
import mongoConnect from '../config/mongoose.config';

exports.dbOperation = async (query, command) => {
    return mongodb.then((mongo) => {
       switch(command) {
           case 'fetch':
               return mongo.db(query.settings.solutionId)
                   .collection(query.settings.collection)
                   .find({...query.filter.condition})
                   .project(query.project).toArray();
           case 'create':
               return mongoConnect(query.settings.solutionId).then(async () => {
                   // return mongo.db(query.settings.solutionId)
                   //     .collection(query.settings.collection)
                   //     .insertOne(query.data);
                   return await RecipeSchema.collection.insertOne(query.data);
               })
       }
    });
};