const sh = require('shelljs');
const path = require('path');
const fs = require('fs-extra');

const pkg = require('./package.json');

sh.echo('Starting ngx-kit release…');

build();
prepare();
publish();

sh.echo(`ngx-kit ${pkg.version} released!`);
sh.exit(0);


function packages() {
  return [
    'core',
    'ui-accordion',
    'ui-alert',
    'ui-badge',
    'ui-breadcrumbs',
    'ui-button',
    'ui-carousel',
    'ui-checkbox',
    'ui-date-picker',
    'ui-dialog',
    'ui-drawer',
    'ui-dropdown',
    'ui-ext-select',
    'ui-file',
    'ui-form',
    'ui-loading-bar',
    'ui-modal',
    'ui-notification',
    'ui-popup',
    'ui-radio',
    'ui-rating',
    'ui-scroll',
    'ui-select',
    'ui-slider',
    'ui-tabs',
    'ui-text',
    'ui-toggle',
    'ui-tooltip',
    'ui-vertical-menu',
  ];
}


function build() {
  sh.echo('Build packages with ng-packagr…');
  packages().forEach(name => {
    if (sh.exec(`ng run ${name}:build`).code !== 0) {
      sh.echo('Build error!');
      sh.exit(1);
    }
  });
}

function prepare() {
  sh.echo('Set version to package.json files…');
  packages().forEach(name => {
    const pkgPath = path.resolve(__dirname, `./dist/${name}/package.json`);
    const source = fs.readFileSync(pkgPath, 'utf-8');
    const result = source.replace(/0\.0\.0\-PLACEHOLDER/g, pkg.version);
    fs.writeFileSync(pkgPath, result);
  });
}

function publish() {
  sh.echo('Publish packages to npm…');
  packages().forEach(name => {
    const alphaTag = pkg.version.indexOf('alpha') !== -1;
    const betaTag = pkg.version.indexOf('beta') !== -1;
    if (sh.exec(`npm publish ./dist/${name} --access=public ${alphaTag ? '--tag=alpha' : ''} ${betaTag ? '--tag=beta' : ''}`).code !== 0) {
      sh.echo('Publishing error!');
      sh.exit(1);
    }
  });
}
