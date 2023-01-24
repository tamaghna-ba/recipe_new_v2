import mongoose from 'mongoose';
import ClassInstance from './schema/class.schema';
import AttributeInstance from './schema/attribute.schema';
import AssociationInstance from './schema/association.schema';
import { mongoConnect } from '../config/mongoose.config';

/**
 * Defining schema object to be referenced
 * @type {module:mongoose.Schema<any, Model<EnforcedDocType, any, any, any>, {}, {}, {}, {}, DefaultSchemaOptions, ApplySchemaOptions<ObtainDocumentType<any, EnforcedDocType, TSchemaOptions>, TSchemaOptions>> | Schema}
 */
const recipeSchema = new mongoose.Schema({
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
 * Schema ORM MAPPER
 * @param db
 * @returns {Promise<void>}
 */
exports.schemaTransporter = async (db) => {
    return mongoConnect(db).then( (connection) => {
        return connection.model('RecipeSchema', recipeSchema)
    })
}
