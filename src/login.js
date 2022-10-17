import { credentials } from './app.js';
import { render, html, page } from './lib.js'
import { snowConnection } from './servicenowConn.js';
// import {ServiceNow} from './lib/servicenow copy.js'
// import { snowConnection } from './servicenowConn.js';


const loginPageTemplate = (onSubmit) => html`

<section class="login">
    <div class="color-spliter">

    </div>
    <div class="login-wrapper">
        <div class="logo"> 
        <img src="./img/DIW-logo.png" alt="" class="diw-logo">
            <!-- <img src="./img/SN.png"  width="200px" height="200px" background="grey" padding="10px" alt="" class="diw-logo">
            <img src="./img/js.png" alt=""> -->
            <!-- <img src="./img/DIW-logo.png" alt=""> -->
        </div>
        <form @submit=${(event) => onSubmit(event)} id="login">
            
            <div class="container">
            <p class="error-msg">Please provide working instance and correct credentials!</p>

                
              <label for="instanceName">Instance Name:</label>
              <input type="text" id="instanceName" name="instanceName" class="light-me-up" value="dev104479" placeholder="dev123456.service-now.com"/>

              <label for="instanceUserName">Instance User Name:</label>
              <input type="text" id="instanceUserName" name="instanceUserName" class="light-me-up" value="admin" placeholder="admin"/>

              <label for="instance-pass">Instance Password:</label>
              <input type="password" id="instance-password" name="instance-password" class="light-me-up" value="!GZGymlrL*09" placeholder="***********"/>
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
      let btnSubmit = document.querySelector('.submit')
      console.log(btnSubmit)
    btnSubmit.disabled = true;
btnSubmit.classList.add('no-hover')

      // await snowConnection(credentials);
      // ----- API call to SN with Credentials. Return true or false!
// let xhrCode = false;
//       // const sn = require("servicenow-rest-api");
// const alerta = ()=> alert('error')
//       // const request = new XMLHttpRequest();
//       const xhr = new XMLHttpRequest();
// xhr.open('GET', `https://${credentials.instName}.service-now.com/api/now/v2/table/sys_user?user_name=${credentials.instUserName}`, true);
// xhr.onload = () => {
//   console.log(xhr.responseURL); // http://example.com/test
//   console.log(xhr); // http://example.com/test
//   console.log(xhr.status); // http://example.com/test
// };
const myTimeout = setTimeout(warning, 3500);

function warning() {

document.querySelector(".error-msg").style.opacity = 1;
let wrapper = document.querySelector('.login').classList.add('error-box')
let btnSubmit = document.querySelector('.submit')
btnSubmit.classList.remove('no-hover')

btnSubmit.disabled = false;
document.querySelector('#instanceUserName').value = ''
document.querySelector('#instance-password').value = ''

}



       let login = await snowConnection(instanceName,instanceUserName,instancePassword);
       


       console.log(login)
if(login){
  ctx.page.redirect('/tasks')
}
else{
  warning();
}
// if(!login && xhr.status!==200){
//   alert("Please make sure you got correct credentials")
// }
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




// xhr.send(null);
// // --------------------
//       try {
//         // request.open('GET', `https://${credentials.instName}.service-now.com/api/now/v2/table/sys_user?user_name=${credentials.instUserName}`, true);
      
//         request.responseType = 'json';
      
//         request.addEventListener('load', () => {
//           alerta()
//         });
//         // request.addEventListener('error', () => console.error('XHR error'));
      
//         request.send();
//         console.log(request)
      
//       } catch (error) {
        
//         // console.error(`XHR error ${request.status}`);
//       }
//       console.log(request.status)
// // --------------------

  //     const xhr = new XMLHttpRequest();

  // xhr.open('GET', `https://${credentials.instName}.service-now.com/api/now/v2/table/sys_user?user_name=${credentials.instUserName}`, true);

  //     xhr.onreadystatechange= function() {

  // //       if (this.readyState!==4) return; // not ready yet
  // //       if (this.status===200) { // HTTP 200 OK
  // //           alert(this.responseText);
  // //       } else {
  // // alert("Please make sure you got correct credentials")

  // //           // server returned an error. Do something with it or ignore it
  // //       }
  // console.log(" v XHR >",xhr)
  // if(xhr.status ==0){
  //   alert("Please make sure you got correct credentials")
  // }
  //   };



    // xhr.send(null);
      // xhr.open('GET', `https://${credentials.instName}.service-now.com/api/now/v2/table/sys_user?user_name=${credentials.instUserName}`, true);
      // xhr.onload = () => {
      //   console.log(xhr.responseURL); // http://example.com/test
      //   console.log(xhr.status); // http://example.com/test
      //   if(xhr.status == 200){
      //     xhrCode =true;
          
      // console.log(request.status)

    // console.log(asd)

      //   }
       
      // };
      // xhr.send(null);