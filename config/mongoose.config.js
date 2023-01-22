import mongoose from 'mongoose';

exports.mongoConnect = async (dbInstance) => {
    mongoose.set("strictQuery", false);
    return await mongoose.connect(process.env.MONGO_CONNECTION_URL+'/'+ dbInstance,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        maxPoolSize: parseInt(process.env.CONN_LIMIT)
    }).then((dbConnection) => {
        return dbConnection;
    }).catch(error => console.error(error));
};
