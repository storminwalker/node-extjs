A little bit of a hack to get Sencha's ExtJS library running under NodeJS. 

Essentially mocks out the little bit of DOM required so that it's just a DOM-less framework.

Only includes those objects and components necessary to use ExtJS as a core library with Node.

Also includes some custom extensions to ExtJS to further enhance the library. These are slightly opinionated 
but work.

FUTURE: Adding all model, store related stuff and including custom proxies to CouchDB, Redis etc

Installation:
npm install node-extjs

Usage: 

require("node-extjs");



(Big hat-tip to Christoph Hagenbrock (@agebrock) - basically stole his code but wanted my own repository rather 
than a fork to have better control going forward)




