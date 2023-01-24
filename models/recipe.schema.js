import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import ClassInstance from './schema/class.schema';
import AttributeInstance from './schema/attribute.schema';
import AssociationInstance from './schema/association.schema';

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
        type: {
            enable: {
                type: Boolean
            },
            item_list: {
                type: Object
            }
        }
    },
    additional_info:  {
        type: [
            {
                type: {
                    type: String
                },
                content: {
                    type: String
                }
            }
        ]
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
}, { versionKey:false, collection: 'class_config' });

module.exports = recipeSchema;
