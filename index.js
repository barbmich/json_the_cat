const { fetchBreedDescription } = require('./breedFetcher');
const breedName = process.argv[2].toString();

// function takes breedName as argument 1, and a callback that determines what to do with the return of the request function.
fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    
    console.log(desc);
  }
});