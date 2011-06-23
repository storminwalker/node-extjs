/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

Commercial Usage
Licensees holding valid commercial licenses may use this file in accordance with the Commercial Software License Agreement provided with the Software or, alternatively, in accordance with the terms contained in a written agreement between you and Sencha.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
/**
 * The main application viewport, which displays the whole application
 * @extends Ext.Viewport
 */
Ext.define('Books.view.Viewport', {
    extend: 'Ext.Viewport',    
    layout: 'fit',
    
    requires: [
        'Books.view.Header',
        'Books.view.book.View',
        'Books.view.book.SideBar',
        'Books.view.review.List'
    ],
    
    initComponent: function() {
        var me = this;
        
        Ext.apply(me, {
            items: [
                {
                    xtype: 'panel',
                    border: false,
                    id    : 'viewport',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    
                    dockedItems: [
                        Ext.create('Books.view.Header'),
                        Ext.create('Books.view.book.SideBar')
                    ],
                    
                    items: [
                        Ext.create('Books.view.book.View'),
                        Ext.create('Books.view.review.List')
                    ]
                }
            ]
        });
                
        me.callParent(arguments);
    }
});
