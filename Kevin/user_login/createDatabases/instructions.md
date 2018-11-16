
I followed these two:
https://linuxhint.com/install-postgresql-ubuntu-easy/
https://linuxhint.com/postgresql-nodejs-tutorial/

For setting up the database:
I follwed the "install postgresql ubuntu easy"
	but then changed the name of the database to be
	groupProjectDatabase;

I created the sysadmin account
with password: 12345



Exact process after the admin was created 
			(not in postgres. inside a normal terminal)
export PGUSER=sysadmin
export PGHOST=127.0.0.1

createdb groupProjectDatabase

At this point the database is created but has no tables.
if you want to poupulate the tables you could start postgres
then go through manually adding. Or run
node createTemperatureDatabase.js

this will add 3 tables to the database. one table per temperature range.
this will also add 2 random links / playlists to each of the tables.
these will be updated once the playlists are created.


I think at this point you could start working the logic for searching
``


