/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

Commercial Usage
Licensees holding valid commercial licenses may use this file in accordance with the Commercial Software License Agreement provided with the Software or, alternatively, in accordance with the terms contained in a written agreement between you and Sencha.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
/**
 * @class Ext.ux.PortalColumn
 * @extends Ext.container.Container
 * A layout column class used internally be {@link Ext.app.PortalPanel}.
 */
Ext.define('Ext.app.PortalColumn', {
    extend: 'Ext.container.Container',
    alias: 'widget.portalcolumn',
    layout: {
        type: 'anchor'
    },
    defaultType: 'portlet',
    cls: 'x-portal-column',
    autoHeight: true
    //
    // This is a class so that it could be easily extended
    // if necessary to provide additional behavior.
    //
});
