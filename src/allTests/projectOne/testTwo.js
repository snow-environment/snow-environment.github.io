import { credentials } from "../../app.js";
import { ServiceNow } from "../../lib/servicenowAsync.js";

export async function oneTwo() {
    const sn = ServiceNow;
    const connector = new sn(credentials.instName, credentials.instUserName, credentials.instPassword, true);
    connector.Authenticate();
    console.log(connector);


    // Check if the Group is Created
    let isGroupFound = false;
    const fieldsFindGroup = [
        'name',
        'email',
        'description',
        'manager',

    ];
    const filtersFindGroup = [
        'name=ServiceNow MiniProject One'
    ];

    const findGroup = await connector.getTableData(fieldsFindGroup, filtersFindGroup, 'sys_user_group', function (res) { console.log(res) });
    if (findGroup.data.result.length > 0) {
        for (const key in findGroup) {
            if (key == "data") {
                let resultQuery = findGroup[key].result[0];
                if (resultQuery["name"] == "ServiceNow MiniProject One") {
                    if (resultQuery["email"] == "snow.web.app@example.com") {
                        if (resultQuery["description"] == "This is a test group for ServiceNow Task Verifier Web Application.") {
                            let managerName = resultQuery["manager"];
                            for (const k in managerName) {
                                if (managerName["display_value"] == "Abel Tuter") {
                                    isGroupFound = true;
                                    console.log("Group ServiceNow MiniProject One is found.")
                                }
                            }
                        }
                    }
                }
            }
        }
    }



    // Check if User is Assigned to the Group sys_user.sys_user_grmember.user_list
    let isGroupAssigned = false;
    const fieldsFindGroupAssigned = [
        "group",
        "user",
    ];
    const filtersFindGroupAssigned = [
        // Leave empty
    ];
    const findGroupAssigned = await connector.getTableData(fieldsFindGroupAssigned, filtersFindGroupAssigned, 'sys_user_grmember', function (res) { console.log(res) });
    // console.log(findGroupAssigned.data.result);
    let firstGroupFound = false;
    let secondGroupFound = false;
    for (let i = 0; i < findGroupAssigned.data.result.length; i++) {
        let currentUser = findGroupAssigned.data.result[i]['user']['display_value'];
        let currentGroup = findGroupAssigned.data.result[i]['group']['display_value'];
        if (currentUser == "John Doe" && currentGroup == "Service Desk") {
            firstGroupFound = true;
        }
        if (currentUser == "John Doe" && currentGroup == "ServiceNow MiniProject One") {
            secondGroupFound = true;
        }
        if (firstGroupFound == true && secondGroupFound == true) {
            isGroupAssigned = true;
            console.log("User John Doe is in Service Desk and Service Now MiniProject One.")
            break;
        }
    }




    // Check if Roles are Assigned to the User
    let isRoleAssigned = false;
}
// oneTwo();