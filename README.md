# This is simple example for microservice with express and JWT

# Steps to install (run following commands)

1) npm install
2) export/set NODE_ENV="your secret key" (Command depends on your OS)
3) grunt (for build and quality checks)
4) npm start

# API
1) Open your favourite rest client and use below details to Authenticate user<br />
	<ul>
		<li>URL : `http://<domain>:port(default is 3001 )/api/authenticate`</li>
		<li>Method : POST</li>
		<li>Payload : <br />{<br />
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"userid":"userId from employee.json file",<br />
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"email":"emailAddress from employee.json file"<br />
			}
		</li>
		<li>Response : Auth token</li>
	</ul>

2) Open your favourite rest client and use below details to get User<br />
	&nbsp;&nbsp;URL : `http://<domain>:port(default is 3001 )/api/user`<br />
	&nbsp;&nbsp;Method : GET<br />
	&nbsp;&nbsp;Header : `Bearer <auth token from authenticate api>`<br />
	&nbsp;&nbsp;Response : User object<br />
	&nbsp;&nbsp;for example<br />
	  &nbsp;&nbsp;{<br />
		  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"userId": "1",<br />
		  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"jobTitleName": "Developer",<br />
		  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"firstName": "Romin",<br />
		  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lastName": "Irani",<br />
		  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"preferredFullName": "Romin Irani",<br />
		  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"employeeCode": "E1",<br />
		  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"region": "CA",<br />
		  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"phoneNumber": "408-1234567",<br />
		  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"emailAddress": "romin@gmail.com"<br />
		&nbsp;&nbsp;}
<br />

3) Open your favourite rest client and use below details to Create user<br />
	&nbsp;&nbsp;URL : `http://<domain>:port(default is 3001 )/api/user`<br />
	&nbsp;&nbsp;Method : POST<br />
	&nbsp;&nbsp;Header : `Bearer <auth token from authenticate api>`<br />
	&nbsp;&nbsp;Response : Response Text
<br />

4) Open your favourite rest client and use below details to Update user<br />
	&nbsp;&nbsp;URL : `http://<domain>:port(default is 3001 )/api/user`<br />
	&nbsp;&nbsp;Method : PUT<br />
	&nbsp;&nbsp;Header : `Bearer <auth token from authenticate api>`<br />
	&nbsp;&nbsp;Response : Response Text
<br />

5) Open your favourite rest client and use below details to Delete user<br />
	&nbsp;&nbsp;URL : `http://<domain>:port(default is 3001 )/api/user`<br />
	&nbsp;&nbsp;Method : DELETE<br />
	&nbsp;&nbsp;Header : `Bearer <auth token from authenticate api>`<br />
	&nbsp;&nbsp;Response : Response Text
<br />

### Please go through employee.json file for sample data<br />
### Create,Update and Delete are dummy APIs<br />
