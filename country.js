/*
two different ways to access the country name (though you have to enter the country name to operate it,
i.e., 'node country.js japan' will log 'japan')
*/
const country = process.argv.slice(2).pop();
const userInput = process.argv[2];
const fs = require('fs');

const countries = [{name: 'US'}, {name: 'England'}];

fs.readFile('countries.json', function(err, data) { //this is how to parse a JSON file
  var countryInfo = JSON.parse(data);
  countryInfo.forEach(function(obj) {
    if (userInput === obj.name) {
      for (var key in obj) {
        console.log(key + ': ' + obj[key]);
      }
    }
  })
});

// //this is how to iterate through an object's keys and values
// ObjectKit.forEach = function Object_forEach (object, callback) {
//   for (var key in object) {
//     if (object.hasOwnProperty(key)) callback(key, object[key]);
//   }
// };
