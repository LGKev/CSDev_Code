//server.js

import express from 'express';

const app = express()

	app.use(express.json())
		//cannot have function in this line --->    app.get('/',function(req, res) =>{
	app.get('/',(req, res) =>{
		return res.status(200).send({'message': 'First End point'});
	})

app.listen(3000);
console.log('app running on port ', 3000);
