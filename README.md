# This is simple example for microservice with express and JWT

# Steps to install (run following commands)

1) npm install
2) grunt (for build and quality checks)
3) npm start

# API
1) go to your favourite rest client and use below url to authenticate user<br />
	url : `host/api/authenticate`<br />
	payload : <br />{<br />
			&nbsp;"userid":"1",<br />
			&nbsp;"email":"romin.k.irani@gmail.com"<br />
		}<br />
	response : auth token<br />

2) go to your favourite rest client and use below url to get details of user<br />
	url : `host/api/getuser`<br />
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
### user employee.json file for sample data<br />