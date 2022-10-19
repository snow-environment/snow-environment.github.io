
## ServiceNow Task Verifier Web Application

<details>
  <summary>Table of Contents</summary>
  <ol>
	<li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>


### About The Project :information_source:
ServiceNow Task Verifier is a web application giving the possibility to exercise and train with pre-made assignements on a ServiceNow Developer Instance and check the tasks. Every user can login with it's ServiceNow Instance credentials and verify the tasks in the application. Every tasks consists a JS script which verifies the CMDB and checks if specific tables, fields or records are existing. 

In addition to the Web Application you can download and use the [Desktop App](https://github.com/karastoyanov/servicenow-devinstance-project) as well. Simply download the last realease and follow the instructions in the README.md file.

The Web Application is running JS scripts to check for the specific tables or records that you have create on your Developer Instance, following the assegnements. The scripts connects to your instance using a API and pre-made queries to the CMDB are used to extract the values from the tables/records.


### Usage :question:
:warning: Before logging in the platform you should create a CORS rule in your ServiceNow Instance. Navigate to `Applications --> System Web Services --> REST --> CORS Rules`. Create a new rule with the following data:
* `Name` --> Give it a name by your choose.
* `REST API` --> Choose `Table API[now/table]` from the dropdown menu.
* `Domain` --> Insert the domain of the Web App https://snow-environment.github.io.
* `Max age` --> Leave as 0.
* `Application` --> Global, by default.
* `HTTP Methods` --> Leave `GET` and `POST` as set by default.

:warning: To be able to log in, your ServiceNow instance should be in `Online` status. 

:unlock: Getting your instance credentials:
* Navigate to the [Developer Portal]([ServiceNow Developers](https://developer.servicenow.com/dev.do#!/)) and sign in with your account.
* On the top-right corner open your profile and choose `Manage instance password`
* In the newly opened window you can check your credentials. To login in ServiceNow Task Verifier Web Application you will need `Instance name` in format `devXXXXXX`, `Username` and `Password`.

:arrow_right: Follow these steps to fullfill and verify the given tasks:
* After succsesful login you will be able to review the pre-made tasks.
* Check the assignements for every task you will find in the application.
* Go back in your Developer Instance and perform the tasks. 
* After finishing the tasks in your Developer Instance go back in the Web Application and press `Validate` button for the respective task. You should receive a feedback IF or IF NOT the assignement was done properly. 


### Contributing :computer:
 You are more than welocme to participate in further developing and maintenance of this project. You can fork the project, commit your changes and open a pull request. The project is using `servicenow-rest-api` library for javascript to write simple scripts establishing connection to the ServiceNow Instance and verifying the pre-made tasks. 
 
 :warning: To install the ServiceNow API
```
npm install servicenow-rest-api
``` 

 Check the API Documentaion and GitHub Repo:
 *  [ServiceNow REST API Documentation](https://www.npmjs.com/package/servicenow-rest-api-with-promise)
 *  [GitHub Repo](https://github.com/SahilRS200/servicenow-rest-api)

 :one:. Fork the Project </br>
 :two:. Create your Feature Branch (`git checkout -b feature/AmazingFeature`) </br>
 :three:. Commit your Changes (`git commit -m 'Add some AmazingFeature'`) </br>
 :four:. Push to the Branch (`git push origin feature/AmazingFeature`) </br>
 :five:. Open a Pull Request </br>

 Also, if you have a suggestion or if you have found a bug, you can fork the repository and create a pull request. You can also simply open an issue with tags `BUG` for fixing a issue or `FEATURE` in case you have an idea for improving or adding some new features. You can aslo participate in improving the documentation opening a issue with tag `DOC`. </br>
 We highly appreciate giving the project a :star:!


### Licence :scroll:
* Distributed under the GPL-3.0 license. See [LICENSE](https://github.com/snow-environment/snow-environment.github.io/blob/main/LICENSE.md) for more information.



### Contact :mailbox: 
 * Aleksandar Karastoyanov - [LinkedIn](https://www.linkedin.com/in/aleksandar-karastoyanov/) - karastoqnov.alexandar@gmail.com
 * Georgi Balabanov - [LinkedIn](https://www.linkedin.com/in/georgi-balabanov-366501210/) - 
