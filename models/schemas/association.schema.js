import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let AssociationInstance = new Schema({
    type_id: {
        type: Number
    },
    type: {
        type: String
    },
    source: {
        type: Number
    },
    destination: {
        type: Number
    },
    added_on: {
        type: Date
    },
    updated_on: {
        type: Date
    }
});

module.exports = AssociationInstance;