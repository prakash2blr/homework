# This is simple example for microservice with express and JWT

# Steps to install (run following commands)

1) npm install
2) export/set NODE_ENV="your secret key" (Command depends on your OS)
3) grunt (for build and quality checks)
4) npm start

# API
1) go to your favourite rest client and use below url to authenticate user<br />
	url : `http://<domain>:port(default is 3001 )/api/authenticate`<br />
	payload : <br />{<br />
			&nbsp;"userid":"1",<br />
			&nbsp;"email":"romin.k.irani@gmail.com"<br />
		}<br />
	response : auth token<br />

2) go to your favourite rest client and use below url to get details of user<br />
	url : `http://<domain>:port(default is 3001 )/api/getuser`<br />
	header : `Bearer <auth token from authenticate api>`<br />
	response : user object<br />
	for example<br />
	  {<br />
		  &nbsp;"userId": "1",<br />
		  &nbsp;"jobTitleName": "Developer",<br />
		  &nbsp;"firstName": "Romin",<br />
		  &nbsp;"lastName": "Irani",<br />
		  &nbsp;"preferredFullName": "Romin Irani",<br />
		  &nbsp;"employeeCode": "E1",<br />
		  &nbsp;"region": "CA",<br />
		  &nbsp;"phoneNumber": "408-1234567",<br />
		  &nbsp;"emailAddress": "romin@gmail.com"<br />
		}<br />

### Please set NODE_ENV for secret key<br />		
### Please go through employee.json file for sample data<br />
### Update and Delete APIs are dummy APIs<br />
