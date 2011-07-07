
Ext.Loader.setConfig({
    enabled: true,
	paths: {
		'Ext': __dirname + "/../lib/extjs/src/"
    }
});


Ext.Error = {
	raise: function(msg){
		console.log("ExtJS Error");
		console.error(msg)
	}
}

/* from ext-more.js */
Ext.callback = function(callback, scope, args, delay){
	if(Ext.isFunction(callback)){
		args = args || [];
		scope = scope || window;
		if (delay) {
			Ext.defer(callback, delay, scope, args);
		} else {
			callback.apply(scope, args);
		}
	}
};
