const { fetchBreedDescription } = require('./breedFetcher1')

const argv = process.argv.slice(2)
const url = argv[0]
const search = 'https://api.thecatapi.com/v1/breeds/search?q='
const breedName = search + url

const thisFunction = fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log(error);
  } else {
    console.log(catDescription);
  }
});