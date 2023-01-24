import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let AttributeInstance = new Schema({
    attr_id: {
        type: Number
    },
    attr_name: {
        type: String
    },
    settings_type: {
        type: String
    },
    attr_display_name: {
        type: String
    },
    attr_type: {
        type: String
    },
    placeholder: {
        type: Array
    },
    isImageLevel: {
        type: Boolean
    },
    isGlobal: {
        type: Boolean
    },
    defaultValue: {
        type: Boolean
    },
    attr_abbreviation: {
        type: String
    },
    updated_on: {
        type: Date
    },
    added_on: {
        type: Date
    }
});

module.exports = AttributeInstance;