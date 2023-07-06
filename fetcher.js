const fs = require('fs');
const request = require('request');
const arg = process.argv.slice(2)
const URL = arg[0]
const PATH = arg[1]

const fetchDownloader = function(url, path) {
request(URL, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  fs.writeFile(PATH, body, err => {
    if (err) {
      console.error(err);
    }
  })
  console.log(`Downloaded and saved ${body.length} bytes to ${PATH}`);
});
}
fetchDownloader(URL, PATH)




