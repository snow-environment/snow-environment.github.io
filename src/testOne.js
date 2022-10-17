import { credentials } from "./app.js";
import { ServiceNow } from "./lib/servicenowAsync.js";


export async function verifyTask() {

  let sn = ServiceNow;



  const sN = new sn(credentials.instName, credentials.instUserName, credentials.instPassword, true);
  sN.Authenticate();
  console.log(sN)

  let isTableFound = false;
  let isDescriptionFound = false;
  let isShortDescriptionFound = false;
  let isAssignedToFound = false;

  // Get data from table
  console.log('----')
  sN.getSampleData('sys_user',(res)=>{
   for (let index = 0; index < res.length; index++) {
     console.log(res[index])
    
   }

    console.log('bachka')
    // if (res.length > 0) {
    //   console.log(`Test One: Table "u_project_verify" found.`);
    //   isTableFound = true;
    //   for (let i = 0; i < res.length; i++) {
    //     const object = res[i];
    //     for (const key in object) {
    //       if (key == "u_description" && object[key] == "Test Task 1") {
    //         isDescriptionFound = true;
    //         console.log(`Test One: Field "${key}" found with value "${object[key]}".`);
    //       }
    //       if (key == "u_short_description" && object[key] == "Test 1") {
    //         isShortDescriptionFound = true;
    //         console.log(`Test One: Field "${key}" found with value "${object[key]}".`);
    //       }
    //       if (key == "u_assigned_to" && object[key] == "5695d69673500010c2e7660c4cf6a789"){
    //         isAssignedToFound = true;
    //         console.log(`Test One: Field "${key}" found with value "${object[key]}".`);
    //       }
    //     }
    //   }
    // }
    // if (isTableFound && isDescriptionFound && isShortDescriptionFound && isAssignedToFound){
    //   console.log("Test One Completed")
    //   return true;
    // } else {
    //   console.log("Test One Failed")
    //   return false;
    // }
  });

}
// verifyTask();



