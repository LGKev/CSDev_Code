const express = require('express'),
      server = express();
const pg = require('pg');

const pool = new pg.Pool({
	user: 'sysadmin',
	host: '127.0.0.1',
	database: 'groupProjectDatabase',
	password: '12345',
	port: '5432'
});


/* ======================================================================================================================================================================== */
//				Summary:
//	This file assumes a database called groupProjectDatabase was created with the above credentials. 
//	To create the table first open up the instructions.md, or note the tutorial:
//		"How to Install PostgreSQL on Ubuntu Linux: The Easy Way"
//		https://linuxhint.com/install-postgresql-ubuntu-easy/
//	After said database has been created, you can run this file with:
//		node createTemperatureRangeTables.js
//	Result: should be a database that now has 4 tables. 3 for temperature ranges, and 1 for user name and password. 
/* ======================================================================================================================================================================== */



/* ======================================================================================================================================================================== */
// 							Table Creation for 3 Temperature Ranges.
// 							Each table has 1 song linked to it. 
// 							The link can be replaced with a playlist link.	
// 							more rows can be added.
/* ======================================================================================================================================================================== */
/* create the table for temperature range 0 - 30 *F*/
pool.query("CREATE TABLE IF NOT EXISTS temp30(id SERIAL PRIMARY KEY, iref_link VARCHAR(255) NOT NULL, playlistName VARCHAR(40) NOT NULL)  ", (err, res) =>{
	console.log(err, res);
});

/* Add songs to the Table just created  */
pool.query("INSERT INTO temp30(iref_link, playlistName) VALUES('spotify:album:4U3SJtvQ2RbExdPO4NsoAi', 'Cold_1')", (err, res) =>{
	console.log(err, res);
});


/* create the table for temperature range 30 - 70 *F*/
pool.query("CREATE TABLE IF NOT EXISTS temp3070(id SERIAL PRIMARY KEY, iref_link VARCHAR(255) NOT NULL, playlistName VARCHAR(40) NOT NULL)  ", (err, res) =>{
	console.log(err, res);
});

/* Add songs to the Table just created  */
pool.query("INSERT INTO temp3070(iref_link, playlistName) VALUES('spotify:track:6x2uJrJKDqtX5cMvDgUfL0', 'pleasant_1')", (err, res) =>{
	console.log(err, res);
});

/* create the table for temperature range 70+ *F*/
pool.query("CREATE TABLE IF NOT EXISTS temp70plus(id SERIAL PRIMARY KEY, iref_link VARCHAR(255) NOT NULL, playlistName VARCHAR(40) NOT NULL)  ", (err, res) =>{
	console.log(err, res);
});

/* Add songs to the Table just created  */
pool.query("INSERT INTO temp70plus(iref_link, playlistName) VALUES('spotify:track:2swu91llDBxeb75tMETplV', 'summer1')", (err, res) =>{
	console.log(err, res);
});





/* ======================================================================================================================================================================== */
// 							User Login Database.
/* ======================================================================================================================================================================== */
/* create the table for temperature range 0 - 30 *F*/
pool.query("CREATE TABLE IF NOT EXISTS users(id SERIAL PRIMARY KEY, userName  VARCHAR(255) NOT NULL, passWord VARCHAR(255) NOT NULL, lastUsed_iref VARCHAR(255) NOT NULL)  ", (err, res) =>{
	console.log(err, res);
	console.log('succes: created table: users');
});

/* Add songs to the Table just created  */
pool.query("INSERT INTO users (userName, password, lastUsed_iref) VALUES('KevinKuwata', 'kk123',  'spotify:track:2swu91llDBxeb75tMETplV')", (err, res) =>{
	console.log(err, res);
	console.log('added 1 user');
});
pool.query("INSERT INTO users (userName, password, lastUsed_iref) VALUES('user2', 'us2',  'spotify:track:2swu91llDBxeb75tMETplV')", (err, res) =>{
	console.log(err, res);
	console.log('added 1 user');
	pool.end();
});










