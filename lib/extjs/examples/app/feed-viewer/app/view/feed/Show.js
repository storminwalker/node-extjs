/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

Commercial Usage
Licensees holding valid commercial licenses may use this file in accordance with the Commercial Software License Agreement provided with the Software or, alternatively, in accordance with the terms contained in a written agreement between you and Sencha.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
Ext.define('FV.view.feed.Show', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.feedshow',

    requires: [
        'FV.view.article.Grid',
        'FV.view.article.Preview'
    ],

	closable: false,
	layout: {
		type: 'vbox',
		align: 'stretch'
	},

	initComponent: function() {
		Ext.apply(this, {
			items: [{
				xtype: 'articlegrid',
				flex: 1
			},{
				xtype: 'articlepreview',
				cls: 'articlepreview',
				height: 300
			}]
		});

		this.callParent(arguments);
	}
});

