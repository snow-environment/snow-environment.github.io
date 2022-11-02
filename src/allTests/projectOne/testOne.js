import { credentials } from "../../app.js";
import { ServiceNow } from "../../lib/servicenowAsync.js";

export async function oneOne() {
  const sn = ServiceNow;
  const connector = new sn(credentials.instName, credentials.instUserName, credentials.instPassword, true);
  connector.Authenticate();


  // Get table 'sys_user'
  let isTableFound = false;
  const tableData = await connector.getSampleData('sys_user', (res) => { console.log(res) });
  if (tableData.data.result.length > 0) {
    isTableFound = true;
  }


  // Get data/specific record John Doe from table
  let isUserFound = false;
  const fields = [
    'first_name',
    'last_name',
    'email',
  ];
  const filters = [
    'first_name=John',
    'last_name=Doe',
    'email=john.doe@example.com'
  ];
  const tableRecords = await connector.getTableData(fields, filters, 'sys_user', function (res) { console.log(res) });
  if (tableRecords.data.result.length > 0) {
    isUserFound = true;
  }



  if (isTableFound && isUserFound) {
    return true;
  } else {
    return false;
  }
}
// oneOne();

