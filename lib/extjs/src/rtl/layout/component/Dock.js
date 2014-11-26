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
 * @override Ext.rtl.layout.component.Dock
 * This override adds RTL support to Ext.layout.component.Dock.
 */
Ext.define('Ext.rtl.layout.component.Dock', {
    override: 'Ext.layout.component.Dock',

    rtlPositions: {
        top: 'top',
        right: 'left',
        bottom: 'bottom',
        left: 'right'
    },

    getDockCls: function(dock) {
        // When in RTL mode it is necessary to reverse "left" and "right" css class names.
        // We have to do it this way (as opposed to using css overrides) because of the
        // !important border-width rules, e.g.:
        // .x-docked-left { border-right-width: 0 !important; }
        return 'docked-' +
            (this.owner.getHierarchyState().rtl ? this.rtlPositions[dock] : dock);
    },

    // Neptune + RTL :)

    getBorderClassTable: function () {
        var me = this;

        if (!me.borderTablesInited) {
            me.initBorderTables();
        }

        return me.owner.getHierarchyState().rtl ? me.noBorderClassTableRtl
                                                : me.noBorderClassTableLtr;
    },

    getBorderCollapseTable: function () {
        var me = this,
            table = me.callParent();

        if (!table.rtl) {
            me.setupBorderTable(table, table.rtl = []);
        }

        return me.owner.getHierarchyState().rtl ? table.rtl : table;
    },

    initBorderTables: function () {
        var me = Ext.layout.component.Dock.prototype,
            ltr = me.noBorderClassTable,
            rtl = [];

        me.setupBorderTable(ltr, rtl);

        me.noBorderClassTableLtr = ltr;
        me.noBorderClassTableRtl = rtl;

        me.borderTablesInited = true;
    },

    setupBorderTable: function (ltr, rtl) {
                            // TRBL
        rtl[0]  = ltr[0];   // 0000
        rtl[1]  = ltr[4];   // 0001 = 1   ==> 0100 = 4
        rtl[2]  = ltr[2];   // 0010 = 2   ==> same
        rtl[3]  = ltr[6];   // 0011 = 3   ==> 0110 = 6
        rtl[4]  = ltr[1];   // 0100 = 4   ==> 0001 = 1
        rtl[5]  = ltr[5];   // 0101 = 5   ==> same
        rtl[6]  = ltr[3];   // 0110 = 6   ==> 0011 = 3
        rtl[7]  = ltr[7];   // 0111 = 7   ==> same
        rtl[8]  = ltr[8];   // 1000 = 8   ==> same
        rtl[9]  = ltr[12];  // 1001 = 9   ==> 1100 = 12
        rtl[10] = ltr[10];  // 1010 = 10  ==> same
        rtl[11] = ltr[14];  // 1011 = 11  ==> 1110 = 14
        rtl[12] = ltr[9];   // 1100 = 12  ==> 1001 = 9
        rtl[13] = ltr[13];  // 1101 = 13  ==> same
        rtl[14] = ltr[11];  // 1110 = 14  ==> 1011 = 11
        rtl[15] = ltr[15];  // 1111 = 15  ==> same
    }
});
