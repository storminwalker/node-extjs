/*
This file is part of Ext JS 4.2

Copyright (c) 2011-2013 Sencha Inc

Contact:  http://www.sencha.com/contact

Commercial Usage
Licensees holding valid commercial licenses may use this file in accordance with the Commercial
Software License Agreement provided with the Software or, alternatively, in accordance with the
terms contained in a written agreement between you and Sencha.

If you are unsure which license is appropriate for your use, please contact the sales department
at http://www.sencha.com/contact.

Build date: 2013-05-16 14:36:50 (f9be68accb407158ba2b1be2c226a6ce1f649314)
*/
/**
 * This class implements the controller event domain. All classes extending from
 * {@link Ext.app.Controller} are included in this domain. The selectors are simply id's or the
 * wildcard "*" to match any controller.
 * 
 * @protected
 */
Ext.define('Ext.app.domain.Controller', {
    extend: 'Ext.app.EventDomain',
    singleton: true,

    requires: [
        'Ext.app.Controller'
    ],

    type: 'controller',
    idProperty: 'id',

    constructor: function() {
        var me = this;
        
        me.callParent();
        me.monitor(Ext.app.Controller);
    }
});
