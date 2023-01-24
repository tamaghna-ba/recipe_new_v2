import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import ClassInstance from './schemas/class.schema';
import AttributeInstance from './schemas/attribute.schema';
import AssociationInstance from './schemas/association.schema';
import { mongoConnect } from '../config/mongoose.config';

/**
 * Defining schemas object
 * @type {module:mongoose.Schema<any, Model<EnforcedDocType, any, any, any>, {}, {}, {}, {}, DefaultSchemaOptions, ApplySchemaOptions<ObtainDocumentType<any, EnforcedDocType, TSchemaOptions>, TSchemaOptions>> | Schema}
 */
const recipeSchema = new Schema({
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

/**
 * Schema ORM to model
 * @param db
 * @returns {Promise<*>}
 */
exports.schemaTransporter = async (db) => {
    return await mongoConnect(db).then((connection) => {
        return connection.model('RecipeSchema', recipeSchema)
    })
}
