fs.readFile('countries.json', function(err, data) {
  var countryInfo = JSON.parse(data);
  countryInfo.forEach(function(obj) {
    if (userInput === obj.name) {
      for (var key in obj) {
        console.log(key + ': ' + obj[key]);
      }
    }
  })
});
