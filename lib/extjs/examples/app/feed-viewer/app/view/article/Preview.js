/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

Commercial Usage
Licensees holding valid commercial licenses may use this file in accordance with the Commercial Software License Agreement provided with the Software or, alternatively, in accordance with the terms contained in a written agreement between you and Sencha.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
Ext.define('FV.view.article.Preview', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.articlepreview',

    requires: ['Ext.toolbar.Toolbar'],

	cls: 'preview',
	autoScroll: true,
	border: false,
	
	initComponent: function() {
		Ext.apply(this, {
			tpl: new Ext.XTemplate(
			    '<div class="post-data">',
			        '<span class="post-date">{pubDate:this.formatDate}</span>',
			        '<h3 class="post-title">{title}</h3>',
			        '<h4 class="post-author">by {author:this.defaultValue}</h4>',
			    '</div>',
			    '<div class="post-body">{content:this.getBody}</div>', {

				getBody: function(value, all) {
					return Ext.util.Format.stripScripts(value);
				},

				defaultValue: function(v) {
					return v ? v : 'Unknown';
				},

				formatDate: function(value) {
					if (!value) {
						return '';
					}
					return Ext.Date.format(value, 'M j, Y, g:i a');
				}
			}),

			dockedItems: [{
				dock: 'top',
				xtype: 'toolbar',
				border: false,
				items: [{
					text: 'View in new tab',
					action: 'viewintab'
				}, {
					text: 'Go to post',
					action: 'gotopost'
				}]
			}]
		});

		this.callParent(arguments);
	}
});

