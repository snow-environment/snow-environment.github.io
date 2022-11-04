import { credentials } from "../../app.js";
import { ServiceNow } from "../../lib/servicenowAsync.js";


export async function oneThree() {
    const sn = ServiceNow;
    const connector = new sn(credentials.instName, credentials.instUserName, credentials.instPassword, true);
    connector.Authenticate();


    // Check if Incident was created
    let isIncidentFound = false;
    const fieldsOpenIncident = [
        'caller_id',
        'category',
        'subcategory',
        'cmdb_ci',
        'short_description',
        'description',
        'contact_type', // Equal to Channel in the Incident table
        'state', 
        'impact', 
        'urgency', 
        'priority', 
        'assignment_group',
        'assigned_to',
    ];
    const filtersOpenIncident = [
        'caller_id.first_name=ITIL',
        'caller_id.last_name=User',
        'category=Software',
        'subcategory=os',
        'cmdb_ci.name=container-storage-setup',
        'short_description=Network Connectivity Problem',
        'description=Check Network Adapter Config Settings. Network is down since last update.',
        'contact_type=Email',
        'state=2',
        'impact=1',
        'urgency=1',
        'priority=1',
        'assignment_group.name=ServiceNow MiniProject One',
        'assigned_to.first_name=John',
        'assigned_to.last_name=Doe'
    ];
    const findOpenIncident = await connector.getTableData(fieldsOpenIncident, filtersOpenIncident, 'incident', function (res) {console.log(res)});
    if (findOpenIncident.data.result.length > 0) {
        isIncidentFound = true;
    }

    if (isIncidentFound) {
        return true;
    } else {
        return false;
    }
}

// oneThree();