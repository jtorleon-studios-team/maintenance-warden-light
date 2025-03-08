const fs = require('fs');
const path = require('path');

function load(app) {
  console.log("fix link");
  const outputDirectory = app.options.getValue('out');
  app.renderer.on('endRender', () => processDirectory(outputDirectory));
  
}

module.exports = {
  load: load
};
