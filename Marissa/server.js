let request = require('request');
require('dotenv').load();


let apiKey = process.env.MY_API_KEY;
let city = 'boulder';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`




request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body)
    let temp = `${weather.main.temp}`;
    console.log(temp);
    
  }
});

