import { enableProdMode, ValueProvider } from '@angular/core';
import { renderModuleFactory } from '@angular/platform-server';
import { REQUEST, RESPONSE } from '@nguniversal/express-engine/tokens';
import { extractExpressRequestData, MonitClient } from '@nvxme/monit-client';
import { MonitRequest } from '@nvxme/monit-ng-client';

import * as express from 'express';
import { readFileSync } from 'fs';
import { join } from 'path';
import 'reflect-metadata';
// These are important and needed before anything else
import 'zone.js/dist/zone-node';

const monit = new MonitClient({
  host: 'ws://monit.novyk.org/ws/client',
  id: 'ngx-kit-website',
  token: process.env.MONIT_TOKEN || 'local',
});

// Work around until @angular/angular fixes Node undefined bug
const domino = require('domino');
Object.assign(global, domino.impl);
(global as any)['KeyboardEvent'] = domino.impl.Event;

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
const app = express();

const PORT = process.env.PORT || 8000;
const DIST_FOLDER = join(process.cwd(), 'dist', 'website');

// Our index.html we'll use as our template
const template = readFileSync(join(DIST_FOLDER, 'index.html')).toString();

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const {AppServerModuleNgFactory, LAZY_MODULE_MAP} = require('../dist-server/main');

// Express Engine
const {ngExpressEngine} = require('@nguniversal/express-engine');
const {provideModuleMap} = require('@nguniversal/module-map-ngfactory-loader');

// Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
//app.engine('html', ngExpressEngine({
//  bootstrap: AppServerModuleNgFactory,
//  providers: [
//    provideModuleMap(LAZY_MODULE_MAP),
//  ],
//}));

app.engine('html', (_: any, options: any, callback: any) => {
  renderModuleFactory(AppServerModuleNgFactory, {
    // Our index.html
    document: template,
    url: options.req.url,
    extraProviders: [
      provideModuleMap(LAZY_MODULE_MAP),
      // make req and response accessible when angular app runs on server
      <ValueProvider>{
        provide: REQUEST,
        useValue: options.req,
      },
      <ValueProvider>{
        provide: RESPONSE,
        useValue: options.req.res,
      },
      <ValueProvider>{
        provide: MonitRequest,
        useValue: extractExpressRequestData(options.req),
      },
    ],
  }).then(html => {
    callback(null, html);
  });
});

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER));

// Server static files from /browser
app.get('*.*', express.static(join(DIST_FOLDER)));

// All regular routes use the Universal engine
app.get('*', (req: any, res: any) => {
  req.readFileSync = readFileSync;
  res.render(join(DIST_FOLDER, 'index.html'), {req});
});

// Start up the Node server
app.listen(PORT, () => {
  console.log(`Node server listening on http://localhost:${PORT}`);
});
