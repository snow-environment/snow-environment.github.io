import { ServiceNow } from "../lib/servicenowAsync.js";
export async function snowConnection(par, par2, par3) {
  const sn = ServiceNow;

  const sN = new sn(par, par2, par3, true);
  const auth = await sN.Authenticate();
 
  if (auth.status == 200) {
    return true;
  }
  if (auth.status !== 200) {
    return false;
  }
}
