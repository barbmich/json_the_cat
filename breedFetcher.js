const request = require('request');
const breed = process.argv.slice(2).toString();
console.log(`Checking description for: ${breed}`);

const apiUrl = "https://api.thecatapi.com/v1/breeds/";
// const error = 'test';

const outputBreedDesc = breed => {
  request(apiUrl, (error, response, body) => {
    // if (error) {
    //   return console.log(error);
    // }
    const data = JSON.parse(body);
    for (const entry of data) {
      if (entry.name === breed) {
        return console.log(entry.description);
      }
    }
    return console.log("No description found :(");
  });
};

outputBreedDesc(breed);