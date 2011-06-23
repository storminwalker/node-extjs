/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

Commercial Usage
Licensees holding valid commercial licenses may use this file in accordance with the Commercial Software License Agreement provided with the Software or, alternatively, in accordance with the terms contained in a written agreement between you and Sencha.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
Ext.Loader.setConfig({enabled: true});

Ext.Loader.setPath('Ext.ux', '../ux/');

Ext.require([
    'Ext.panel.*',
    'Ext.fx.*',
    'Ext.toolbar.*',
    'Ext.button.*',
    'Ext.ux.BoxReorderer'
]);

Ext.onReady(function() {
    var toolbar = Ext.createWidget('toolbar', {
        renderTo: Ext.getBody(),
        defaults: {
            reorderable: true
        },
        plugins : Ext.create('Ext.ux.BoxReorderer', {}),
        items   : [
            {
                xtype:'splitbutton',
                text: 'Menu Button',
                iconCls: 'add16',
                menu: [{text: 'Menu Item 1'}],
                reorderable: false
            },
            {
                xtype:'splitbutton',
                text: 'Cut',
                iconCls: 'add16',
                menu: [{text: 'Cut Menu Item'}]
            },
            {
                text: 'Copy',
                iconCls: 'add16'
            },
            {
                text: 'Paste',
                iconCls: 'add16',
                menu: [{text: 'Paste Menu Item'}]
            },
            {
                text: 'Format',
                iconCls: 'add16'
            }
        ]
    });
    
    Ext.createWidget('panel', {
        renderTo: Ext.getBody(),
        tbar    : toolbar,
        border  : true,
        width   : 600,
        height  : 400
    });
});
