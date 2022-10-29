import { credentials } from "../../app.js";
import { ServiceNow } from "../../lib/servicenowAsync.js";

export async function twoOne() {
    const sn = ServiceNow;
    const connector = new sn(credentials.instName, credentials.instUserName, credentials.instPassword, true);
    connector.Authenticate();
    console.log(connector);

    // Check if user exists
    let isUserFound = false; 
    const fields =[
        "user_name"
    ];

    const filters = [
        "user_name=snow_mid_user"
    ];
    const tableData = await connector.getTableData(fields, filters, 'sys_user', function (res) { console.log(res) });
    if (tableData.data.result.length > 0) {
        console.log("Mid user found.")
        return true;
    }


    // Check if user has the role
    let isRoleAssigned = false;

}


// twoOne() 