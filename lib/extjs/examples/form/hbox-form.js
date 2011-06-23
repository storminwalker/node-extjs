/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

Commercial Usage
Licensees holding valid commercial licenses may use this file in accordance with the Commercial Software License Agreement provided with the Software or, alternatively, in accordance with the terms contained in a written agreement between you and Sencha.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
Ext.require([
    'Ext.form.Panel',
    'Ext.layout.container.Anchor'
]);

Ext.onReady(function() {
    Ext.create('Ext.form.Panel', {
        renderTo: Ext.getBody(),
        title: 'Form Panel',
        bodyStyle: 'padding:5px 5px 0',
        width: 600,
        fieldDefaults: {
            labelAlign: 'top',
            msgTarget: 'side'
        },
        defaults: {
            border: false,
            xtype: 'panel',
            flex: 1,
            layout: 'anchor'
        },

        layout: 'hbox',
        items: [{
            items: [{
                xtype:'textfield',
                fieldLabel: 'First Name',
                anchor: '-5',
                name: 'first'
            }, {
                xtype:'textfield',
                fieldLabel: 'Company',
                anchor: '-5',
                name: 'company'
            }]
        }, {
            items: [{
                xtype:'textfield',
                fieldLabel: 'Last Name',
                anchor: '100%',
                name: 'last'
            },{
                xtype:'textfield',
                fieldLabel: 'Email',
                anchor: '100%',
                name: 'email',
                vtype:'email'
            }]
        }],
        buttons: ['->', {
            text: 'Save'
        }, {
            text: 'Cancel'
        }]
    });
});


