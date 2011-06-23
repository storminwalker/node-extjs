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
    'Ext.data.*'
]);

Ext.onReady(function() {

    var store = Ext.create('Ext.data.TreeStore', {
        proxy: {
            type: 'ajax',
            url: 'get-nodes.php',
            extraParams: {
                isXml: true
            },
            reader: {
                type: 'xml',
                root: 'nodes',
                record: 'node'
            }
        },
        sorters: [{
            property: 'leaf',
            direction: 'ASC'
        },{
            property: 'text',
            direction: 'ASC'
        }],
        root: {
            text: 'Ext JS',
            id: 'src',
            expanded: true
        }
    });

    // create the Tree
    var tree = Ext.create('Ext.tree.Panel', {
        store: store,
        hideHeaders: true,
        rootVisible: true,
        viewConfig: {
            plugins: [{
                ptype: 'treeviewdragdrop'
            }]
        },
        height: 350,
        width: 400,
        title: 'Directory Listing',
        renderTo: 'tree-example',
        collapsible: true
    });
});

