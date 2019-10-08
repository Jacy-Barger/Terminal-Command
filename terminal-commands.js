const fs = require('fs')

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');

    console.log(filesToString);
  });
};


module.exports.touch = (fileName) => {
  fs.writeFile(fileName, 'test', 'utf8', (err) => {
  if (err) throw err;
  });
};


module.exports.mkdir = (directoryName) => {
  fs.mkdir(directoryName, { recursive: true }, (err) => {
  if (err) throw err;
  });
};
