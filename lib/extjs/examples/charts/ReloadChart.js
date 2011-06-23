/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

Commercial Usage
Licensees holding valid commercial licenses may use this file in accordance with the Commercial Software License Agreement provided with the Software or, alternatively, in accordance with the terms contained in a written agreement between you and Sencha.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
Ext.require('Ext.chart.*');
Ext.require('Ext.layout.container.Fit');

Ext.onReady(function () {
    var panel1 = Ext.create('widget.panel', {
        width: 800,
        height: 400,
        title: 'Column Chart with Reload - Hits per Month',
        renderTo: Ext.getBody(),
        layout: 'fit',
        tbar: [{
            text: 'Reload Data',
            handler: function() {
                store1.loadData(generateData());
            }
        }],
        items: {
            xtype: 'chart',
            animate: true,
            shadow: true,
            store: store1,
            axes: [{
                type: 'Numeric',
                position: 'left',
                fields: ['data1'],
                title: 'Hits',
                grid: true,
                minimum: 0
            }, {
                type: 'Category',
                position: 'bottom',
                fields: ['name'],
                title: 'Months',
                label: {
                    rotate: {
                        degrees: 270
                    }
                }
            }],
            series: [{
                type: 'column',
                axis: 'left',
                gutter: 80,
                xField: 'name',
                yField: ['data1'],
                tips: {
                    trackMouse: true,
                    width: 74,
                    height: 38,
                    renderer: function(storeItem, item) {
                        this.setTitle(storeItem.get('name') + '<br />' + storeItem.get('data1'));
                    }
                },
                style: {
                    fill: '#38B8BF'
                }
            }]
        }
    });
});

