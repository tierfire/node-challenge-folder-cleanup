const fs = require('fs');
const util = require('util');
let tar = require('tar');

async function extractFolders(path) {
  console.log('going to extract', path);

  await tar.x(  // or tar.extract(
    {
      file: 'folders.tgz'
    }
  );
}

async function compressFolders(path, years) {
  console.log('going to compress folders', path, years);
  
  await tar.c(
  {
    gzip: true,
    file: path
  },
  years)
  .catch(console.log)
}

let cleanupFolders = (path) => {
  console.log('FIND ME IN THE CODE!');
  console.log('cleaning up', path);
  //You start here!
}

module.exports = {
  cleanupFolders,
  extractFolders,
  compressFolders
}