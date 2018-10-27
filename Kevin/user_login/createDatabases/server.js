const express = require('express'),
      server = express(),
      pg = require('pg');

var session = require('express-session');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var User = require('./users.js');


server.use(bodyParser.urlencoded({enxtended:true}));

//server.use(bodyParser.json()); //parse data from an HTML form
//left over from other project. 

server.use(cookieParser()); //allows access to the cookies stored in browser

server.use(session({
	key: 'user_sid',
	secret: 'randomString',
	resave: false,
	saveUninitialized: false,
	cookie: {
		expires:600000
	}
}));

const pool = new pg.Pool({
	user: 'sysadmin',
	host: '127.0.0.1',
	database: 'groupPojectDatabasse',
	port: '5432'
});

server.set('port', process.env.PORT || 3000);


// check for logged in users.
var sessionChecker = (req, res, next) => {
	if(req.session.user && req.cookies.user_sid){
		res.redirect('/loggedin');
	}
	else{
		next();
	}
};
/* =========================================================================== */
// 				Routes 
/* =========================================================================== */
/* check if a user is already logged in on arrive a home. /  */
server.get('/', sessionChecker, (request, response) => {
	response.redirect('/login');
});

server.route('/signup').get(sessionChecker, (request, response)=>{
	//response.sendFile(__dirname + '/PATH/TO/DECHEN/PAGE!');
	response.sendFile(__dirname + '/HTML/3308LoginPage.html');
	})
	.post((request, response) =>{
		User.create({ //using sequalize to get data. 'users' is the table name. but User is the variable/object 
			username: request.body.username, //TODO: get the field value from dechen.
			passWord: request.body.password
		})
		.then(user=>{
			request.session.user = user.dataValues; //TODO what is this?
			response.redirect('/loggedin');
		})
		.catch(error => {
			response.rediect('/signup');
		});
	});




/* Check to see if the pass word is in the database return true or false */
server.route('/login')
	.get(sessionChecker, (request, response) => {
	//response.sendFile(__dirname + 'PATH/TO/DECHEN/PAGE');
	response.sendFile(__dirname + '/HTML/3308LoginPage.html');
	})
	.post((request, response) => {
		var username = request.body.username, //TODO: get the field value form HTML/dechen
		password = request.body.password;

	User.findOne({ where: {username: username } }).then(function (user){
		if(!user){
		response.redirect('/login');
		}else if(!user.validPassword(password)){
		response.redirect('/login');
		}else{
		request.session.user = user.dataValues;
		response.redirect('/loggedin');
		}
	});
});


server.get('/loggedin', (request, response) =>{
if(request.session.user && request.cookies.user_sid){
	//response.sendFile(__dirname +'/HTML/loggedin.html');
	response.sendFile(__dirname +'/HTML/test_loggedin.html');
	}else{
	response.redirect('/login');	
	}
});


server.get('/logout', (request, response)=>{
	if(request.session.user && request.cookies.user_id){
	response.clearCookie('user_id');
	response.redirect('/');
	}else{
	response.redirect('/login');
	}
});


server.listen(server.get('port'), ()=> console.log(`Sever started on port ${server.get('port')}`));
