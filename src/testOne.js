function verifyTask() {
  const { ServiceNow } = require("./servicenowConn.js"); // Import "ServiceNow" variable from servicenowConn.js
  let isTableFound = false;
  let isDescriptionFound = false;
  let isShortDescriptionFound = false;
  let isAssignedToFound = false;

  // Get data from table
  ServiceNow.getSampleData("u_project_verify", (res) => {
    if (res.length > 0) {
      console.log(`Test One: Table "u_project_verify" found.`);
      isTableFound = true;
      for (let i = 0; i < res.length; i++) {
        const object = res[i];
        for (const key in object) {
          if (key == "u_description" && object[key] == "Test Task 1") {
            isDescriptionFound = true;
            console.log(`Test One: Field "${key}" found with value "${object[key]}".`);
          }
          if (key == "u_short_description" && object[key] == "Test 1") {
            isShortDescriptionFound = true;
            console.log(`Test One: Field "${key}" found with value "${object[key]}".`);
          }
          if (key == "u_assigned_to" && object[key] == "5695d69673500010c2e7660c4cf6a789"){
            isAssignedToFound = true;
            console.log(`Test One: Field "${key}" found with value "${object[key]}".`);
          }
        }
      }
    }
    if (isTableFound && isDescriptionFound && isShortDescriptionFound && isAssignedToFound){
      console.log("Test One Completed")
      return true;
    } else {
      console.log("Test One Failed")
      return false;
    }
  });
}
verifyTask();
