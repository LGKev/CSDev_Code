/*https:i//www.codementor.io/mayowa.a/how-to-build-a-simple-session-based-authentication-system-with-nodejs-from-scratch-6vn67mcy3
 * */

var Sequelize = require('sequelize');
var bcrypt = require('bcrypt');

//linux version:
//var sequelize = new Sequelize	('postgres://sysadmin:12345@localhost:5432/groupProjectDatabase');
//mac version: case sensitivity removed
var sequelize = new Sequelize	('postgres://sysadmin:12345@localhost:5432/groupprojectdatabase');

sequelize.authenticate().then(()=> {
	console.log('connection success');
}).catch(err=>{
	console.log('connection fail');
});


/* I apparently can read from the data base I'm connected to, I just
 * validated a password, but I cannot add a user despite it saying I did.
 * when checking in postgres cli, I don't see the added row*/
const User = sequelize.define('user', {
	username: {
		type: Sequelize.STRING,
		unique: true,
		allowNull: false
	},
	password: {
		type: Sequelize.STRING,
		allowNull: false
	},
	lastused_iref: {
		type: Sequelize.STRING,
		allowNull: true
	},
	createdAt: {
		type: Sequelize.STRING,
		allowNull: true
	},
	updatedAt: {
		type: Sequelize.STRING,
		allowNull: true
	}
});

/*
 *
 *  I don't think we have any association because we only have 1 model. 
User.associate = function(models){
	//associate models
};
*/

User.prototype.validPassword = function(password){
	var test_result =  bcrypt.compareSync(password, this.password);
	console.log('users.js: 30: password:  ' + password + '  checked:  ' + this.password);
	console.log('users.js: 30: pw compare result  ' + test_result);
	return bcrypt.compareSync(password, this.password);
	//return true; //TODO: if I force this true I can re route the page.
};

User.addHook('beforeCreate', 'saltPW' , (user) => {
	const salt = bcrypt.genSaltSync();
	console.log('users.js 39: salt' + salt);
	user.password = bcrypt.hashSync(user.password, salt);
	console.log('users.js 40: user.password ' + user.password);
});

sequelize.sync()
	.then(()=> console.log('users table has been created, if one didn\'t exist'))
	.catch(error => console.log('error occured.', error));




module.exports = User;

