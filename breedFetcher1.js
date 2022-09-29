const fs = require("fs")

const request = require('request');


// // const search = 'h'
// const searchBreed = search + url

// const fetchBreedDescription = function (breedName, callback) {
//   request(searchBreed, (error, response, body) => {
//     const data = JSON.parse(body)
//     const desc = data[0]
//   });
// }

const fetchBreedDescription = function (breedName, callback) {
  const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null)
      return
    }

    const data = JSON.parse(body)
    if (data.length === 0) {
      callback("Breed not found!", null)
      return
    }

    const catInfo = data[0]
    if (breedName !== catInfo.name) {
      callback(error, "Breed not found.")
    }

    const catDescription = catInfo.description
    callback(null, catDescription)
  });
}

module.exports = { fetchBreedDescription }


// fs.writeFile(path, body, (err) => {
//   if (err) throw err
//   console.log(body)
// })