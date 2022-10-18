import { credentials } from "./app.js";
import { ServiceNow } from "./lib/servicenowAsync.js";


export async function verifyTask() {
  const sn = ServiceNow;
  const connector = new sn(credentials.instName, credentials.instUserName, credentials.instPassword, true);
  connector.Authenticate();
  console.log(connector)

  let isTableFound = false;
  let isDescriptionFound = false;
  let isShortDescriptionFound = false;
  let isAssignedToFound = false;

  // Get data from table
  console.log('----')
  const tableData = await connector.getSampleData('sys_user', (res) => {console.log(res)});
  //   //   // if (res.length > 0) {
  //   //   //   console.log(`Test One: Table "u_project_verify" found.`);
  //   //   //   isTableFound = true;
  //   //   //   for (let i = 0; i < res.length; i++) {
  //   //   //     const object = res[i];
  //   //   //     for (const key in object) {
  //   //   //       if (key == "u_description" && object[key] == "Test Task 1") {
  //   //   //         isDescriptionFound = true;
  //   //   //         console.log(`Test One: Field "${key}" found with value "${object[key]}".`);
  //   //   //       }
  //   //   //       if (key == "u_short_description" && object[key] == "Test 1") {
  //   //   //         isShortDescriptionFound = true;
  //   //   //         console.log(`Test One: Field "${key}" found with value "${object[key]}".`);
  //   //   //       }
  //   //   //       if (key == "u_assigned_to" && object[key] == "5695d69673500010c2e7660c4cf6a789"){
  //   //   //         isAssignedToFound = true;
  //   //   //         console.log(`Test One: Field "${key}" found with value "${object[key]}".`);
  //   //   //       }
  //   //   //     }
  //   //   //   }
  //   //   // }
  //   //   // if (isTableFound && isDescriptionFound && isShortDescriptionFound && isAssignedToFound){
  //   //   //   console.log("Test One Completed")
  //   //   //   return true;
  //   //   // } else {
  //   //   //   console.log("Test One Failed")
  //   //   //   return false;
  //   //   // }
  // });
  console.log(tableData);
  
  const fields = [
    'first_name',
    'last_name',
    'email',
  ];
  const filters = [
    'first_name=survey',
  ];
  const tableRecords = await connector.getTableData(fields, filters, 'sys_user', function(res){console.log(res)});
  
  console.log(tableRecords);
  let resultQuery = '';
  for (const key in tableRecords) {
    if (key == 'data'){
      console.log(tableRecords[key].result);
      resultQuery = tableRecords[key].result;
      for (let i = 0; i < resultQuery.length; i++){
        console.log(resultQuery[i]);
        for (const value in resultQuery[i]){
          if (resultQuery[i] == "user"){
          console.log(`${value} : ${resultQuery[i]}`);
          }
        }
      }
    }
  }
}

// verifyTask();
