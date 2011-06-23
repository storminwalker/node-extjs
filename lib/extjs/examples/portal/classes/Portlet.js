/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

Commercial Usage
Licensees holding valid commercial licenses may use this file in accordance with the Commercial Software License Agreement provided with the Software or, alternatively, in accordance with the terms contained in a written agreement between you and Sencha.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
/**
 * @class Ext.ux.Portlet
 * @extends Ext.Panel
 * A {@link Ext.Panel Panel} class that is managed by {@link Ext.app.PortalPanel}.
 */
Ext.define('Ext.app.Portlet', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.portlet',
    layout: 'fit',
    anchor: '100%',
    frame: true,
    closable: true,
    collapsible: true,
    animCollapse: true,
    draggable: true,
    cls: 'x-portlet',

    // Override Panel's default doClose to provide a custom fade out effect
    // when a portlet is removed from the portal
    doClose: function() {
        this.el.animate({
            opacity: 0,
            callback: function(){
                this.fireEvent('close', this);
                this[this.closeAction]();
            },
            scope: this
        });
    }
});
