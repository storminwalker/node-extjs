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
 * This class is used as a mixin.
 *
 * This class is to be used to provide basic methods for binding/unbinding stores to other
 * classes. In general it will not be used directly.
 */
Ext.define('Ext.util.Bindable', {

    /**
     * Binds a store to this instance.
     * @param {Ext.data.AbstractStore/String} [store] The store to bind or ID of the store.
     * When no store given (or when `null` or `undefined` passed), unbinds the existing store.
     */
    bindStore: function(store, initial, propertyName) {
        // Private params
        // @param {Boolean} [initial=false] True to not remove listeners from existing store.
        // @param {String} [propertyName="store"] The property in this object under which to cache the passed Store.
        propertyName = propertyName || 'store';

        var me = this,
            oldStore = me[propertyName];

        if (!initial && oldStore) {
            // Perform implementation-specific unbinding operations *before* possible Store destruction.
            me.onUnbindStore(oldStore, initial, propertyName);

            if (store !== oldStore && oldStore.autoDestroy) {
                oldStore.destroyStore();
            } else {
                me.unbindStoreListeners(oldStore);
            }
        }
        if (store) {
            store = Ext.data.StoreManager.lookup(store);
            me.bindStoreListeners(store);
            me.onBindStore(store, initial, propertyName);
        }
        me[propertyName] = store || null;
        return me;
    },

    /**
     * Gets the current store instance.
     * @return {Ext.data.AbstractStore} The store, null if one does not exist.
     */
    getStore: function(){
        return this.store;
    },

    /**
     * Unbinds listeners from this component to the store. By default it will remove
     * anything bound by the bindStoreListeners method, however it can be overridden
     * in a subclass to provide any more complicated handling.
     * @protected 
     * @param {Ext.data.AbstractStore} store The store to unbind from
     */
    unbindStoreListeners: function(store) {
        // Can be overridden in the subclass for more complex removal
        var listeners = this.storeListeners;
        if (listeners) {
            store.un(listeners);
        }
    },

    /**
     * Binds listeners for this component to the store. By default it will add
     * anything bound by the getStoreListeners method, however it can be overridden
     * in a subclass to provide any more complicated handling.
     * @protected 
     * @param {Ext.data.AbstractStore} store The store to bind to
     */
    bindStoreListeners: function(store) {
        // Can be overridden in the subclass for more complex binding
        var me = this,
            listeners = Ext.apply({}, me.getStoreListeners(store));

        if (!listeners.scope) {
            listeners.scope = me;
        }
        me.storeListeners = listeners;
        store.on(listeners);
    },

    /**
     * Gets the listeners to bind to a new store.
     * @protected
     * @param {Ext.data.Store} store The Store which is being bound to for which a listeners object should be returned.
     * @return {Object} The listeners to be bound to the store in object literal form. The scope
     * may be omitted, it is assumed to be the current instance.
     */
    getStoreListeners: Ext.emptyFn,

    /**
     * Template method, it is called when an existing store is unbound
     * from the current instance.
     * @protected
     * @param {Ext.data.AbstractStore} store The store being unbound
     * @param {Boolean} initial True if this store is being bound as initialization of the instance.
     */
    onUnbindStore: Ext.emptyFn,

    /**
     * Template method, it is called when a new store is bound
     * to the current instance.
     * @protected
     * @param {Ext.data.AbstractStore} store The store being bound
     * @param {Boolean} initial True if this store is being bound as initialization of the instance.
     */
    onBindStore: Ext.emptyFn    
});
