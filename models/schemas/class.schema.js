import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let ClassInstance = new Schema({
    class_id: {
        type: Number
    },
    class_name: {
        type: String
    },
    class_display_name: {
        type: String
    },
    class_abbreviation_name: {
        type: String
    },
    category_name: {
        type: String
    },
    class_marking_tool: {
        type: Array
    },
    class_color: {
        type: String
    },
    keypoints: {
        type: Object
    },
    hasInstance: {
        type: Boolean
    },
    isChild: {
        type: Boolean
    },
    parent_class_ref: {
        type: String
    },
    updated_on: {
        type: Date
    },
    added_on: {
        type: Date
    }
});

module.exports = ClassInstance;