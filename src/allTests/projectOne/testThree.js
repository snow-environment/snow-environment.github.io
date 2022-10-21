import { credentials } from "../../app.js";
import { ServiceNow } from "../../lib/servicenowAsync.js";


export async function oneThree() {
    const sn = ServiceNow;
    const connector = new sn(credentials.instName, credentials.instUserName, credentials.instPassword);
    connector.Authenticate();
    console.log(connector);

    // Check if Incident was created
    let incidentisFound = false;
    const fieldsOpenIncident = [
        "callerid display_value",
        "category",
        "subcategory",
        "cmdb_ci display_value",
        "short_description",
        "description",
        "contact_type", // Equal to Channel in the Incident table
        "state", // XML returns integers instead of strings
        "impact", // XML returns strings instead of strings
        "urgency", // XML returns strings instead of strings
        "priority", // XML returns strings instead of strings
        "assignment_group display_value", 
        "assigned_to display_value",
    ];
    const filtersOpenIncident = [
        "short_description=Network Connectivity Problem"
    ];
    const findOpenIncident = await connector.getTableData(fieldsOpenIncident, filtersOpenIncident, 'incident', function (res) {console.log(res)});
    console.log(findOpenIncident);
}

// oneThree();