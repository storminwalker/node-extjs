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
    'Ext.form.Panel',
    'Ext.form.field.Text',
    'Ext.form.field.Number'
]);

Ext.onReady(function(){
    Ext.direct.Manager.addProvider(Ext.app.REMOTING_API);
    
    var form = Ext.create('Ext.form.Panel', {
        width: 300,
        height: 130,
        renderTo: document.body,
        bodyPadding: 5,
        items: [{
            xtype: 'textfield',
            fieldLabel: 'First Name',
            name: 'firstName',
            value: 'Evan'
        }, {
            xtype: 'textfield',
            fieldLabel: 'Last Name',
            name: 'lastName',
            value: 'Trimboli'
        }, {
            xtype: 'numberfield',
            fieldLabel: 'Age',
            name: 'age',
            value: 25
        }],
        dockedItems: [{
            dock: 'bottom',
            ui: 'footer',
            xtype: 'toolbar',
            items: ['->', {
                text: 'Send',
                handler: function(){
                    var values = form.getForm().getValues();
                    TestAction.showDetails(values, function(value){
                        Ext.example.msg('Server Response', value);
                    });
                }
            }]
        }]  
    });
});

