var pgp = require('pg-promise')();

const dbConfig = {
   host: 'localhost',
   port: 5431,
   database: 'weather',
   user: 'postgres',
   password: '' // Fill in your PostgreSQL password here. Use empty string
                // if you did not set a password
};

var db = pgp(dbConfig);

module.exports = db;
