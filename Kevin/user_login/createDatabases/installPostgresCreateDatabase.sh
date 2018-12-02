#!/bin/bash

#summary: hopefully will install the correct npm and postgres, as well as create
#the database called: groupprojectdatabase (case sensitive).

export PGUSER=sysadmin;
export PGHOST=127.0.0.1;


#mac: run this
brew install postgres

#start postgress
pg_ctl -D /usr/local/var/postgres start && brew services start postgresql

#check version
postgres -V

#create database if one does not exist....
psql postgres -tc "SELECT 1 FROM pg_database WHERE datname =
'groupprojectdatabase'" | grep -q 1 || psql -U postgres -c "CREATE DATABASE
groupprojectdatabase"



#x/#/psql postgres -c "CREATE DATABASE groupprojectdatabasee"
psql postgres -U sysadmin -c "\c groupprojectdatabase"

psql postgres -U sysadmin -c "INSERT INTO users (userName, password,
lastUsed_iref) VALUES('testscript', 'shell', 'shell')"


psql postgres -U sysadmin -c "Select * from users;" 

#linux run this:
#sudo apt-get install postgresql

#psql postgres; #start postgres
