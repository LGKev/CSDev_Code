const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express()


require('dotenv').load();
var dt = require('./modules/buenoDate');
var weather = require('./modules/test');

let apiKey = process.env.MY_API_KEY;

//api

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index', {weather: null, error: null});
})

app.get('/testing', function (req, res) {
  res.render('index', {weather: null, error: null});
})

app.post('/testing',function (req, res) {
  let city = req.body.city;
  console.log(city);
  res.write("Test: " + weather.test(city));
  res.end();
})

app.get('/date', function (req, res) {
  res.write("The date and time are currently: " + dt.buenoDate());
  res.end();
})

app.get('/pup', function (req, res) {
  res.render('pup', {pup: "NEWF"})
  res.end();
})







app.post('/', function (req, res) {
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

  request(url, function (err, response, body, ) {
    if(err){
      res.render('index', {weather: null, error: 'Error, please try again'});
    } else {
      let weather = JSON.parse(body)
      if(weather.main == undefined){
        res.render('index', {weather: null, error: 'Error, please try again'});
      } else {
        let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        res.render('index', {weather: weatherText, error: null});
      }
    }
  });
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})