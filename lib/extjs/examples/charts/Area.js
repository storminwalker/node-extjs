/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

Commercial Usage
Licensees holding valid commercial licenses may use this file in accordance with the Commercial Software License Agreement provided with the Software or, alternatively, in accordance with the terms contained in a written agreement between you and Sencha.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
Ext.require('Ext.chart.*');
Ext.require(['Ext.Window', 'Ext.fx.target.Sprite', 'Ext.layout.container.Fit']);

Ext.onReady(function () {
    var win = Ext.create('Ext.Window', {
        width: 800,
        height: 600,
        hidden: false,
        shadow: false,
        maximizable: true,
        title: 'Area Chart',
        renderTo: Ext.getBody(),
        layout: 'fit',
        tbar: [{
            text: 'Reload Data',
            handler: function() {
                store1.loadData(generateData());
            }
        }, {
            enableToggle: true,
            pressed: true,
            text: 'Animate',
            toggleHandler: function(btn, pressed) {
                var chart = Ext.getCmp('chartCmp');
                chart.animate = pressed ? { easing: 'ease', duration: 500 } : false;
            }
        }],
        items: {
            id: 'chartCmp',
            xtype: 'chart',
            style: 'background:#fff',
            animate: true,
            store: store1,
            legend: {
                position: 'bottom'
            },
            axes: [{
                type: 'Numeric',
                grid: true,
                position: 'left',
                fields: ['data1', 'data2', 'data3', 'data4', 'data5', 'data6', 'data7'],
                title: 'Number of Hits',
                grid: {
                    odd: {
                        opacity: 1,
                        fill: '#ddd',
                        stroke: '#bbb',
                        'stroke-width': 1
                    }
                },
                minimum: 0,
                adjustMinimumByMajorUnit: 0
            }, {
                type: 'Category',
                position: 'bottom',
                fields: ['name'],
                title: 'Month of the Year',
                grid: true,
                label: {
                    rotate: {
                        degrees: 315
                    }
                }
            }],
            series: [{
                type: 'area',
                highlight: false,
                axis: 'left',
                xField: 'name',
                yField: ['data1', 'data2', 'data3', 'data4', 'data5', 'data6', 'data7'],
                style: {
                    opacity: 0.93
                }
            }]
        }
    }); 
});

