import { credentials } from "../../app.js";
import { ServiceNow } from "../../lib/servicenowAsync.js";

export async function twoOne() {
    const sn = ServiceNow;
    const connector = new sn(credentials.instName, credentials.instUserName, credentials.instPassword, true);
    connector.Authenticate();


    // Check if user exists
    let isUserFound = false; 
    const fieldsUserFound =[
        "user_name"
    ];

    const filtersUserFound = [
        "user_name=snow_mid_user"
    ];
    const tableData = await connector.getTableData(fieldsUserFound, filtersUserFound, 'sys_user', function (res) { console.log(res) });
    if (tableData.data.result.length > 0) {
        console.log("Mid user found.")
        isUserFound = true;
    }


    // Check if user has the role
    let isRoleAssigned = false;
    const fieldsRoleAssigned = [
        'user',
        'role',
    ];
    const filtersRoleAssigned = [
        // Leave empty, XML file for the table sys_user_has_role in ServiceNow returns only SysIDs and not the values of the records

    ];
    const roleAssigned = await connector.getTableData(fieldsRoleAssigned, filtersRoleAssigned, 'sys_user_has_role', function (res) {console.log(res)}); 
    for (let i = 0; i < roleAssigned.data.result.length; i++) {
        let currentUser = roleAssigned.data.result[i]['user']['display_value'];
        let currentRole = roleAssigned.data.result[i]['role']['display_value'];
        if (currentRole == "mid_server" && currentUser == "Raymond Denton") {
            isRoleAssigned = true;
            break;
        }
    }


    if (isUserFound && isRoleAssigned) {
        return true;
    } else {
        return false;
    }
}


// twoOne() 