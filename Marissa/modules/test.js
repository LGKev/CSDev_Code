const request = require('request');
const city = require('../server')
//api

let apiKey = process.env.MY_API_KEY;

exports.test = function (req, res, city) {
  
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

  request(url, function (err, response, body) {
    if(err){
      console.log("error with call")
      res.render('index', {weather: null, error: 'Error, please try again'});
    } else {
      let weather = JSON.parse(body)
      if(weather.main == undefined){
      	console.log("error");
        //res.render('index', {weather: null, error: 'Error, please try again'});
      } else {
      	weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
      	console.log(weatherText);
        //return weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        //res.render('index', {weather: weatherText, error: null});
      }
    }
  });
};

