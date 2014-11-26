var Document = require('stringdom');

global.document  = new Document();
document.location = {protocol: 'http:'};
global.window    = global.document;
global.location  = {search: ''};
global.navigator = {userAgent: 'Node'};

document.write([
  '<html>',
  ' <head>',
  '<script src="'+__dirname + "/lib/extjs/src/"+'"></script>',
  '</head>',
  '<body></body>',
  '</html>'
].join(''));

var scripts = document.getElementsByTagName('script'),
    currentScript = scripts[scripts.length - 1];
currentScript.src = currentScript.getAttribute('src'); //because class/Loader.js references src in line 1530

var utils = require("./lib/utils");

var fileList = [
	"/extjs/src/Ext.js",
	"/extjs/src/version/Version.js",
	"/extjs/src/Ext-more.js",
    
	"/extjs/src/lang/String.js",
	"/extjs/src/lang/Array.js",
	"/extjs/src/lang/Number.js",
	"/extjs/src/lang/Date.js",
	"/extjs/src/lang/Object.js",
	"/extjs/src/lang/Function.js",
  //"/extjs/src/lang/Error.js", //NOT, because win.setInterval(notify, 1000); on the last lines, leaving Node hanging

	"/extjs/src/class/Base.js",
	"/extjs/src/class/Class.js",
	"/extjs/src/class/ClassManager.js",
  
  //"/extjs/src/util/TaskManager.js", NOT, bacuse Cannot read property 'isInstance' of undefined at src\class\Class.js:402:37
	"/extjs/src/util/Format.js",
  
	"/extjs/src/class/Loader.js",

	"/extjs/src/util/DelayedTask.js",  
	"/extjs/src/util/Event.js",
  
	"/extjs-overrides.js",
  
	"/extjs/src/EventManager.js", //extra required by util/Observable.js 
	"/extjs/src/util/Observable.js",
	"/extjs/src/util/Filter.js",
	"/extjs/src/util/Sorter.js",
	"/extjs/src/util/Sortable.js",
	"/extjs/src/util/AbstractMixedCollection.js"  ,
	"/extjs/src/util/MixedCollection.js",
	"/extjs/src/util/HashMap.js",
	"/extjs/src/util/Inflector.js",
	"/extjs/src/util/Grouper.js",
    
	"/extensions/Math.js",
	"/extensions/String.js",
	"/extensions/Guid.js",
	"/extensions/Hex.js"
];

utils.injectExtJS(fileList);

console.log(String.format("ExtJS {0} - core loaded", Ext.getVersion()));
