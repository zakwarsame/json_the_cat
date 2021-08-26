const request = require("request");
const url = "https://api.thecatapi.com/v1/breeds/search?q=";
// https://api.thecatapi.com/v1/images/search

const fetchBreedDescription = function(breedName, callback) {
  request(url + breedName, function(error, response, body) {
    if (error) {
      return callback(error, null);
    }
    const data = JSON.parse(body);

    if (!data[0]) {
      return callback("Breed not found", null);
    }

    callback(null, data[0].description);
  });
};

module.exports = { fetchBreedDescription };
