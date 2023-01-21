import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// List of columns for Employee schema
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

let recipeSchema = new Schema({
    config_name: {
        type: String
    },
    config_code: {
        type: String
    },
    config_description: {
        type: String
    },
    config_tool: {
        type: String
    },
    config_version: {
        type: Number
    },
    mode: {
        type: String
    },
    override: {
        type: String
    },
    additional_info: {
        type: String
    },
    classes: [ClassInstance],
    attributes: [AttributeInstance],
    associations: [AssociationInstance],
    added_on: {
        type: Date
    },
    updated_on: {
        type: Date
    }
}, { collection: 'class_config' });

module.exports = mongoose.model('RecipeSchema', recipeSchema);
