# SQL Experiments
	Place to version control small tests for SQL development. Intended to create a simple database with email and passwords. For this test only 5 entries with 2 fields. 




I am going to create a heroku app here to see how deploying the data base works.


I am following this guide:
https://devcenter.heroku.com/articles/heroku-postgresql

Following this guide for PostgreSQL Database on Linux:
	http://www.yolinux.com/TUTORIALS/LinuxTutorialPostgreSQL.html
	this looked a little dated and a few of the commands didn't work the way I expected. Finding a newer tut.


Installing PostgreSQL Database with:
	sudo apt-get -y install postgresql

now following this guide for PostgreSQL and Linux
	https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-16-04
"	You are connected to database "kkuwata" as user "kkuwata" via socket in "/var/run/postgresql" at port "5432".


I created a data base with 4 entries. now trying to put it to Heroku
	pg_dump
pg_dump -Fc --no-acl --no-owner -h localhost -U kkuwata kkuwata > kkuwata.dump

	kkuwata was the database and kk was the password.

I have eexported the database kkuwata. Now going to put onto aws.
	suggested by : 
	https://devcenter.heroku.com/articles/heroku-postgres-import-export#import


heroku config -a sqlkevin // to see the variables sqlkevin is the app name

I was unable to get the database backup kkuwata.dump to heroku's postgres database. 
	CORRECTION: actually I was succeful in linking to heroku. Key was making link public. I could tell that the link was not public because after clicking it it says "access denied" under messages. where as a public accessible would allow a download of the file"

Summary
===========

- setting up credentials/ roles/ for PostgresSQL 
- create a database with PostgresSQL on my linux machine
- export that database with the command:
	pg_dump -Fc --no-acl --no-owner -h localhost -U kkuwata kkuwata > kkuwata.dump
- load that to AWS s3 hosting.
	make link public! click button, click link, should download if valid.
- load the link to the heroku database by doing
	heroku pg:backups:restore 'link to the file that you just did above' DATABASE_URL -a sqlkevin
	where sqlkevin is the app name
	DATABASE_URL is the config variable associated with the linked file.

What's Next: points for the next scrum meeting
===========

- Not sure how to see the database. It would be nice to be able to view the database. 
- maybe try to have some logic in node.js to select a user, get its location, then interact with spotify?
- what is the TEAM's idea for the use cases for the database,
	how do we see this thing being used. currently its just storing username and password
- automate adding elements to the database? 
	prompt the user, get user input, use postSQL commands like the following to add them, maybe some regex checking
	INSERT INTO users_table (email, password, zipcode ) VALUES ('kevin@email.com', 'mywordofpass', '80301');


