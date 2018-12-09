//Unit testing valid password in user.js
const assert = require('chai').assert;
/*
const User = require('../users.js');//since we go outside of the folder for testing purposes

describe('Testing Valid Password', function(){

  it('Should assert valid password', function() {
    var check = true;
    assert.equal(User.prototype.validPassword(123), check);
  })

})
*/

//Unit testing the /loggedin route in server.js

//const assert = require('chai').assert;
const expect = require('chai').expect
const request = require('supertest');
const server = require('../server.js')

//Testing okay status of loggedin route
describe('Unit testing the /loggedin route', function() {

    it('should return OK status', function() {
      return request(server)
        .get('/loggedin')
        .then(function(response){
            assert.equal(response.status, 302)
        })
    });
    //Unit testing the loggedin message
    it('should return message on rendering', function() {
          return request(server)
            .get('/loggedin')
            .then(function(response){
                expect(response.text).to.contain('Found. Redirecting to /login');
        })
    });

});

//Testing okay status of logout route
describe('Unit testing the /logout route', function() {

    it('should return OK status', function() {
      return request(server)
        .get('/logout')
        .then(function(response){
            assert.equal(response.status, 302)
        })
    });
    //Unit testing the logout message
    it('should return message on rendering', function() {
          return request(server)
            .get('/logout')
            .then(function(response){
                expect(response.text).to.contain('Found. Redirecting to /login');
        })
    });

});

//BOTH TEST SCENARIOS ARE SUCCESSFUL
