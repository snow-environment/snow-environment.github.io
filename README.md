
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
Follow these steps to fullfill and verify the given tasks:
* Login to the Application with your Instance credentials
* First check the assignement for every task you will find in the application.
* Go back in your Developer Instance and perform the tasks. 


### Contributing :computer:

 * If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with tags "BUG" for fixing a issue or "REQ" for improving the code. Don't forget to give the project a star! Thanks again!

 :warning: To install the ServiceNow API
```
npm install servicenow-rest-api
``` 
 * * [PySNC](https://github.com/ServiceNow/PySNC)

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
 

 ### License :scroll:
  * Distributed under the GPL-3.0 license. See `LICENSE` for more information.
  
 ### Contact :mailbox:
  * Aleksandar Karastoyanov - [LinkedIn](https://www.linkedin.com/in/aleksandar-karastoyanov/) - karastoqnov.alexandar@gmail.com