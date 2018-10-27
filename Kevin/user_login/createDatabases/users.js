/*https://www.codementor.io/mayowa.a/how-to-build-a-simple-session-based-authentication-system-with-nodejs-from-scratch-6vn67mcy3
 * */

var Sequalize = require('sequelize');
var bcrypt = require('bcrypt');

var sequalize = new Sequalize	('postgres://sysadmin:12345@localhost:5432/groupProjectDatabase');

var User = sequalize.define('users', {
	username: {
		type: Sequalize.STRING,
		unique: true,
		allowNull: false
	},
	password: {
		type: Sequalize.STRING,
		allowNull: false
	}
},{
	hooks: {
		beforeCreate: (user) => {
		const salt = bcrypt.genSaltSync();
		user.password = bcrypt.hashSync(user.password, salt);
		}
	},
	instanceMethods:{
	validPassword: function(password){
		return bcrypt.compareSync(password, this.password);
		}
	}
});

sequalize.sync()
	.then(()=> console.log('users table has been created, if one didn\'t exist'))
	.catch(error => console.log('error occured.', error));


module.exports = User;

