/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

Commercial Usage
Licensees holding valid commercial licenses may use this file in accordance with the Commercial Software License Agreement provided with the Software or, alternatively, in accordance with the terms contained in a written agreement between you and Sencha.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
/**
 * The application header displayed at the top of the viewport
 * @extends Ext.Component
 */
Ext.define('Books.view.Header', {
    extend: 'Ext.Component',
    
    dock: 'top',
    baseCls: 'app-header',
    
    initComponent: function() {
        Ext.applyIf(this, {
            html: 'Loading Nested Data Example'
        });
                
        this.callParent(arguments);
    }
});
