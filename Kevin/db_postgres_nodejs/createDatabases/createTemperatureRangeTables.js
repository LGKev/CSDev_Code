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



/* create the table for temperature range 0 - 30 *F*/
pool.query("CREATE TABLE IF NOT EXISTS temp30(id SERIAL PRIMARY KEY, iref_link VARCHAR(255) NOT NULL, playlistName VARCHAR(40) NOT NULL)  ", (err, res) =>{
	console.log(err, res);
});

/* Add songs to the Table just created  */
pool.query("INSERT INTO temp30(id, iref_link, playlistName) VALUES(1, 'spotify:album:4U3SJtvQ2RbExdPO4NsoAi', 'Cold_1')", (err, res) =>{
	console.log(err, res);
});


/* create the table for temperature range 30 - 70 *F*/
pool.query("CREATE TABLE IF NOT EXISTS temp3070(id SERIAL PRIMARY KEY, iref_link VARCHAR(255) NOT NULL, playlistName VARCHAR(40) NOT NULL)  ", (err, res) =>{
	console.log(err, res);
});

/* Add songs to the Table just created  */
pool.query("INSERT INTO temp3070(id, iref_link, playlistName) VALUES(1, 'spotify:track:6x2uJrJKDqtX5cMvDgUfL0', 'pleasant_1')", (err, res) =>{
	console.log(err, res);
});

/* create the table for temperature range 70+ *F*/
pool.query("CREATE TABLE IF NOT EXISTS temp70plus(id SERIAL PRIMARY KEY, iref_link VARCHAR(255) NOT NULL, playlistName VARCHAR(40) NOT NULL)  ", (err, res) =>{
	console.log(err, res);
});

/* Add songs to the Table just created  */
pool.query("INSERT INTO temp70plus(id, iref_link, playlistName) VALUES(1, 'spotify:track:2swu91llDBxeb75tMETplV', 'summer1')", (err, res) =>{
	console.log(err, res);
	pool.end();
});









