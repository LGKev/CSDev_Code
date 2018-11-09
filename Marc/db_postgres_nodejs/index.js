const pg = require('pg');


const pool = new pg.Pool({
	user: 'sysadmin',
host: '127.0.0.1',
database: 'groupProjectDatabase',
password: '12345',
port: '5432'});


/* very basic test to see connection made */

pool.query("SELECT NOW()", (err, res) => {
console.log(err, res);
pool.end();
});



/* a test to create a new table- worked */
/*
pool.query("CREATE TABLE users(id SERIAL PRIMARY KEY, firstname VARCHAR(40) NOT NULL, lastName VARCHAR(40) NOT NULL)", (err, res) => {
	console.log(err, res);
pool.end();
});
*/

/* adding a new user example */
/*
pool.query("INSERT INTO users(id, firstName, lastName) VALUES(1, 'Shahriar', 'Shovon')", (err, res)=> {
	console.log(err, res);
	pool.end();
	});
*/

/* updating a new user example */
/*
pool.query("UPDATE users set firstName='Kevin', lastName='Kuwata' WHERE id=1", (err, res)=> {
	console.log(err, res);
	pool.end();
	});

*/




