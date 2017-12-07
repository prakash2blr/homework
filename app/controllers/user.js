"use strict";
const express = require("express"),
      router = express.Router(),
      moment = require("moment"),
      jwt = require("jwt-simple"),
	  UserModel = require("../models/usermodel");


router.get("/",function(request,response,next) {
	let secretKey = process.env.NODE_ENV,
	  	tokenheader = request.headers['authorization'],
	  	token,
	  	payLoad={},
	  	userAll,
	  	userDetails,
	  	userid=0;
  		if(tokenheader){
  			token=tokenheader.split(" ")[1];
  			payLoad=jwt.decode(token, secretKey, false, 'HS512');
			if(payLoad.iss){
				userAll = new UserModel();
				userid = payLoad.iss;
				userDetails = userAll.getUserById(userid);
				if(userDetails){
					response.status(200).json(userDetails);					
				}
				else{
					response.status(401).json("Not Authorized!!!");					
				}
			}
			else{
				response.status(401).send("Not Authorized!!!");
			}
		}
		else{
			response.status(403).json({
	            error: 'Forbidden: Token does not exists.'
	        });
		}
});

router.post("/",function(request,response,next) {
	let userAll = new UserModel(),
		userDetails = userAll.createUser('userid');
	response.status(200).json(userDetails);
});

router.put("/",function(request,response,next) {
	let userAll = new UserModel(),
		userDetails = userAll.updateByUserId('userid');
	response.status(200).json(userDetails);	
});

router.delete("/",function(request,response,next) {
	let userAll = new UserModel(),
		userDetails = userAll.deleteByUserId('userid');
	response.status(200).json(userDetails);
});

module.exports=router;