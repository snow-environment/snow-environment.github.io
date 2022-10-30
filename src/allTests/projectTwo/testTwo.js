import { credentials } from "../../app.js";
import { ServiceNow } from "../../lib/servicenowAsync.js";

export async function twoTwo() {
    const sn = ServiceNow;
    const connector = new sn(credentials.instName, credentials.instUserName, credentials.instPassword, true);
    connector.Authenticate();
    console.log(connector);

    let isMidFound = false;
    const fieldsMidFound = [
        'name',
        'status',
        'validated',
        'user_name'
    ];
    const filtersMidFound = [
        'name=SNOW_MID',
        'status=Up',
        'validated=true',
        'user_name=snow_mid_user'
    ];
    const tableData = await connector.getTableData(fieldsMidFound, filtersMidFound, 'ecc_agent', function (res) {console.log(res)});
    if (tableData.data.result.length > 0) {
        console.log("MID Server is Found. Status is UP and the server is Validated.")
        return true;
    } else {
        return false;
    }

}