const fs = require("fs")

const argv = process.argv.slice(2)
const url = argv[0]

const request = require('request');

const search = 'https://api.thecatapi.com/v1/breeds/search?q='
const searchBreed = search + url

request(searchBreed, (error, response, body) => {
  if (error) {
    console.log('This is an error: ', error)
  }
  const data = JSON.parse(body)
  const catInfo = data[0]
  if (catInfo) {
    console.log(catInfo)
  } else {
    console.log("Breed not found!")
  }
});
