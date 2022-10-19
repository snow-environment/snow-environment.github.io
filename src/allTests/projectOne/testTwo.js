import { credentials } from "../../app";
import { ServiceNow } from "../../lib/servicenowAsync";

export async function oneTwo() {
    const sn = ServiceNow;
    const connector = new sn(credentials.instName, credentials.instName, credentials.instPassword);
    connector.Authenticate();
    console.log(connector);
}

// oneTwo();