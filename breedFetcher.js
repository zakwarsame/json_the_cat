const request = require("request");
const args = process.argv.slice(2, 3);
const url = "https://api.thecatapi.com/v1/breeds/search?q=";
const breed = args[0];
// https://api.thecatapi.com/v1/images/search

request(url + breed, function(error, response, body) {
  if (error) {
    return console.log(error);
  }
  const data = JSON.parse(body);

  if (!data[0]) {
    return console.log("Breed not found");
  }
  console.log(data[0].description);
});
