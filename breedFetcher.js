const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const apiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(apiUrl, (error, response, body) => {
    if (error) {
      return callback(error, null);
    } else {
      const data = JSON.parse(body);
      if (data.length > 0) {
        return callback(null, data[0].description);
      } else {
        return callback(null, "No description found :(");
      }
    }
  });
};

module.exports = { fetchBreedDescription };