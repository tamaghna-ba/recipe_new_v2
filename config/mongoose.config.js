const mongoose = require('mongoose');

const mongoConnect = async (dbInstance) => {
    mongoose.set("strictQuery", false);
    console.log(process.env.MONGO_CONNECTION_URL+'/'+ dbInstance);
    return await mongoose.connect(process.env.MONGO_CONNECTION_URL+'/'+ dbInstance,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        maxPoolSize: parseInt(process.env.CONN_LIMIT)
    });
};

module.exports = mongoConnect;
