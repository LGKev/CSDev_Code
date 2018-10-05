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
