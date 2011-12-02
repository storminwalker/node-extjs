
require("./node-extjs-core");

var utils = require("./lib/utils");

var fileList = [
	"/extjs/src/data/Connection.js",
	"/extjs/src/Ajax.js",
	
	"/extjs/src/state/Provider.js",
	"/extjs/src/state/Manager.js",
	"/extjs/src/state/Stateful.js",
	
	"/extjs/src/data/ResultSet.js",
	"/extjs/src/data/Batch.js",
	
	"/extjs/src/data/reader/Reader.js",
	"/extjs/src/data/reader/Json.js",
	"/extjs/src/data/reader/Array.js",
	
	"/extjs/src/data/writer/Writer.js",
	"/extjs/src/data/writer/Json.js",
	
	"/extjs/src/data/Errors.js",
	"/extjs/src/data/Operation.js",
	
	"/extjs/src/data/proxy/Proxy.js",
	"/extjs/src/data/proxy/Server.js",
	"/extjs/src/data/proxy/Ajax.js",
	"/extjs/src/data/proxy/Rest.js",
	"/extjs/src/data/proxy/Client.js",
	"/extjs/src/data/proxy/Memory.js",
	
	"/extjs/src/data/validations.js",
	
	"/extjs/src/data/SortTypes.js",
	"/extjs/src/data/Types.js",
	
	"/extjs/src/AbstractManager.js",
	"/extjs/src/PluginManager.js",
		
	"/extjs/src/data/Field.js",

	"/extjs/src/data/IdGenerator.js",
	"/extjs/src/data/SequentialIdGenerator.js",

	"/extjs/src/data/Association.js",
	"/extjs/src/data/BelongsToAssociation.js",
	"/extjs/src/data/HasManyAssociation.js",

	"/extjs/src/ModelManager.js",

	"/extjs/src/data/Model.js",
	
	"/extjs/src/data/AbstractStore.js",
	"/extjs/src/data/StoreManager.js",
	"/extjs/src/data/AbstractStore.js",
	"/extjs/src/data/Store.js",
	"/extjs/src/data/JsonStore.js",
	
	"/extensions/Ext.Component.js", // stub out Ext.Component for EventBus - not required to NodeJS ExtJS
	
	"/extjs/src/app/EventBus.js",
	"/extjs/src/app/Controller.js"
];

utils.injectExtJS(fileList);

console.log(String.format("ExtJS {0} - extended loaded", Ext.getVersion()));

