require('./node-extjs');
require('./ext.test');

console.log(Ext.getVersion().version);

console.log(new ext.test());

console.log(new ext.test({
	listeners: {
		"test": function() {
			console.log("yada");
		}
	}
}).getFoo());

var yada = Ext.create("ext.test");
console.log(yada);

yada.on({
	test: function() {
		console.log("yada again");
	}
});

console.log(yada.getFoo());