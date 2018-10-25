I have the hardest time finding resources for this and now there is that joke, every 3 minutes a new javascript frame work appears.

anyway I have followed a few tutorials now and get to about halfway and something stops working, or the next instruction doesn't work.

I found out I was using a  very old version of nodejs (version 4) and then the postgres is also different version. because of this

I am starting over from a post within 2018 and setting up everything as they specify. 

reqs:
	node --version ==> v6.11.4
			my version: 10.12.0
	npm --version ==> 3.5.2
			my version: 6.4.1
	psql --version ==> 9.6.5
			my version now*: 9.6.10




What I did to reproduce my efforts:
	sudo apt-get install postgresql
		I have 9.5 I need 9.6 

	currently have 9.6.10
		google: ubutnu 16.04 postgres 9.6


I am creating a systemadmin user for postres according to the tutorial I am following:
https://linuxhint.com/install-postgresql-ubuntu-easy/
	createuser -EPd sysadmin (from within normal CLI, not postgres CI)
	pw: 12345


normal command line
	export PGUSER=sysadmin
	export PGHOST=127.0.0.1


ok now I am following the rest of the tutorial. above was pre-req stuff. I believe I set up 
npm correctly as my version is more current than the tutorials. here is the tutorial link
https://linuxhint.com/postgresql-nodejs-tutorial/

I need to create the db to continue with this tutorial
createdb mywebstore on normal command line! 
				1) createdb mywebstore
				2) pwd: 12345
				3) exit postgrs. 
	to check to \l (L the letter L)


WOW ok so we have made index.js and a database,
we just connected to it with
node index.js

and it didn't fail... does that mean we can start makign the 
api?

within the index.js I hav e added a function "
pool.query(“CREATE TABLE users(id SERIAL PRIMARY KEY, firstname VARCHAR(40) NOT NULL,
lastName VARCHAR(40) NOT NULL)”, (err, res) => {
console.log(err, res);
pool.end();
});
"

so this will create a new table called users. how do we know that the table didn't already exist?

what if I run node index.js again?
	what happenned: nice error, already exists. thank god.


 I am now combining this tutorial with

"the only nodejs tutorial you'll ever need"
https://codeburst.io/the-only-nodejs-introduction-youll-ever-need-d969a47ef219

I think I can do it. 


a few notes:
' and " differe when copy and pasting
results in weird syntax error just make sure color code correctly

then html documents will show everything
// is not a comment in html but /**/ can comment out a block
/**/

I think I did it!
I have a button that goes to /users and then returns the entire table back!

you can only see it in the server.js console and not in firefox. maybe a console.log
	I don't know where to put it. 



 can we go over the structure of the node js syntax? I am confused with syntax and call backs. and errors  

I am not sure how a post would work

I think I can add a user but will need a lot more logic
to allow user to inptu data from a form.

question:
	how to take data from the form and input into the database

we want to make the id be serial to auto update 


body-parser
embedded java script for partial update pages
put the private keys for data base into the environment variables
and put api key into environmental variable. then put into git ignore



fill database with the playlists created manually by us.
probably store the name of the playlist. names should be unique. 


a table with a list of playlists with unique names

for each playlist make a new table,  with each song in the table.

then we could display the playlists  to the html by 
	SELECT * FROM playlist_1





