import mongoose from 'mongoose';

exports.mongoConnect = async (dbInstance) => {
    mongoose.set("strictQuery", false);
    return await mongoose.createConnection(process.env.MONGO_CONNECTION_URL+'/'+ dbInstance,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        maxPoolSize: parseInt(process.env.CONN_LIMIT)
    });
};
