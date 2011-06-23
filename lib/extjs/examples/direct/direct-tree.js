/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

Commercial Usage
Licensees holding valid commercial licenses may use this file in accordance with the Commercial Software License Agreement provided with the Software or, alternatively, in accordance with the terms contained in a written agreement between you and Sencha.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
Ext.require([
    'Ext.direct.*',
    'Ext.data.*',
    'Ext.tree.*',
    'Ext.grid.Scroller'
]);

Ext.onReady(function() {
    Ext.direct.Manager.addProvider(Ext.app.REMOTING_API);

    var store = Ext.create('Ext.data.TreeStore', {
        root: {
            expanded: true
        },
        proxy: {
            type: 'direct',
            directFn: TestAction.getTree,
            paramOrder: ['node']
        }
    });


    // create the Tree
    var tree = Ext.create('Ext.tree.Panel', {
        store: store,
        height: 350,
        width: 600,
        title: 'Tree Sample',
        rootVisible: false,
        renderTo: Ext.getBody()
    });
});

