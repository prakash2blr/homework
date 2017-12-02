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
		this.getUserById = function (userid) {
			return sampleData.find(emp => {
		    	return emp.userId===userid;
		    });
		};
		this.updateByUserId = function (userid) {
			console.log("update API was called");
			return "updated";
		};
		this.deleteByUserId = function (userid) {
			console.log("delete API was called");
			return "deleted";
		};				
	}
}
module.exports = UserModel;