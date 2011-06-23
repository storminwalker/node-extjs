/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

Commercial Usage
Licensees holding valid commercial licenses may use this file in accordance with the Commercial Software License Agreement provided with the Software or, alternatively, in accordance with the terms contained in a written agreement between you and Sencha.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
Ext.require('Ext.form.*');

Ext.onReady(function() {
    Ext.createWidget('form', {
        renderTo: 'example-form',
        title: 'Number fields with spinner',
        bodyPadding: 5,
        frame: true,
        width: 340,
        fieldDefaults: {
            labelAlign: 'left',
            labelWidth: 105,
            anchor: '100%'
        },
        items: [{
                xtype: 'numberfield',
                fieldLabel: 'Default',
                name: 'basic',
                value: 1,
                minValue: 1,
                maxValue: 125
            },{
                xtype: 'numberfield',
                fieldLabel: 'With a step of 0.4',
                name: 'test',
                minValue: -100,
                maxValue: 100,
                allowDecimals: true,
                decimalPrecision: 1,
                step: 0.4
            },{
                xtype: 'numberfield',
                hideTrigger: true,
                fieldLabel: 'Without spinner',
                name: 'without_spinner'
            }]

    });
});


