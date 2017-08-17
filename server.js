// Load zone.js for the server.
require('zone.js/dist/zone-node');

// Import renderModuleFactory from @angular/platform-server.
var renderModuleFactory = require('@angular/platform-server').renderModuleFactory;

// Import the AOT compiled factory for your AppServerModule.
// This import will change with the hash of your built server bundle.
var AppServerModuleNgFactory = require('./dist-server/main.d6255eab1805c41df9b2.bundle').AppServerModuleNgFactory;

// Load the index.html file.
var index = require('fs').readFileSync('./src/index.html', 'utf8');

// Render to HTML and log it to the console.
renderModuleFactory(AppServerModuleNgFactory, {document: index, url: '/'}).then(html => console.log(html));
