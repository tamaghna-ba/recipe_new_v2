/*
 * This connection will only used to read and write operation
 */
import * as dotenv from 'dotenv'
dotenv.config();
const MongoClient = require('mongodb').MongoClient;

/*
 * This connection will only used to read and write operation
 */
const mongodb = new Promise((resolve, reject) => {
    MongoClient.connect(process.env.MONGO_CONNECTION_URL, {
        useNewUrlParser : true,
        maxPoolSize : parseInt(process.env.CONN_LIMIT)
    }, (err, db) => {
        if(err) {
            reject(err);
        }
        resolve(db);
    });
});
// const mongodb = new Promise(() => {
//     MongoClient.connect(process.env.MONGO_CONNECTION_URL, {
//         maxPoolSize: parseInt(process.env.CONN_LIMIT),
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     }).then(() => {
//         console.log('Database is connected')
//     },err => {
//         console.log('There is problem while connecting database ' + err)
//     });
// });
module.exports = mongodb;