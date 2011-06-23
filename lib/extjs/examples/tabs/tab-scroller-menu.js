/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

Commercial Usage
Licensees holding valid commercial licenses may use this file in accordance with the Commercial Software License Agreement provided with the Software or, alternatively, in accordance with the terms contained in a written agreement between you and Sencha.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
Ext.Loader.setConfig({enabled: true});

Ext.Loader.setPath('Ext.ux', '../ux/');

Ext.require([
    'Ext.tip.QuickTipManager',
    'Ext.window.Window',
    'Ext.tab.Panel',
    'Ext.ux.TabScrollerMenu'
]);

Ext.onReady(function() {
    // enable the tabTip config below
    Ext.tip.QuickTipManager.init();

    var win = Ext.createWidget('window', {
        height: 400,
        width: 600,
        layout: 'fit',
        title: 'Exercising scrollable tabs with a TabScroller menu',
        border: false,
        items: {
            xtype: 'tabpanel',
            activeTab: 0,
            itemId: 'tabPanel',
            plugins: [{
                ptype: 'tabscrollermenu',
                maxText  : 15,
                pageSize : 5
            }],
            items: [{
                title: 'First tab',
                html: 'Creating more tabs...'
            }]
        }
    });

    win.show();

    // Add a bunch of tabs dynamically
    var tabLimit = 12,
        tabPanel = win.getComponent('tabPanel');

    Ext.defer(function (num) {
        var i,
            title,
            tabs = [];
        for (i = 1; i <= tabLimit; i++) {
            title = 'Tab # ' + i;
            tabs.push({
                title: title,
                html: 'Hi, I am tab ' + i,
                tabTip: title,
                closable: true
            });
        }
        tabPanel.add(tabs);
        tabPanel.getComponent(0).body.update('Done!');
    }, 100);
});
