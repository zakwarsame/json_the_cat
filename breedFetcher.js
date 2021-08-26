const request = require("request");
const args = process.argv.slice(2, 3);
const url = "https://api.th3ecatapi.com/v1/breeds/search?q=";
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

  console.error("error:", error); // Print the error if one occurred
  console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  console.log(data[0].description);
  console.log("body:", typeof data); // Print the HTML for the Google homepage.
});
