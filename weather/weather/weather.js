const request = require('request');

var getWeather = (lat, long, callback) => {
  request({
    url: `https://api.darksky.net/forecast/dcbdb3b43d97ccfc1eb6379f3b97c9b0/${lat},${long}`,
   // url: `https://api.darksky.net/forecast/dcbdb3b43d97ccfc1eb6379f3b97c9b0/37.8267,-122.4233`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      callback("Unable to fetch weather");
    };
  });
};

module.exports.getWeather = getWeather;
