/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

Commercial Usage
Licensees holding valid commercial licenses may use this file in accordance with the Commercial Software License Agreement provided with the Software or, alternatively, in accordance with the terms contained in a written agreement between you and Sencha.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
/*!
* Ext JS Library 4.0
* Copyright(c) 2006-2011 Sencha Inc.
* licensing@sencha.com
* http://www.sencha.com/license
*/

Ext.define('MyDesktop.BogusMenuModule', {
    extend: 'MyDesktop.BogusModule',

    init : function() {

        this.launcher = {
            text: 'More items',
            iconCls: 'bogus',
            handler: function() {
                return false;
            },
            menu: {
                items: []
            }
        };

        for (var i = 0; i < 5; ++i) {
            this.launcher.menu.items.push({
                text: 'Window '+(++windowIndex),
                iconCls:'bogus',
                handler : this.createWindow,
                scope: this,
                windowId: windowIndex
            });
        }
    }
});
