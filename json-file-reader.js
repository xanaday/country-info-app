const fs = require('fs');

module.exports =
function jsonFileReader(filePath) {
  return new Promise(function(resolve, reject) {
    fs.readFile(filePath, 'utf8', function(err, data) {
      if (err) {
        reject('there\'s a problem in the reader');
      } else {
        resolve(JSON.parse(data));
      }
    });
  });
}

jsonFileReader('./countryInfo/countries.json');
