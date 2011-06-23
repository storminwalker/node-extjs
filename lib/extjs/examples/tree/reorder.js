/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

Commercial Usage
Licensees holding valid commercial licenses may use this file in accordance with the Commercial Software License Agreement provided with the Software or, alternatively, in accordance with the terms contained in a written agreement between you and Sencha.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
Ext.require([
    'Ext.tree.*',
    'Ext.data.*',
    'Ext.tip.*'
]);

Ext.onReady(function() {
    Ext.QuickTips.init();
    
    var store = Ext.create('Ext.data.TreeStore', {
        proxy: {
            type: 'ajax',
            url: 'get-nodes.php'
        },
        root: {
            text: 'Ext JS',
            id: 'src',
            expanded: true
        },
        folderSort: true,
        sorters: [{
            property: 'text',
            direction: 'ASC'
        }]
    });

    var tree = Ext.create('Ext.tree.Panel', {
        store: store,
        viewConfig: {
            plugins: {
                ptype: 'treeviewdragdrop'
            }
        },
        renderTo: 'tree-div',
        height: 300,
        width: 250,
        title: 'Files',
        useArrows: true,
        dockedItems: [{
            xtype: 'toolbar',
            items: [{
                text: 'Expand All',
                handler: function(){
                    tree.expandAll();
                }
            }, {
                text: 'Collapse All',
                handler: function(){
                    tree.collapseAll();
                }
            }]
        }]
    });
});

