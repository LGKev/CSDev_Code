# Weather-Based Spotify Playlist Generator
### Team Bytes by Dr. Comp

- Marissa Bueno
- Kevin Kuwata

- Dechen Chhemorito
- Elijah Berumen
- Marc Vucovich
- Zachary Tranverkal

### Summary
This web application will search for an appropriate Spotify playlist to match
the current ambient air temperature  at a given location. The user must register 
a user name and password, then login to view the music search interface. Once loggedin,
user can enter a city and a Spotify playlist will load according to the ambient
temperature. For example, if the termpature is greater than 70 degress F summer
themed music will play. If the termperature is lower than 30 degrees F, colder
theemed music would be loaded. 

![](https://github.com/LGKev/CSDev_Code/blob/master/Kevin/preview.png)

## Code
The code can be found at [CSDev_Code/Kevin/user_login/createDatabases](https://github.com/LGKev/CSDev_Code/blob/master/Kevin/user_login/createDatabases/instructions.md)
and run node server.js. Be sure to have postgres running with a database created
with the instructions within the above directory. 

### Video Demo
[Video Demo](https://drive.google.com/file/d/1BetMoUQPU-Td88dh2oz67tmlxAp8fVcO/view)

### Technologies
- Backend: PostgreSQL
	*Database for users and playlist weather

- Frontend: EJS, node, html

- APIs: Weather


### Testing
You can test our application by:

User login verification:
Step 1: User must press sign up button and create a new username and password. User should be sent to the playlist generator page. 
Step 2: Quit out of webpage, come back and try to login without signing up first. For this step the user should also be sent to the playlist generator page.

Invalid user verification:
Step 1: Initialize webpage but user does not sign up with a valid username and password. 
Step 2: User attempts to login without a valid username or password. User should be sent back to login page with empty username and password slots. 

Playlist generated based off of temperature of entered location:
Step 1: User logs in and chooses a city from the pulldown bar. Generator should display correct weather pattern of city based off of a three tier scale. 
Step 2: Widget at bottom of page must display playlist that invokes the same feeling that that weather does. User will thoroughly enjoy the music as it corresponds to his/her current mood.
Step 3: User chooses song off playlist, or chooses to play playlist from the begin. Audio can be heard from the computer, and songs get played autonomously until playlist is over.



### Deployment 
//TODO: Someone said they did this on Heroku. 
You can find our deployed application (here)[link to the heroku app]



