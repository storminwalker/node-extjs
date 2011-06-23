/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

Commercial Usage
Licensees holding valid commercial licenses may use this file in accordance with the Commercial Software License Agreement provided with the Software or, alternatively, in accordance with the terms contained in a written agreement between you and Sencha.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
/**
 * @author Ed Spencer
 * @class Ext.data.ResultSet
 * @extends Object
 * 
 * <p>Simple wrapper class that represents a set of records returned by a Proxy.</p>
 */
Ext.define('Ext.data.ResultSet', {
    /**
     * @cfg {Boolean} loaded
     * True if the records have already been loaded. This is only meaningful when dealing with
     * SQL-backed proxies
     */
    loaded: true,
    
    /**
     * @cfg {Number} count
     * The number of records in this ResultSet. Note that total may differ from this number
     */
    count: 0,
    
    /**
     * @cfg {Number} total
     * The total number of records reported by the data source. This ResultSet may form a subset of
     * those records (see count)
     */
    total: 0,
    
    /**
     * @cfg {Boolean} success
     * True if the ResultSet loaded successfully, false if any errors were encountered
     */
    success: false,
    
    /**
     * @cfg {Array} records The array of record instances. Required
     */

    /**
     * Creates the resultSet
     * @param {Object} config (optional) Config object.
     */
    constructor: function(config) {
        Ext.apply(this, config);
        
        /**
         * DEPRECATED - will be removed in Ext JS 5.0. This is just a copy of this.total - use that instead
         * @property totalRecords
         * @type Mixed
         */
        this.totalRecords = this.total;
        
        if (config.count === undefined) {
            this.count = this.records.length;
        }
    }
});
