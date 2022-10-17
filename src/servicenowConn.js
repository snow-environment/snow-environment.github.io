
import { ServiceNow } from "./lib/servicenowAsync.js";








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



}