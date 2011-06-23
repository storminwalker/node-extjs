/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

Commercial Usage
Licensees holding valid commercial licenses may use this file in accordance with the Commercial Software License Agreement provided with the Software or, alternatively, in accordance with the terms contained in a written agreement between you and Sencha.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
Ext.require(['*']);

Ext.onReady(function(){
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
        id: 'tree',
        store: store,
        width: 250,
        height: 300,
        viewConfig: {
            plugins: {
                ptype: 'treeviewdragdrop',
                appendOnly: true
            }
        },
        renderTo: document.body
    });

    var store2 = Ext.create('Ext.data.TreeStore', {
        proxy: {
            type: 'ajax',
            url: 'get-nodes.php'
        },
        root: {
            text: 'Custom Ext JS',
            id: 'src',
            expanded: true,
            children: []
        },
        folderSort: true,
        sorters: [{
            property: 'text',
            direction: 'ASC'
        }]
    });

    var tree2 = Ext.create('Ext.tree.Panel', {
        id: 'tree2',
        width: 250,
        height: 300,
        store: store2,
        viewConfig: {
            plugins: {
                ptype: 'treeviewdragdrop',
                appendOnly: true
            }
        },
        renderTo: document.body
    });
});

