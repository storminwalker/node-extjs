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
Ext.define('Ext.rtl.tip.QuickTipManager', {
    override: 'Ext.tip.QuickTipManager',

    init: function() {
        var me = this;

        me.callParent(arguments);
        me.tip.on('beforeshow', me.onBeforeFirstShow, me, { single: true });
    },

    onBeforeFirstShow: function(tip) {
        // The rtl override for AbstractComponent reads the DOM for floating components to
        // determine if their local coordinate system is RTL and caches the value.  If
        // QuickTipManager.init() is called before the Viewport has been rendered then the
        // cached value may be incorrect.  Clear the cached value so that the next call to
        // isLocalRtl() will read the DOM again. 
        tip._isOffsetParentRtl = undefined;
    }
});