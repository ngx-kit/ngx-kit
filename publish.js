const {execSync} = require('child_process');

const config = require('./release.config.json');

config.packages.forEach(packageName => {
  execSync(`npm publish ./dist/packages/${packageName} --access=public`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  });
});

console.log('publish script completed!');
