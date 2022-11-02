import { credentials } from "../../app.js";
import { ServiceNow } from "../../lib/servicenowAsync.js";

export async function oneTwo() {
    const sn = ServiceNow;
    const connector = new sn(credentials.instName, credentials.instUserName, credentials.instPassword, true);
    connector.Authenticate();



    // Get data/specific record ServiceNow MiniProject One group from table
    let isGroupFound = false;
    const fieldsFindGroup = [
        'name',
        'email',
        'description',
        'manager.name',
    ];
    const filtersFindGroup = [,
        'name=ServiceNow MiniProject One',
        'email=snow.web.app@example.com',
        'description=This is a test group for ServiceNow Task Verifier Web Application.',
        'manager.name=Abel Tuter'
    ];
    const findGroup = await connector.getTableData(fieldsFindGroup, filtersFindGroup, 'sys_user_group', function (res) {console.log(res)});
    if (findGroup.data.result.length > 0) {
        isGroupFound = true;
    }


    // Check if User is Assigned to the Group Service Desk (sys_user_grmember table)
    let isGroupOneAssigned = false;
    const fieldsGroupAssignedOne= [
        "group.name",
        "user.name",
    ];
    const filtersGroupAssignedOne = [
        'user.name=John Doe',
        'group.name=Service Desk',
    ];
    const findGroupAssignedOne = await connector.getTableData(fieldsGroupAssignedOne, filtersGroupAssignedOne, 'sys_user_grmember', function (res) {console.log(res)});
    if (findGroupAssignedOne.data.result.length > 0) {
        isGroupOneAssigned = true;
    }
   
    // Check if User is Assigned to the Group ServiceNow MiniProject One (sys_user_grmember table)
    let isGroupTwoAssigned = false;
    const fieldsGroupAssignedTwo = [
        "group.name",
        "user.name",
    ];
    const filtersGroupAssignedTwo = [
        'user.name=John Doe',
        'group.name=ServiceNow MiniProject One'
    ];
    const findGroupAssignedTwo = await connector.getTableData(fieldsGroupAssignedTwo, filtersGroupAssignedTwo, 'sys_user_grmember', function (res) {console.log(res)});
    if (findGroupAssignedTwo.data.result.length > 0) {
        isGroupTwoAssigned = true;
    }


    // Check if ITIL Role is Assigned to the User
    let isRoleAssigned = false;
    const fieldsFindRoleAssigned = [
        "user.name",
        "role.name"
    ];
    const filtersFindRoleAssigned = [
        'user.name=John Doe',
        'role.name=itil'

    ];
    const findRoleAssigned = await connector.getTableData(fieldsFindRoleAssigned, filtersFindRoleAssigned, 'sys_user_has_role', function (res) {console.log(res)});
    if (findRoleAssigned.data.result.length > 0) {
        isRoleAssigned = true;
    }

    if (isGroupFound && isGroupOneAssigned && isGroupTwoAssigned && isRoleAssigned) {
        return true;
    } else {
        return false;
    }
}
// oneTwo();
