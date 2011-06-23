/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

Commercial Usage
Licensees holding valid commercial licenses may use this file in accordance with the Commercial Software License Agreement provided with the Software or, alternatively, in accordance with the terms contained in a written agreement between you and Sencha.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
/**
 * @class Ext.data.DirectStore
 * @extends Ext.data.Store
 * <p>Small helper class to create an {@link Ext.data.Store} configured with an
 * {@link Ext.data.proxy.Direct} and {@link Ext.data.reader.Json} to make interacting
 * with an {@link Ext.Direct} Server-side {@link Ext.direct.Provider Provider} easier.
 * To create a different proxy/reader combination create a basic {@link Ext.data.Store}
 * configured as needed.</p>
 *
 * <p><b>*Note:</b> Although they are not listed, this class inherits all of the config options of:</p>
 * <div><ul class="mdetail-params">
 * <li><b>{@link Ext.data.Store Store}</b></li>
 * <div class="sub-desc"><ul class="mdetail-params">
 *
 * </ul></div>
 * <li><b>{@link Ext.data.reader.Json JsonReader}</b></li>
 * <div class="sub-desc"><ul class="mdetail-params">
 * <li><tt><b>{@link Ext.data.reader.Json#root root}</b></tt></li>
 * <li><tt><b>{@link Ext.data.reader.Json#idProperty idProperty}</b></tt></li>
 * <li><tt><b>{@link Ext.data.reader.Json#totalProperty totalProperty}</b></tt></li>
 * </ul></div>
 *
 * <li><b>{@link Ext.data.proxy.Direct DirectProxy}</b></li>
 * <div class="sub-desc"><ul class="mdetail-params">
 * <li><tt><b>{@link Ext.data.proxy.Direct#directFn directFn}</b></tt></li>
 * <li><tt><b>{@link Ext.data.proxy.Direct#paramOrder paramOrder}</b></tt></li>
 * <li><tt><b>{@link Ext.data.proxy.Direct#paramsAsHash paramsAsHash}</b></tt></li>
 * </ul></div>
 * </ul></div>
 */

Ext.define('Ext.data.DirectStore', {
    /* Begin Definitions */
    
    extend: 'Ext.data.Store',
    
    alias: 'store.direct',
    
    requires: ['Ext.data.proxy.Direct'],
   
    /* End Definitions */

    /**
     * @param {Object} config (optional) Config object.
     */
    constructor : function(config){
        config = Ext.apply({}, config);
        if (!config.proxy) {
            var proxy = {
                type: 'direct',
                reader: {
                    type: 'json'
                }
            };
            Ext.copyTo(proxy, config, 'paramOrder,paramsAsHash,directFn,api,simpleSortMode');
            Ext.copyTo(proxy.reader, config, 'totalProperty,root,idProperty');
            config.proxy = proxy;
        }
        this.callParent([config]);
    }    
});

