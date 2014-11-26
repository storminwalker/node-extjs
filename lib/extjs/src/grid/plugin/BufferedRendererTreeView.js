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
 * A set of overrides required by the presence of the BufferedRenderer plugin.
 * 
 * These overrides of Ext.tree.View take into account the affect of a buffered renderer and
 * divert execution from the default course where necessary.
 */
Ext.define('Ext.grid.plugin.BufferedRendererTreeView', {
    override: 'Ext.tree.View',

    onRemove: function(store, records, indices) {
        var me = this;
        // Using buffered rendering - removal (eg folder node collapse)
        // Has to refresh the view
        if (me.rendered && me.bufferedRenderer) {
            me.refreshView();
        }
        // No BufferedRenderer preent
        else {
            me.callParent([store, records, indices]);
        }
    }    
});
