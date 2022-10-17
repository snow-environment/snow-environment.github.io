import { ServiceNow } from "./lib/servicenowAsync.js";
export async function snowConnection(par, par2, par3) {
  let sn = ServiceNow;
  const sN = new sn(par, par2, par3, true);
  let auth = await sN.Authenticate();
  console.log('auth file', auth)
  if (auth.status == 200) {
    return true;
  }
  if (auth.status !== 200) {
    return false;
  }
}
