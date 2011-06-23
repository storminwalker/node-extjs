/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

Commercial Usage
Licensees holding valid commercial licenses may use this file in accordance with the Commercial Software License Agreement provided with the Software or, alternatively, in accordance with the terms contained in a written agreement between you and Sencha.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
Ext.onReady(function() {
    Ext.create('Ext.Viewport', {
        layout:'anchor',
        items:[{
            title:'Item 1',
            html:'100% 20%',
            anchor:'100% 20%'
        },{
            title:'Item 2',
            html:'50% 30%',
            anchor:'50% 30%'
        },{
            title:'Item 3',
            html:'-100 50%',
            anchor:'-100 50%'
        }]
    });
});
