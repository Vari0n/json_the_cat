const request = require('request');
let search =  process.argv[2];
request('https://api.thecatapi.com/v1/breeds/search?q=' + search, (error, response, body) => {
    
  console.log('body: ' , body);
  console.log('error: ', error);
  console.log('response: ', response);

  // const data = JSON.parse(body);
  // console.log(data);
  // console.log(typeof data);

});
