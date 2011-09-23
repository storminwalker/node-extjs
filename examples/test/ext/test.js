
Ext.define("ext.test", {
	extend: "Ext.util.Observable",
    
    foo: "bar",
    
    constructor: function(config) {
    	config = config || {};
		Ext.apply(this, config);

    	this.addEvents("test");
        this.listeners = config.listeners;

    	this.callParent(arguments);
    },
    
    getFoo: function() {
    	this.fireEvent("test", this);
    	return this.foo;
    }
});
