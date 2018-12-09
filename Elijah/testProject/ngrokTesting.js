/*The following creates a public url to a web server
on my local machine for testing purposes*/

const ngrok = require('ngrok');

ngrok.connect(port, (err, url) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Tests now accessible at: ${url}`);
  }
});
