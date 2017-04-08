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
    console.log(JSON.stringify(results, undefined, 2));
  }
});


var encodedAddress = encodeURIComponent(argv.address);

weather.getWeather();
