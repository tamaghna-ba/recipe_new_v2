import RecipeSchema from './recipe.schema';
import mongoose from 'mongoose';

exports.dbOperation = async (query, command) => {
    const conn = mongoose.createConnection(process.env.MONGO_CONNECTION_URL + '/' + query.settings.solutionId);
    const model1 = conn.model('RecipeSchema', RecipeSchema);
    switch(command) {
        case 'fetch':
            return await model1.find({...query.filter.condition});
            // return await model1.create(query.data).then(() => {
            //     return true;
            // });
        case 'create':
            console.log(query.settings.solutionId, query.data);
            return await model1.create(query.data);
        case 'update':
    }
};