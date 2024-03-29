/**
 * PDNS-API
 * This is PDNS RESTful API Server.
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ModelDomain model module.
 * @module model/ModelDomain
 * @version 1.0
 */
class ModelDomain {
    /**
     * Constructs a new <code>ModelDomain</code>.
     * @alias module:model/ModelDomain
     */
    constructor() { 
        
        ModelDomain.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ModelDomain</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelDomain} obj Optional instance to populate.
     * @return {module:model/ModelDomain} The populated <code>ModelDomain</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModelDomain();

            if (data.hasOwnProperty('account')) {
                obj['account'] = ApiClient.convertToType(data['account'], 'String');
            }
            if (data.hasOwnProperty('db')) {
                obj['db'] = ApiClient.convertToType(data['db'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('last_check')) {
                obj['last_check'] = ApiClient.convertToType(data['last_check'], 'Number');
            }
            if (data.hasOwnProperty('master')) {
                obj['master'] = ApiClient.convertToType(data['master'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('notified_serial')) {
                obj['notified_serial'] = ApiClient.convertToType(data['notified_serial'], 'Number');
            }
            if (data.hasOwnProperty('records')) {
                obj['records'] = ApiClient.convertToType(data['records'], [Object]);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} account
 */
ModelDomain.prototype['account'] = undefined;

/**
 * @member {String} db
 */
ModelDomain.prototype['db'] = undefined;

/**
 * @member {Number} id
 */
ModelDomain.prototype['id'] = undefined;

/**
 * @member {Number} last_check
 */
ModelDomain.prototype['last_check'] = undefined;

/**
 * @member {String} master
 */
ModelDomain.prototype['master'] = undefined;

/**
 * @member {String} name
 */
ModelDomain.prototype['name'] = undefined;

/**
 * @member {Number} notified_serial
 */
ModelDomain.prototype['notified_serial'] = undefined;

/**
 * @member {Array.<Object>} records
 */
ModelDomain.prototype['records'] = undefined;

/**
 * @member {String} type
 */
ModelDomain.prototype['type'] = undefined;






export default ModelDomain;

