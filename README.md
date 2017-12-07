# This is simple example for microservice with express and JWT

# Steps to install (run following commands)

1) npm install
2) export/set NODE_ENV="your secret key" (Command depends on your OS)
3) grunt (for build and quality checks)
4) npm start

# API
1) Go to your favourite rest client and use below details to Authenticate user<br />
	url : `http://<domain>:port(default is 3001 )/api/authenticate`<br />
	type : POST<br />
	payload : <br />{<br />
			&nbsp;&nbsp;nbsp;&nbsp;&nbsp;nbsp;"userid":"userId from employee.json file",<br />
			&nbsp;&nbsp;nbsp;&nbsp;&nbsp;nbsp;"email":"emailAddress from employee.json file"<br />
		}<br />
	response : auth token<br />

2) Go to your favourite rest client and use below details to get User<br />
	url : `http://<domain>:port(default is 3001 )/api/user`<br />
	method : GET<br />
	header : `Bearer <auth token from authenticate api>`<br />
	response : user object<br />
	for example<br />
	  {<br />
		  &nbsp;&nbsp;nbsp;&nbsp;&nbsp;nbsp;"userId": "1",<br />
		  &nbsp;&nbsp;nbsp;&nbsp;&nbsp;nbsp;"jobTitleName": "Developer",<br />
		  &nbsp;&nbsp;nbsp;&nbsp;&nbsp;nbsp;"firstName": "Romin",<br />
		  &nbsp;&nbsp;nbsp;&nbsp;&nbsp;nbsp;"lastName": "Irani",<br />
		  &nbsp;&nbsp;nbsp;&nbsp;&nbsp;nbsp;"preferredFullName": "Romin Irani",<br />
		  &nbsp;&nbsp;nbsp;&nbsp;&nbsp;nbsp;"employeeCode": "E1",<br />
		  &nbsp;&nbsp;nbsp;&nbsp;&nbsp;nbsp;"region": "CA",<br />
		  &nbsp;&nbsp;nbsp;&nbsp;&nbsp;nbsp;"phoneNumber": "408-1234567",<br />
		  &nbsp;&nbsp;nbsp;&nbsp;&nbsp;nbsp;"emailAddress": "romin@gmail.com"<br />
		}
<br />

3) Go to your favourite rest client and use below details to Create user<br />
	url : `http://<domain>:port(default is 3001 )/api/user`<br />
	method : POST<br />
	header : `Bearer <auth token from authenticate api>`<br />
	response : Response Text
<br />

4) Go to your favourite rest client and use below details to Update user<br />
	url : `http://<domain>:port(default is 3001 )/api/user`<br />
	method : PUT<br />
	header : `Bearer <auth token from authenticate api>`<br />
	response : Response Text
<br />

5) Go to your favourite rest client and use below details to Delete user<br />
	url : `http://<domain>:port(default is 3001 )/api/user`<br />
	method : DELETE<br />
	header : `Bearer <auth token from authenticate api>`<br />
	response : Response Text
<br />

### Please go through employee.json file for sample data<br />
### Create,Update and Delete are dummy APIs<br />
