var fs = require("fs");

var window = {
    status: __defineSetter__("status", function(debugStatusMsg){
        console.log(debugStatusMsg);
    })
}

var fileList = [
	"/extjs/src/core/src/Ext.js",
	
	"/extjs/src/core/src/version/Version.js",
		
	"/extjs/src/core/src/lang/String.js",
	"/extjs/src/core/src/lang/Array.js",
	"/extjs/src/core/src/lang/Number.js",
	"/extjs/src/core/src/lang/Date.js",
	"/extjs/src/core/src/lang/Object.js",
	"/extjs/src/core/src/lang/Function.js",

	"/extjs/src/core/src/class/Base.js",
	"/extjs/src/core/src/class/Class.js",
	"/extjs/src/core/src/class/ClassManager.js",
	
	"/extjs/src/core/src/util/TaskManager.js",
	"/extjs/src/core/src/util/Format.js",
	
	"/extjs/src/core/src/class/Loader.js",

	"/extjs/src/core/src/util/DelayedTask.js",	
	"/extjs/src/core/src/util/Event.js",
	
	"/extjs-overrides.js",
	
	"/extjs/src/util/Observable.js",
	"/extjs/src/util/Filter.js",
	"/extjs/src/util/Sorter.js",
	"/extjs/src/util/Sortable.js",
	"/extjs/src/util/AbstractMixedCollection.js"  ,
	"/extjs/src/util/MixedCollection.js",
	"/extjs/src/util/HashMap.js",
	"/extjs/src/util/Inflector.js",
	
	"/extensions/Math.js",
	"/extensions/String.js",
	"/extensions/Guid.js",
	"/extensions/Hex.js"
];

var extBasePath = __dirname + '/../../lib';

var fileList = fileList.map(function(file) {
	return extBasePath + file;
});

var injectExtJS = function(fileList){
	fileList.forEach(function(file) {
		//console.log(file);
		eval(fs.readFileSync(file, encoding = "utf8"));
	});
}

injectExtJS(fileList);
