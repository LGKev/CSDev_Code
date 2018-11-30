const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express()
var db = require('database');
module.exports = app;



require('dotenv').load();

let apiKey = process.env.MY_API_KEY;

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index', {weather: null, error: null, temp: null, playlist: null});
})


app.post('/', function (req, res, ) {
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
  

  request(url, function (err, response, body ) {
    if(err){
      res.render('index', {weather: null, error: 'Error, please try again', temp: null, playlist: null});
    } else {
      let weather = JSON.parse(body)
      if(weather.main == undefined){
        res.render('index', {weather: null, error: 'Error, please try again', temp: null, playlist: null});
      } else {
        let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        let temp = `${weather.main.temp}`;
        console.log(temp);
        conversion(temp);
        //playlistURL = "5dN1bcsHyvBhViD2ANdYn9";
        //res.render('index', {weather: weatherText, error: null, temp: temp, playlist: playlistURL});
      }
    }
  });
  var query = 'SELECT playlist FROM cold ORDER BY RAND() LIMIT 1';

    db.any(query)
      .then(function (row) {
          response.render('index', {
            weather: weatherText, 
            error: null, 
            temp: temp, 
            playlist: row.playlist })
      })
      .catch(function (err) {
          // display error message in case an error
          request.flash('error', err);
          response.render('store/list', {
            weather: null, 
            error: "error", 
            temp: null, 
            playlist: null })
      })
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