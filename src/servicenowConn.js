//  import sn from './lib.js';
// import * as sn from './lib/servicenow.js'

import { ServiceNow } from "./lib/servicenowAsync.js";

// import { ServiceNow } from "./lib/servicenow copy.js";




// import * as api from './lib/servicenow copy.js'


export async function snowConnection(par,par2,par3) {
  let sn = ServiceNow;
  // console.log(sn)

    // const ServiceNow = new sn(credentials.instName, credentials.instUserName,credentials.instPassword);
    // const sN = new sn("dev109438", "admin", "LrmsjVJB@8^3");
    const sN = new sn(par, par2, par3,true);
    // module.exports = { ServiceNow };
    sN.Authenticate();
    // const connection = ServiceNow.Authenticate();
    // console.log(sn)
  }
// snowConnection();

// const sn = require("servicenow-rest-api"); // Call the API
// // const ServiceNow = new sn(); // Create SN client with credentials
// const ServiceNow = new sn("dev109438", "admin", "LrmsjVJB@8^3"); // Create SN client with credentials
// module.exports = { ServiceNow }; // Exports the "ServiceNow" variable for later use 
// ServiceNow.Authenticate(); // Authenticate with SNOW instance


