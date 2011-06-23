/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

Commercial Usage
Licensees holding valid commercial licenses may use this file in accordance with the Commercial Software License Agreement provided with the Software or, alternatively, in accordance with the terms contained in a written agreement between you and Sencha.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
/**
 * The sidebar view for the application. Used to display a list of books.
 * @extends Ext.view.View
 */
Ext.define('Books.view.book.SideBar', {
    alias: 'widget.booksidebar',
    extend: 'Ext.view.View',
    
    initComponent: function() {
        Ext.apply(this, {
            id: 'sidebar',
            
            dock: 'left',
            width: 180,
            border: false,
            cls: 'sidebar-list',
            
            selModel: {
                deselectOnContainerClick: false
            },
            
            store: '',
            itemSelector: '.product',
            tpl: new Ext.XTemplate(
                '<div class="sidebar-title">Books</div>',
                '<tpl for=".">',
                    '<div class="product">{name}</div>',
                '</tpl>'
            )
        });
                
        this.callParent(arguments);
    }
});
