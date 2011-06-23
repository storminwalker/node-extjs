/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

Commercial Usage
Licensees holding valid commercial licenses may use this file in accordance with the Commercial Software License Agreement provided with the Software or, alternatively, in accordance with the terms contained in a written agreement between you and Sencha.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
Ext.Loader.setConfig({enabled: true});
Ext.Loader.setPath('Ext.org', '.');
Ext.Loader.setPath('Ext.ux.DataView', '../ux/DataView');

Ext.require([
    'Ext.org.ImageView',
    'Ext.org.AlbumTree',
    'Ext.org.OrgPanel'
]);

Ext.require([
    'Ext.data.TreeStore',
    'Ext.data.proxy.Ajax',
    'Ext.tree.Column',
    'Ext.tree.View',
    'Ext.selection.TreeModel',
    'Ext.tree.plugin.TreeViewDragDrop'
]);

Ext.onReady(function() {
    Ext.create('Ext.org.OrgPanel', {
        renderTo: Ext.getBody(),
        height: 490,
        width : 700
    });
});
