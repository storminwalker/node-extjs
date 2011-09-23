
Sencha's (http://www.sencha.com) ExtJS 4 library running under NodeJS (http://www.nodejs.org)

Only includes those objects and components necessary to use ExtJS as a core library with Node.

Also includes some custom extensions to ExtJS to further enhance the library. These are slightly opinionated 
but work.

This utilizes Node's built-in CommonJS loader system to properly load the necessary ExtJS source files. This retains the full stack trace in errors (other implementations have used eval to load the library).

Includes 2 different implementations:

node-extjs-core: just the core library
node-extjs: the core library plus the models, controllers, stores, data access stuff

Installation:

npm install node-extjs

Usage for just core: 

	require("node-extjs-core");

	console.log(Ext.getVersion().version);

Usage for default: 

	require("node-extjs");

	console.log(Ext.getVersion().version);
	
	Ext.define("User", {
	    extend: 'Ext.data.Model',
    
		fields: [
			{name: 'name',     type: 'string'},
			{name: 'age',      type: 'int'},
			{name: 'phone',    type: 'string'},
			{name: 'gender',   type: 'string'},
			{name: 'username', type: 'string'},
			{name: 'alive',    type: 'boolean', defaultValue: true}
		],
	
		validations: [
			{type: 'presence',  field: 'age'},
			{type: 'length',    field: 'name',     min: 2},
			{type: 'inclusion', field: 'gender',   list: ['Male', 'Female']},
			{type: 'exclusion', field: 'username', list: ['Admin', 'Operator']},
			{type: 'format',    field: 'username', matcher: /([a-z]+)[0-9]{2,3}/}
		],
		
		changeName: function() {
			var oldName = this.get('name'),
				newName = oldName + " The Barbarian";
	
			this.set('name', newName);
		}
	});

	var user = Ext.create("User", {
		name : 'Conan',
		age  : 24,
		phone: '555-555-5555'
	});
	
	user.changeName();
	
	console.log(user.get('name')); //returns "Conan The Barbarian"
	
	var errors = user.validate();
	
	console.log(errors);

(Hat-tip to Christoph Hagenbrock (@agebrock))



