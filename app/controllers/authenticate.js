"use strict";
const express = require("express"),
      router = express.Router(),
      moment = require("moment"),
      jwt = require("jwt-simple"),
	  UserModel = require("../models/usermodel");

router.post("/",function(request,response,next) {
	let requestBody = request.body,
		userid = requestBody.userid,
		email = requestBody.email,
		userAll = new UserModel(),
		userDetails = userAll.getUserDetails(userid,email),
		expires,
		payload,
		token,
		secretKey;

    if(userDetails){
    	expires = moment().add(1,'days').valueOf();
    	payload = { 
    				iss: userDetails.userId,
		            exp: expires
		          };
		secretKey = process.env.NODE_ENV;
		token = jwt.encode(payload, secretKey, 'HS512');
		response.status(200).send(token);
    }
	else{
		response.status(401).send("Not Authorized!!!");
	}
});


module.exports=router;