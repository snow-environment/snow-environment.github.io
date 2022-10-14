import { credentials } from './app.js';
import { render, html } from './lib.js'
import { snowConnection } from './servicenowConn.js';
// import {ServiceNow} from './lib/servicenow copy.js'
// import { snowConnection } from './servicenowConn.js';


const loginPageTemplate = (onSubmit) => html`

<section class="login">
    <div class="color-spliter">

    </div>
    <div class="login-wrapper">
        <div class="logo"> 
            <img src="../front-end/img/DIW-logo.png" alt="" class="diw-logo">
            <!-- <img src="./img/SN.png"  width="200px" height="200px" background="grey" padding="10px" alt="" class="diw-logo">
            <img src="./img/js.png" alt=""> -->
            <!-- <img src="./img/DIW-logo.png" alt=""> -->
        </div>
        <form @submit=${(event) => onSubmit(event)} id="login">
            
            <div class="container">
  
              
                
              <label for="instanceName">Instance Name:</label>
              <input type="text" id="instanceName" name="instanceName" class="light-me-up" placeholder="dev123456.service-now.com"/>

              <label for="instanceUserName">Instance User Name:</label>
              <input type="text" id="instanceUserName" name="instanceUserName" class="light-me-up" placeholder="admin"/>

              <label for="instance-pass">Instance Password:</label>
              <input type="password" id="instance-password" name="instance-password" class="light-me-up" placeholder="***********"/>
              <input type="submit" class="btn submit" value="Sign In" />
         
            </div>
          </form>
    </div>
</section>

`
export async function loginPage(ctx) {

  console.log('loginPage')
  ctx.render(loginPageTemplate(onSubmit));

  async function onSubmit(e) {
    e.preventDefault()
    console.log(credentials)

    console.log('click')
    let instanceName = document.querySelector('#instanceName').value.trim()
    let instanceUserName = document.querySelector('#instanceUserName').value.trim()
    let instancePassword = document.querySelector('#instance-password').value.trim()

    // Check for empty fields.
    if (instanceName.length == 0 || instanceUserName.length == 0 || instancePassword.length == 0) {
      alert('All fields are required!')
    }
    // All fields are filled up!
    else {
      credentials.instName = instanceName;
      credentials.instUserName = instanceUserName;
      credentials.instPassword = instancePassword;
      console.log(credentials)
      // await snowConnection(credentials);
      // ----- API call to SN with Credentials. Return true or false!

      // const sn = require("servicenow-rest-api");

      await snowConnection(instanceName,instanceUserName,instancePassword)

  // const serviceNow = new ServiceNow(credentials.instName, credentials.instUserName, credentials.instPassword);

      //   const ServiceNow = new sn("dev109438", "admin", "LrmsjVJB@8^3");
       
      // serviceNow.Authenticate();

      // const connection = serviceNow.Authenticate();
     

      //  IF we got True 
      // ctx.redirect("/tasks")
      // -----------------------
      //  IF we got False - > Some Error will display
    }


  }

}
// export {serviceNow}