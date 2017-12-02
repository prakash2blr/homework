"use strict";
const express = require("express"),
	  request = require("request"),
	  bodyParser = require('body-parser'),
	  app = express(),
	  port = process.env.PORT || 3001;

GLOBAL.jwt = require("jwt-simple");	  
GLOBAL.router = express.Router();

const middleWare = require("./app/middleware"),
	  user = require("./app/controllers/user");

app.use(bodyParser.json());

app.use('/api', GLOBAL.router);

app.listen(port);