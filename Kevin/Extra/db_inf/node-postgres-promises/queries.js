var promise = require('bluebird');

var options = {
	promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://kkuwata:kwatj0w1@localhost:5432/puppies';
var db = pgp({ 
	host: 'localhost',
	port: 5432,
	database: 'puppies', 
	user: 'kkuwata'
	password: 'kwatj0w1'
});

function getAllPuppies(req, res, next){
	db.any('SELECT * FROM pups').then(function (data){
       		res.status(200)
		.json({ 
		status:  'success', 
		data: data,
		message: 'Retrieved All Puppies'
		});
	})
		.catch(function(err){
		return next(err);
		});
}


