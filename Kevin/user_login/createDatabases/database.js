var pgp = require('pg-promise')();

const dbConfig = {
   user: 'sysadmin',
   host: '127.0.0.1',
   port: '5432',
   database: 'weather2', //idk why i couldn't create weatherdatabase with sysadmin role
   password: '12345' // Fill in your PostgreSQL password here. Use empty string
                // if you did not set a password
};

//create user sysadmin with encrypted password '12345';
// within postgres


var db = pgp(dbConfig);

module.exports = db;
