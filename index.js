const { 
  cleanupFolders, 
  extractFolders,
  compressFolders
} = require('./organize');


if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + " path/to/directory");
    process.exit(-1);
}
 
var path = process.argv[2];

let f = async () => {
  await extractFolders(path);
  await cleanupFolders(path); 
//  await compressFolders("clean.tgz", ["2016", "2017", "2018"]);
}

f()
