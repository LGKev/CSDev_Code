/* ===============================================================*/
/* ===============================================================*/
To run, set up a database according to the postgres set up guide, Make a user Sysadmin with password 12345, at port 5432 at host:127.0.0.1
Then you can run node server.js and it shold run. If it doesn't follow the errors until fixed. 
Go to
https://github.com/LGKev/CSDev_Code/tree/master/Kevin/user_login/createDatabases

	Summary:
  - Users are stored in groupprojectdatabase
  - Weather Tables are stored in weather2 (these hold the iref portion)
  - Weather Api can get temperature
  - Playlist returned 
  - CSS loads 
  
   TODO:
- Merge two databases weather2 into groupprojectdatabase + code change



node: node -v result: 10.12.0
	npm -v result: 6.4.1
	nvm --version result: 0.33.8


fixing dependencies
nvm install 10.12.0

May need to delete and reinstall the node modules directory. 


/* ===============================================================*/
/* ===============================================================*/

This directory houses all the work that I have done towards the project
any notes or mini projects started.


the important script is the createTemperatureRangeTables.js which
will create 3 tables add them to the database we have built.
then we will add a link to a song to each database. 

the next person to itterate on this should make the irefs be legit playlist links instead. 


be sure to check thsese again because the lab i'm doing right now is changing my dependencies.
to get nvm






I am now editing this repo to make it run on mac, chrome, safair. what is going
on idk so many things are broken but work fin ein inlinux

I was able to force a check login by not using bcrypt.

there is an issue with adding a new user. I am using safarit to test
becasue chrome is being lame and refuse to load server.js.

so now i force the check and it works. 

ok so the issue was the model for sequlize. I had at one point made the database
and didn't have udpateAT and createdAt. they are case sensitive. so you modify
the table to create those columns and allow null. but hte issue is the quotes
need be escaped to get them to be part of the query to create the table the in
the first place. 

the createdatabase.js now should create a table called uers and add 1 user.
actually this already has been proven to work but the bcrypt password wasn't
working.

so here is how you do it. you first must create a user with the bcrypt so the 
password is set correctly!

also the real reason this failed was becasue the model for sequelize. I had
defined createdAt and updatedAt incorrectly so when an add query was issued
we weren't able to add the user becasue the data field din't match up or the
data was wrong type or soemthing but bottom line was fixing User model for
sequalize in the user.js file and making it match the server.js /signup route
where it does "user.create...." the user create was failing.

to be honest, lookin at it again, i think i'm at the original file and the real
reason this wasn't working was becasue of bcrypt checking unsalted passwords
created by my createtables.js script. so in reality we should really make sure
that createtables.js adds the user but only after a password was made 




// tutorial used had to modify a few things
//because of deprecated stuff
https://www.codementor.io/mayowa.a/how-to-build-a-simple-session-based-authentication-system-with-nodejs-from-scratch-6vn67mcy3


		Server is my 'app' in this example. 


I am at the stagde of testing. 

I can display Dechen's login page. I can extract the variables from the user input.

I am currently only testing existing users in the database and see if we can
display a secondary page. 

so far I cannot get past the validation of the password.

The function validPassword is undefined/not a function.

"Unhandled rejection TypeError: User.validPassword is not a function
    at /home/kkuwata/Documents/GroupProject/CSDev_Code/Kevin/user_login/createDatabases/server.js:89:18
    at tryCatcher (/home/kkuwata/Documents/GroupProject/CSDev_Code/Kevin/user_login/createDatabases/node_modules/bluebird/js/release/util.js:16:23)"

I am not sure what the source of the error is because I see module.exports User;

and User has
	has "instanceMethods:"
	validPassword:

goign to pause. 

// fixes
I needed to change the way sequelize model was created

then I needed to server.use(express.stati(pat.join(__dirname +'/HTML')));
to get the css file sheet to load properly.

i can force validPassword = true and get routed to a loggedin.html file
but if I am using just bcryp to check I get always false.

/* ======================================================================== */
// tests 1
/* ======================================================================== */
now I want to know if my database can correctly add a user of if an error is occuring
/ **************************************** /
// 	result from test 1:
/ **************************************** /
I was able to get the database to add a user correctly by forcing a new field in the model
I was only tracking password/user name but when the add was being executed I was mising the
iref field. The iref field is in the database I built but wasn't being included in the 'add'
postgres command. the sotution was to add a field called iref and allow null. then 
when a new entry is created we jsut put the user name into that field.
this allowed the add insert command to actually work to the table. 



/* ======================================================================== */
// tests 2
/* ======================================================================== */
i am focusing on the signup. because i think that if I signup a user 
the user will be added correctly to the database.
then when I do a validate password the password will be actually correct. 
and hopefully return true.
/ **************************************** /
// 	result from test 2:
/ **************************************** /
my guess was correct. soon as I got the database in the correct form and could
add a user with the sign up page I could actually get the user into the database
then once they were in the database I could use login
and check the password with bcrypt and get the result correctly. (true).
then from there I am directed to the logged_in.html page. 

/* ======================================================================== */
// issue 3: can't logout
/* ======================================================================== */
I can't log out of the web page, cookie not deleted
/ **************************************** /
// 	result from test 2:
/ **************************************** /
I had not included the line 

server.use((req, res, next) => {
	if(req.cookies.user_sid && req.session. user){
		res.clearCookie('user_sid';)
	}
	next();
});

then everything worked again


updates from 12/1/18
I am pushing for the idea we use my login screen as the landing page. then we
load marissa's .ejs file and that will call it done.

so now i have landign page. loading login, and that works. then the next page
shown is the EJS file but the styling is all not awesome.

now trying to do a get Weatjher

error with the request because request is global from Her code but not in mine.
so i have to make it global, but luckily i idnt have that so there shouldn't be
any conflicts.......
need to do 
npm install --save request


ok so now we can search, api key is still hard coded, watch the weird line
breaks on copy pasta,


ok so now the getWeather is trying to access the termpature tables from here
original database. so i need to bring on over database.sql and database.js



