# This is simple example for microservice with express and JWT

# Steps to install (run following commands)

1) npm install
2) grunt (for build and quality checks)
3) npm start

# API
1) go to your favourite rest client and use below url to authenticate user<br />
	url : `host/api/authenticate`<br />
	payload : {<br />
			"userid":"1",<br />
			"email":"romin.k.irani@gmail.com"<br />
		}<br />
	response : auth token<br />

2) go to your favourite rest client and use below url to get details of user<br />
	url : `host/api/getuser`<br />
	header : `Bearer <auth token from authenticate api>`<br />
	response : user object<br />
	for example<br />
	  {<br />
		  "userId": "1",<br />
		  "jobTitleName": "Developer",<br />
		  "firstName": "Romin",<br />
		  "lastName": "Irani",<br />
		  "preferredFullName": "Romin Irani",<br />
		  "employeeCode": "E1",<br />
		  "region": "CA",<br />
		  "phoneNumber": "408-1234567",<br />
		  "emailAddress": "romin.k.irani@gmail.com"<br />
		}<br />
# user employee.json file for sample data<br />