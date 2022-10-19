import { credentials } from "../../app";
import { ServiceNow } from "../../lib/servicenowAsync";

export async function oneOne() {
  const sn = ServiceNow;
  const connector = new sn(credentials.instName, credentials.instUserName, credentials.instPassword, true);
  connector.Authenticate();
  console.log(connector)

  let isTableFound = false;
  let isFirstNameFound = false;
  let isLastNameFound = false;
  let isEmailAddressFound = false;

  // Get table 
  const tableData = await connector.getSampleData('sys_user', (res) => { console.log(res) });
  if (tableData.status == 200) {
    let resultTable = '';
    for (const key in tableData) {
      if (key == "data") {
        resultTable = tableData[key].result;
        if (resultTable.length > 0) {
          isTableFound = true;
          console.log("Test One: Table Found.")
        }
      }
    }
  }
  console.log(tableData);



  // Get data from table
  const fields = [
    'first_name',
    'last_name',
    'email',
  ];
  const filters = [
    'first_name=John',
    'last_name=Doe',
  ];
  const tableRecords = await connector.getTableData(fields, filters, 'sys_user', function (res) { console.log(res) });

  console.log(tableRecords);
  console.log(tableRecords.data.result);
  if (tableRecords.data.result.length > 0) {
    let resultQuery = '';
    for (const key in tableRecords) {
      if (key == "data") {
        let resultQuery = tableRecords[key].result[0];
        console.log(resultQuery);
        if (resultQuery["first_name"] == "John") {
          isFirstNameFound = true;
        }
        if (resultQuery["last_name"] == "Doe") {
          isLastNameFound = true;
        }
        if (resultQuery["email"] == "john.doe@example.com") {
          isEmailAddressFound = true;
        }
      }
    }
  }

  if (isTableFound && isFirstNameFound && isLastNameFound && isEmailAddressFound) {
    console.log("Test One: All Found.");
    return true;
  } else {
    console.log("Test One: Not All Found.");
    return false;
  }
}
// oneOne();
