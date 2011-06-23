/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

Commercial Usage
Licensees holding valid commercial licenses may use this file in accordance with the Commercial Software License Agreement provided with the Software or, alternatively, in accordance with the terms contained in a written agreement between you and Sencha.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
/**
 * Books controller
 * Used to manage books; showing the first book, showing a spefied book, loading books, and showing their
 * related views
 */
Ext.define('Books.controller.Books', {
    extend: 'Ext.app.Controller',
    
    models: ['Book'],
    stores: ['Books', 'Reviews'],
    
    refs: [
        {ref: 'bookSideBar', selector: 'booksidebar'},
        {ref: 'bookView',    selector: 'bookview'},
        {ref: 'reviewList',  selector: 'reviewlist'}
    ],
    
    init: function() {
        var me = this;
        
        me.control({
            'booksidebar': {
                selectionchange: me.onSideBarSelectionChange
            }
        });
        
        me.getBooksStore().on({
            scope: me,
            load : me.onBooksStoreLoad
        });
    },
    
    onLaunch: function() {
        this.getBookSideBar().bindStore(this.getBooksStore());
    },
    
    onSideBarSelectionChange: function(view, records) {
        if (records.length) {
            this.showBook(records[0]);
        }
    },
    
    /**
     * Called when the books store is loaded.
     * Checks if there are any records, and if there are, it delegates to show the first record
     * as well as selecting that record in the sidebar
     */
    onBooksStoreLoad: function(store, records) {
        Ext.defer(function() {
            if (records.length) {
                var record = records[0],
                    me = this;
                
                me.getBookSideBar().getSelectionModel().select(record);
            }
        }, 500, this);
    },
    
    /**
     * Shows a specified record by binding it to
     */
    showBook: function(record) {
        var me = this;
        
        me.getBookView().bind(record);
        me.getReviewList().bind(record, me.getReviewsStore());
    }
});
