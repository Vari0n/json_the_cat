const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {


    
    if (error) {
      return callback(error, null);
    } 
      const data = JSON.parse(body);
      //console.log(data.length);
      if (data.length !== 0) {
        //console.log("hi");
        const description = data[0].description;
        //console.log(description);
        return callback(null, description);
      } else {
        //console.log("hello");
        return callback("breed not found", null);
      }
      
  });
};

module.exports = {
  fetchBreedDescription
};