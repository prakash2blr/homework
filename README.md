# This is simple example for microservice with express and JWT

#Steps to install (run following commands)

1) npm install
2) grunt (for build and quality checks)
3) npm start

#API
1) go to your favourite rest client and use below url to authenticate user
	url : `host/api/authenticate`
	payload : {
			"userid":"1",
			"email":"romin.k.irani@gmail.com"
		}
	response : auth token

2) go to your favourite rest client and use below url to get details of user
	url : `host/api/getuser`
	header : `Bearer <auth token from authenticate api>`
	response : user object
	for example
	  {
		  "userId": "1",
		  "jobTitleName": "Developer",
		  "firstName": "Romin",
		  "lastName": "Irani",
		  "preferredFullName": "Romin Irani",
		  "employeeCode": "E1",
		  "region": "CA",
		  "phoneNumber": "408-1234567",
		  "emailAddress": "romin.k.irani@gmail.com"
		}

#user employee.json file for sample data