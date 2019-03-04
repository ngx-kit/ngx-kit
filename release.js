const sh = require('shelljs');
const path = require('path');
const fs = require('fs-extra');

const pkgJson = require('./package.json');

sh.echo('Starting ngx-kit release…');

buildPkg();
buildShematics();
preparePublishing();
publish();

sh.echo(`ngx-kit ${pkgJson.version} released!`);
sh.exit(0);


function packages() {
  return [
    ['core', 'packages/core/schematics'],
    ['ui-accordion', 'packages/ui/schematics'],
    ['ui-alert', 'packages/ui/schematics'],
    ['ui-badge', 'packages/ui/schematics'],
    ['ui-breadcrumbs', 'packages/ui/schematics'],
    ['ui-button', 'packages/ui/schematics'],
    ['ui-carousel', 'packages/ui/schematics'],
    ['ui-checkbox', 'packages/ui/schematics'],
    ['ui-date-picker', 'packages/ui/schematics'],
    ['ui-dialog', 'packages/ui/schematics'],
    ['ui-drawer', 'packages/ui/schematics'],
    ['ui-dropdown', 'packages/ui/schematics'],
    ['ui-ext-select', 'packages/ui/schematics'],
    ['ui-file', 'packages/ui/schematics'],
    ['ui-form', 'packages/ui/schematics'],
    ['ui-loading-bar', 'packages/ui/schematics'],
    ['ui-modal', 'packages/ui/schematics'],
    ['ui-notification', 'packages/ui/schematics'],
    ['ui-popup', 'packages/ui/schematics'],
    ['ui-radio', 'packages/ui/schematics'],
    ['ui-rating', 'packages/ui/schematics'],
    ['ui-scroll', 'packages/ui/schematics'],
    ['ui-select', 'packages/ui/schematics'],
    ['ui-slider', 'packages/ui/schematics'],
    ['ui-tabs', 'packages/ui/schematics'],
    ['ui-text', 'packages/ui/schematics'],
    ['ui-toggle', 'packages/ui/schematics'],
    ['ui-tooltip', 'packages/ui/schematics'],
    ['ui-vertical-menu', 'packages/ui/schematics'],
  ];
}


function buildPkg() {
  sh.echo('Build packages with ng-packagr…');
  packages().forEach(pkg => {
    if (sh.exec(`ng run ${pkg[0]}:build`).code !== 0) {
      sh.echo('Build error!');
      sh.exit(1);
    }
  });
}

function buildShematics() {
  sh.echo('Build shematics…');
  packages().forEach(pkg => {
    const schem = require(path.resolve(pkg[1], 'schematics.js'));
    schem(pkg[0], path.resolve(__dirname, 'dist'));
  });
}

function preparePublishing() {
  sh.echo('Set version to package.json files…');
  packages().forEach(pkg => {
    const pkgPath = path.resolve(__dirname, `./dist/${pkg[0]}/package.json`);
    const source = fs.readFileSync(pkgPath, 'utf-8');
    const result = source.replace(/0\.0\.0\-PLACEHOLDER/g, pkgJson.version);
    fs.writeFileSync(pkgPath, result);
  });
}

function publish() {
  sh.echo('Publish packages to npm…');
  packages().forEach(pkg => {
    const alphaTag = pkgJson.version.indexOf('alpha') !== -1;
    const betaTag = pkgJson.version.indexOf('beta') !== -1;
    if (sh.exec(`npm publish ./dist/${pkg[0]} --access=public ${alphaTag ? '--tag=alpha' : ''} ${betaTag ? '--tag=beta' : ''}`).code !== 0) {
      sh.echo('Publishing error!');
      sh.exit(1);
    }
  });
}
