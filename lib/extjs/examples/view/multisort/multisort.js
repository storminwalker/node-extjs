/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

Commercial Usage
Licensees holding valid commercial licenses may use this file in accordance with the Commercial Software License Agreement provided with the Software or, alternatively, in accordance with the terms contained in a written agreement between you and Sencha.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
Ext.Loader.setConfig({ enabled: true});
Ext.Loader.setPath('Ext.multisort', '.');
Ext.Loader.setPath('Ext.ux', '../../ux/');

Ext.require([
    'Ext.data.Store',
    'Ext.data.proxy.Ajax',
    'Ext.multisort.Panel',
    'Ext.multisort.SortButton',
    'Ext.ux.BoxReorderer',
    'Ext.ux.DataView.Animated'
]);

Ext.onReady(function() {
    Ext.create('Ext.multisort.Panel', {
        renderTo: Ext.getBody()
    });
});
