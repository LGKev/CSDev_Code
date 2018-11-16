'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)(); //server.js

app.use(_express2.default.json());
//cannot have function in this line --->    app.get('/',function(req, res) =>{
app.get('/', function (req, res) {
	return res.status(200).send({ 'message': 'First End point' });
});

app.listen(3000);
console.log('app running on port ', 3000);