const request = require('request');

var getWeather = () => {
  request({
    // url: `https://api.darksky.net/forecast/dcbdb3b43d97ccfc1eb6379f3b97c9b0/${lat},${long}`,
    url: `https://api.darksky.net/forecast/dcbdb3b43d97ccfc1eb6379f3b97c9b0/37.8267,-122.4233`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      console.log(body.currently.temperature);
    } else {
      console.log("Unable to fetch weather");
    };
  });
};

module.exports.getWeather = getWeather;
