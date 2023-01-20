import mongodb from '../mongo.config';

exports.dbOperation = async (query, command) => {
    return mongodb.then((mongo) => {
       switch(command) {
           case 'fetch':
               return mongo.db(query.settings.solutionId)
                   .collection(query.settings.collection)
                   .find({...query.filter.condition})
                   .project(query.project).toArray();
           case 'create':
               return mongo.db(query.settings.solutionId)
                   .collection(query.settings.collection)
                   .insertOne(query.data);
       }
    });
};