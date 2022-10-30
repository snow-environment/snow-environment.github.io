import { credentials } from "../../app.js";
import { ServiceNow } from "../../lib/servicenowAsync.js";

export async function twoThree() {
    const sn = ServiceNow;
    const connector = new sn(credentials.instName, credentials.instUserName, credentials.instPassword, true);
    connector.Authenticate();
    console.log(connector);

    // Get credentials
    let isCredentialsFound = false;
    const fieldsCredsFound= [
        'name',
        'classification',
        'user_name'
    ];
    const filtersCredsFound= [
        'name=SNOW_Linux_Credentials',
        'user_name=vagrant',
        'classification=ssh'
    ];
    const tableDataCredentialsFound = await connector.getTableData(fieldsCredsFound, filtersCredsFound, 'discovery_credentials', function (res) {console.log(res)});
    if (tableDataCredentialsFound.data.result.length > 0) {
        isCredentialsFound = true;
    }

    // Check for Linux Serve CI
    let isLinuxVMFound = false;
   
}