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
Ext.define('Ext.rtl.grid.CellEditor', {
    override: 'Ext.grid.CellEditor',

    getTreeNodeOffset: function(innerCell) {
        var offset = this.callParent(arguments);

        if (this.editingPlugin.grid.isOppositeRootDirection()) {
            offset = -(innerCell.getWidth() - offset - innerCell.child(this.treeNodeSelector).getWidth());
        }
        return offset;
    }
});