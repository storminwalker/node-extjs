/*
This file is part of Ext JS 4.2

Copyright (c) 2011-2013 Sencha Inc

Contact:  http://www.sencha.com/contact

Commercial Usage
Licensees holding valid commercial licenses may use this file in accordance with the Commercial
Software License Agreement provided with the Software or, alternatively, in accordance with the
terms contained in a written agreement between you and Sencha.

If you are unsure which license is appropriate for your use, please contact the sales department
at http://www.sencha.com/contact.

Build date: 2013-05-16 14:36:50 (f9be68accb407158ba2b1be2c226a6ce1f649314)
*/
/**
 * @private
 * Private utility class for managing all {@link Ext.form.field.Radio} fields grouped by name.
 */
Ext.define('Ext.form.RadioManager', {
    extend: 'Ext.util.MixedCollection',
    singleton: true,

    getByName: function(name, formId) {
        return this.filterBy(function(item) {
            return item.name == name && item.getFormId() == formId;
        });
    },

    getWithValue: function(name, value, formId) {
        return this.filterBy(function(item) {
            return item.name == name && item.inputValue == value && item.getFormId() == formId;
        });
    },

    getChecked: function(name, formId) {
        return this.findBy(function(item) {
            return item.name == name && item.checked && item.getFormId() == formId;
        });
    }
});
