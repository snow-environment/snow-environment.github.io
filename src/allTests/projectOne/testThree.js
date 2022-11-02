import { credentials } from "../../app.js";
import { ServiceNow } from "../../lib/servicenowAsync.js";


export async function oneThree() {
    const sn = ServiceNow;
    const connector = new sn(credentials.instName, credentials.instUserName, credentials.instPassword, true);
    connector.Authenticate();


    // Check if Incident was created
    let isIncidentFound = false;
    const fieldsOpenIncident = [
        "caller_id",
        "category",
        "subcategory",
        "cmdb_ci",
        "short_description",
        "description",
        "contact_type", // Equal to Channel in the Incident table
        "state", // XML returns integers instead of strings
        "impact", // XML returns strings instead of strings
        "urgency", // XML returns strings instead of strings
        "priority", // XML returns strings instead of strings
        "assignment_group",
        "assigned_to",
    ];
    const filtersOpenIncident = [
        "short_description=Network Connectivity Problem"
    ];
    const findOpenIncident = await connector.getTableData(fieldsOpenIncident, filtersOpenIncident, 'incident', function (res) {console.log(res)});
    for (let i = 0; i < findOpenIncident.data.result.length; i++) { // Bloddy hell that if statement / Any way to optimize?
        if (findOpenIncident.data.result[i]["caller_id"]["display_value"] == "ITIL User") {
            if (findOpenIncident.data.result[i]["category"] == "Software") {
                if (findOpenIncident.data.result[i]["subcategory"] == "Operating System") {
                    if (findOpenIncident.data.result[i]["cmdb_ci"]["display_value"] == "container-storage-setup") {
                        if (findOpenIncident.data.result[i]["short_description"] == "Network Connectivity Problem") {
                            if (findOpenIncident.data.result[i]["description"] == "Check Network Adapter Config Settings. Network is down since last update.") {
                                if (findOpenIncident.data.result[i]["contact_type"] == "Email") {
                                    if (findOpenIncident.data.result[i]["state"] == "In Progress") { // Open State
                                        if (findOpenIncident.data.result[i]["impact"] == "1 - High") { // Impact High
                                            if (findOpenIncident.data.result[i]["urgency"] == "1 - High") { // Urgency High
                                                if (findOpenIncident.data.result[i]["priority"] == "1 - Critical") { // Priority Critical
                                                    if (findOpenIncident.data.result[i]["assignment_group"]["display_value"] == "ServiceNow MiniProject One") {
                                                        if (findOpenIncident.data.result[i]["assigned_to"]["display_value"] == "John Doe") {
                                                            isIncidentFound = true;
                                                            console.log("Test Three: Incident found.");
                                                            return true;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return false;
}

// oneThree();