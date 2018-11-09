const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express()


require('dotenv').load();

let apiKey = process.env.MY_API_KEY;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index', {weather: null, error: null});
})


app.post('/', function (req, res, ) {
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
  

  request(url, function (err, response, body ) {
    if(err){
      res.render('index', {weather: null, error: 'Error, please try again'});
    } else {
      let weather = JSON.parse(body)
      if(weather.main == undefined){
        res.render('index', {weather: null, error: 'Error, please try again'});
      } else {
        let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        let temp = `${weather.main.temp}`;
        console.log(temp);
        conversion(temp);
        res.render('index', {weather: weatherText, error: null});
      }
    }
  });
})

function conversion(temp) {
  if(temp>70){
    console.log('hot')
  } else {
    console.log('cold')
  }
}

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})