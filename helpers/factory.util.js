import mongodb from '../mongo.config';

exports.dbOperation = async (query, command) => {
    return mongodb.then((mongo) => {
       switch(command) {
           case 'details':
               return mongo.db(query.solutionId)
                   .listCollections(query.condition)
                   .toArray()
           case 'fetch':
               return mongo.db(query.settings.database)
                   .collection(query.settings.collection)
                   .find({...query.filter.condition})
                   .project(query.project).toArray()
       }
    });
};