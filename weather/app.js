const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');
const request = require('request');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'the address to check weather',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(results.address);
    weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
      if (errorMessage) {
        console.log(errorMessage);
      } else {
        console.log(` - It's ${weatherResults.temperature} degrees, feels like ${weatherResults.apparentTemperature} degrees`);
      }
    });
  }
});
