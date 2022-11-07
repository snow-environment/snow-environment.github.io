import { credentials } from "../../app.js";
import { ServiceNow } from "../../lib/servicenowAsync.js";

export async function twoOne() {
    const sn = ServiceNow;
    const connector = new sn(credentials.instName, credentials.instUserName, credentials.instPassword, true);
    connector.Authenticate();


    // Check if user snow_mid_user exists
    let isUserFound = false; 
    const fieldsUserFound =[
        "user_name"
    ];

    const filtersUserFound = [
        "user_name=snow_mid_user"
    ];
    const tableData = await connector.getTableData(fieldsUserFound, filtersUserFound, 'sys_user', function (res) { console.log(res) });
    if (tableData.data.result.length > 0) {
        isUserFound = true;
    }


    // Check if user has the role mid_server
    let isRoleAssigned = false;
    const fieldsRoleAssigned = [
        'user',
        'role'
    ];
    const filtersRoleAssigned = [
        'user.first_name=Raymond',
        'user.last_name=Denton',
        'role.name=mid_server',

    ];
    const roleAssigned = await connector.getTableData(fieldsRoleAssigned, filtersRoleAssigned, 'sys_user_has_role', function (res) {console.log(res)}); 
    if (roleAssigned.data.result.length > 0) {
        isRoleAssigned = true;
    }

    if (isUserFound && isRoleAssigned) {
        return true;
    } else {
        return false;
    }
}


// twoOne() 