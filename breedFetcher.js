const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  // the api search is declared, adding the breed name as query field
  const apiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  // request takes the apiUrl, and a callback function to handle the response
  request(apiUrl, (error, response, body) => {
    // if error, returns a callback with the error as error argument, and null as description
    if (error) {
      return callback(error, null);
    // if no error is encountered, we declare data to be a parse of the body of our query 
    } else {
      const data = JSON.parse(body);
      // we check the data size. if it's bigger than 0, we return a callback with null as error (otherwise it'd be flagged as error by the callback in the main function), and the description as desc
      if (data.length > 0) {
        return callback(null, data[0].description);
      // if the size is 0, that means the search concluded breedName could not be found and we return a user-friendly message for no results found.
      } else {
        return callback(null, "No description found :(");
      }
    }
  });
};

module.exports = { fetchBreedDescription };