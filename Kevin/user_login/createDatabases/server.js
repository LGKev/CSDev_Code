const express = require('express'),
      server = express(),
      pg = require('pg'); //my database connection
      pgp = require('pg-promise'); //other way of database connection

var session = require('express-session');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var User = require('./users.js');
var path = require('path');

server.set('view engine', 'ejs'); // set ejs engine
server.set('views', './views');

/* this was absolute key in getting the style sheet to show up
 *	error in chrome console:
 *	cannot load the stylesheet: /3308LoginPage.css
 * this fixed that and the page loads as expected
 * */
server.use(express.static(path.join(__dirname, '/HTML')));



server.use(bodyParser.urlencoded({extended:true}));

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


server.use((req,res, next) => {
	if(req.cookies.user_sid && req.session.user){
		res.clearCookie('user_sid');
	}
	next();
});


const pool = new pg.Pool({
	user: 'sysadmin',
	host: '127.0.0.1',
	//database: 'groupPojectDatabasse', //mac is case sensitive for postgres
	//like it becomes all lowercase even with create database
	//groupProjectDatabase becomes groupprojectdatabase (watch spelling)
	database: 'grouppojectdatabase',
	port: '5432'
});



server.set('port', process.env.PORT || 3000);


// check for logged in users.
var sessionChecker = (req, res, next) => {
	if(req.session.user && req.cookies.user_sid){
		console.log('cookies checked, ok')
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
	response.sendFile(__dirname + '/HTML/3308LoginPage.html');
	})
	.post((request, response) =>{
		User.create({ //using sequalize to get data. 'users' is the table name. but User is the variable/object 
			username: request.body.signup_username, 
			password: request.body.signup_password,
			lastused_iref: request.body.signup_username		
			})
		.then(user=>{
			request.session.user = user.dataValues; 
			response.redirect('/loggedin');
			console.log('server.js: 77: ');
			console.log('new user created: '+ username );
			console.log('new user created pw:: '+ password );
		})
		.catch(error => {
			response.redirect('/signup');
			console.log('server.js: 81');
			console.log('server.js: sign up failing, user not added!');
		});
	});


server.get('/3308LoginIcon.png', function(req, res){
	res.sendFile(__dirname + '/HTML/3308LoginIcon.png');
	console.log('sending .png from server.js :78');
});


/* Check to see if the pass word is in the database return true or false */
server.route('/login')
	.get(sessionChecker, (request, response) => {
	response.sendFile(__dirname + '/HTML/3308LoginPage.html');
	//response.render('index');
	//response.sendFile(__dirname + '/HTML/basic.html');
	console.log('showing the form');
	})
	.post((request, response) => {
		var username = request.body.username, //TODO: get the field value form HTML/dechen
		password = request.body.password;
		console.log('password: '+ password);
		console.log('user: '+ username);

	User.findOne({ where: {username: username } }).then(function (user){
		if(!user){
		response.redirect('/login');
		console.log('fail 1: user not in database');
		}else if(!user.validPassword(password)){
		console.log('user: ' + user.password);
		console.log('user pw: ' + password);
		response.redirect('/login');
		console.log('fail 2');
		}else{
		request.session.user = user.dataValues;
		response.redirect('/loggedin');
		console.log('we logged in');
		}
	});
});


server.get('/loggedin', (request, response) =>{
if(request.session.user && request.cookies.user_sid){
	//response.sendFile(__dirname +'/HTML/loggedin.html');
//	response.sendFile(__dirname +'/HTML/test_loggedin.html');
    //response.render('index', {weather: null, error: 'server.js::149 this ran, means index.ejs was picked up ', temp: null, playlist    : null});
    response.render('index', {weather: 'cloudy', error: null, temp: null, playlistURL: '38e6606df37bfe25e9eefcbf213cda6c'} );


	console.log('did this run?'); //if I force validpassword = true, yes this runs
	}else{
	response.redirect('/login');	
	}
});


server.get('/logout', (request, response)=>{
	console.log('logout route exectued');
	if(request.session.user && request.cookies.user_id){
	response.clearCookie('user_id');
	response.redirect('/');
	}else{
	response.redirect('/login');
	}
});


server.listen(server.get('port'), ()=> console.log(`Sever started on port ${server.get('port')}`));
