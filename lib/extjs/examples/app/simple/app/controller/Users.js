/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

Commercial Usage
Licensees holding valid commercial licenses may use this file in accordance with the Commercial Software License Agreement provided with the Software or, alternatively, in accordance with the terms contained in a written agreement between you and Sencha.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
Ext.define('AM.controller.Users', {
    extend: 'Ext.app.Controller',

    stores: ['Users'],

    models: ['User'],

    views: ['user.Edit', 'user.List'],

    refs: [
        {
            ref: 'usersPanel',
            selector: 'panel'
        }
    ],

    init: function() {
        this.control({
            'viewport > userlist dataview': {
                itemdblclick: this.editUser
            },
            'useredit button[action=save]': {
                click: this.updateUser
            }
        });
    },

    editUser: function(grid, record) {
        var edit = Ext.create('AM.view.user.Edit').show();

        edit.down('form').loadRecord(record);
    },

    updateUser: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();

        record.set(values);
        win.close();
        this.getUsersStore().sync();
    }
});

