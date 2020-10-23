const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/elements/polyfills.js',
    './dist/elements/main.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/name-elements.js');
  // await fs.copyFile(
  //   './dist/air/styles.css',
  //   'elements/login-element.styles.css'
  // );
})();
