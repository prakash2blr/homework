"use strict";
const moment = require("moment"),
	  UserModel = require("../models/usermodel");


GLOBAL.router.post("/authenticate",function(request,response,next) {
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
		token = GLOBAL.jwt.encode(payload, secretKey, 'HS512');
		response.status(200).send(token);
    }
	else{
		response.status(401).send("Not Authorized!!!");
	}
});

GLOBAL.router.post("/getuser",function(request,response,next) {
	  	let secretKey = process.env.NODE_ENV,
	  		tokenheader = request.headers['authorization'],
	  		token,
	  		payLoad={},
	  		userAll,
	  		userDetails,
	  		userid=0;
  		if(tokenheader){
  			token=tokenheader.split(" ")[1];
  			payLoad=GLOBAL.jwt.decode(token, secretKey, false, 'HS512');
			if(payLoad.iss){
				userAll = new UserModel();
				userid = payLoad.iss;
				userDetails = userAll.getUserById(userid);
				response.status(200).json(userDetails);
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

GLOBAL.router.put("/updateuser",function(request,response,next) {
				let userAll = new UserModel(),
				userDetails = userAll.updateByUserId('userid');
});

GLOBAL.router.delete("/deleteuser",function(request,response,next) {
				let userAll = new UserModel(),
				userDetails = userAll.deleteByUserId('userid');
});