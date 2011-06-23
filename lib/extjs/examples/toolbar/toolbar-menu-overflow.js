/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

Commercial Usage
Licensees holding valid commercial licenses may use this file in accordance with the Commercial Software License Agreement provided with the Software or, alternatively, in accordance with the terms contained in a written agreement between you and Sencha.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
Ext.require(['*']);
var buttons = [{
    xtype: 'tbtext',
    text : 'Text'
},  {
    xtype: 'tbseparator'
}];
for (var i = 0; i < 20; i++) {
    buttons.push({
        text: 'Button ' + (i + 1),
        handler: function(b) {
            Ext.Msg.alert('Click', 'You clicked ' + b.text);
        }
    })
}

Ext.onReady(function() {
    Ext.create('Ext.toolbar.Toolbar', {
        renderTo: Ext.getBody(),
        width : 600,
        layout: {
            overflowHandler: 'Menu'
        },
        items: buttons
    });
});
