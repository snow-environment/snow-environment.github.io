//  import sn from './lib.js';
// import * as sn from './lib/servicenow.js'

// import { ServiceNow } from "./lib/servicenowAsync.js";

// import { ServiceNow } from "./lib/servicenow copy.js";
import { ServiceNow } from "./lib/servicenowAsync.js";

// -----------------------



// -----------------------




// import * as api from './lib/servicenow copy.js'


export async function snowConnection(par,par2,par3) {
  let sn = ServiceNow;
  // console.log(sn)

    // const ServiceNow = new sn(credentials.instName, credentials.instUserName,credentials.instPassword);
    // const sN = new sn("dev109438", "admin", "LrmsjVJB@8^3");
    const sN = new sn(par, par2, par3,true);
    // module.exports = { ServiceNow };
    // sN.Authenticate();
    
    let auth = await sN.Authenticate();
console.log('auth file',auth)
if(auth.status == 200){
  return true;
}
if(auth.status !== 200){
  return false;
}

    // let auth =sN.Authenticate();
    // let response = await auth.response.json()
    // console.log('------------->',auth)
    // const connection = ServiceNow.Authenticate();
    // console.log(sn)
  }
// snowConnection();

// const sn = require("servicenow-rest-api"); // Call the API
// // const ServiceNow = new sn(); // Create SN client with credentials
// const ServiceNow = new sn("dev109438", "admin", "LrmsjVJB@8^3"); // Create SN client with credentials
// module.exports = { ServiceNow }; // Exports the "ServiceNow" variable for later use 
// ServiceNow.Authenticate(); // Authenticate with SNOW instance


// import { ServiceNow } from "./lib/servicenowAsync.js";



// export async function snowConnection(par, par2, par3) {

//   let sn = ServiceNow;

//   // const sN = new sn("dev109438", "admin", "LrmsjVJB@8^3");

//   const connector = new sn(par, par2, par3, true);

//   connector.getSampleData("sys_user", (res) => {

//     console.log(res)

//     if (res.length > 0) {

//       let auth = connector.Authenticate();

//       console.log(auth.status)

//       console.log("Connected");

//       return true;

//     } else {

//       console.log("Failed to connect");

//       return false;

//     }

//   });

  // let auth = await sN.Authenticate();

  // console.log('auth file', auth)

  // if (auth.status == 200) {

  //   return true;

  // }

  // if (auth.status !== 200) {

  //   return false;

  // }

// }