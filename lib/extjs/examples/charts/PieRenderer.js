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
    store1.loadData(generateData(5));

    var win = Ext.create('Ext.Window', {
        width: 800,
        height: 600,
        hidden: false,
        maximizable: true,
        title: 'Pie Renderer Chart',
        renderTo: Ext.getBody(),
        layout: 'fit',
        tbar: [{
            text: 'Reload Data',
            handler: function() {
                store1.loadData(generateData(5));
            }
        }],
        items: {
            id: 'chartCmp',
            xtype: 'chart',
            style: 'background:#fff',
            animate: true,
            shadow: true,
            store: store1,
            series: [{
                type: 'pie',
                animate: true,
                angleField: 'data1', //bind angle span to visits
                lengthField: 'data2', //bind pie slice length to views
                highlight: {
                  segment: {
                    margin: 20
                  }
                },
                label: {
                    field: 'name',   //bind label text to name
                    display: 'rotate', //rotate labels (also middle, out).
                    font: '14px Arial',
                    contrast: true
                },                                
                style: {
                    'stroke-width': 1,
                    'stroke': '#fff'
                },
                //add renderer
                renderer: function(sprite, record, attr, index, store) {
                    var value = (record.get('data1') >> 0) % 9;
                    var color = [ "#94ae0a", "#115fa6","#a61120", "#ff8809", "#ffd13e", "#a61187", "#24ad9a", "#7c7474", "#a66111"][value];
                    return Ext.apply(attr, {
                        fill: color
                    });
                }
            }]
        }
    });
});

