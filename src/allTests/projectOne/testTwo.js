import { credentials } from "../../app.js";
import { ServiceNow } from "../../lib/servicenowAsync.js";

export async function oneTwo() {
    const sn = ServiceNow;
    const connector = new sn(credentials.instName, credentials.instName, credentials.instPassword);
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
    ]

    const findGroup = await connector.getTableData(fieldsFindGroup, filtersFindGroup, 'sys_user_group', function (res) { console.log(res) });
    console.log(findGroup);
    console.log(findGroup.data.result);
    if (findGroup.data.result.length > 0) {
        for (const key in findGroup) {
            if (key == "data") {
                let resultQuery = findGroup[key].result[0];
                if (resultQuery["name"] == "ServiceNow MiniProject One") {
                    if (resultQuery["email"] == "snow.web.app@example.com") {
                        if (resultQuery["description"] == "This is a test group for ServiceNow Task Verifier Web Application.") {
                            if (resultQuery["mananger"] == "Abel Tuter") {
                                isTableFound = true;
                            }
                        }
                    }
                }
            }
        }
    }

    // Check if User is Assigned to the Group
    let isGroupAssigned = false;


    // Check if Roles are Assigned to the User
    let isRoleAssigned = false;
}
// oneTwo();