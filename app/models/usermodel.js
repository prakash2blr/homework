"use strict";
const fs = require('fs');
let sampleData = JSON.parse(fs.readFileSync('./employee.json', 'utf8')).employees;

class UserModel{
	constructor(){
		this.getUserDetails = function (userid,email) {
			return sampleData.find(emp => {
		    	return emp.userId===userid && emp.emailAddress===email;
		    });
		};
		this.createUser = function (userid,email) {
			console.log("User Create API was called");
			return "User Created";
		};
		this.getUserById = function (userid) {
			return sampleData.find(emp => {
		    	return emp.userId===userid;
		    });
		};
		this.updateByUserId = function (userid) {
			console.log("User Update API was called");
			return "User Updated";
		};
		this.deleteByUserId = function (userid) {
			console.log("User Delete API was called");
			return "User Deleted";
		};				
	}
}
module.exports = UserModel;