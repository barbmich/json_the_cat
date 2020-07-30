const request = require('request');
const searchQuery = process.argv.slice(2).toString();
console.log(`Checking description for: ${searchQuery}`);

// const error = 'test';

const outputBreedDesc = informationSearched => {
  const apiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${informationSearched}`;
  request(apiUrl, (error, response, body) => {
    if (error) {
      console.log("database could not be reached");
      return;
    } else {
      const data = JSON.parse(body);
      if (data.length > 0) {
        return console.log(data[0].description);
      } else {
        return console.log("No description found :(");
      }
    }
  })
};

outputBreedDesc(searchQuery);