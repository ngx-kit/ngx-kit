require('zone.js/dist/zone-node');
require('reflect-metadata');
const express = require('express');
const fs = require('fs');

const {AppServerModuleNgFactory, LAZY_MODULE_MAP} = require('../dist-server/main.bundle');

// Our index.html we'll use as our template
const template = fs.readFileSync('./dist/index.html').toString();

// Express server
const app = express();
// Express Engine
const {ngExpressEngine} = require('@nguniversal/express-engine');
// Import module map for lazy loading
const {provideModuleMap} = require('@nguniversal/module-map-ngfactory-loader');

// Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
app.set('views', './dist');

// Server static files from /browser
app.get('*.*', express.static('./dist'));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  req.readFileSync = fs.readFileSync;
  res.render('index.html', {req});
});

// Start up the Node server
app.listen(8000, () => {
  console.log(`Node server listening on http://localhost:8000`);
});
