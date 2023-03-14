import client from "servicenow-rest-api";

const ServiceNow = new client(
  "dev109438",
  "admin",
  "LrmsjVJB@8^3",
);
ServiceNow.Authenticate();

// Verify for a specific Workflow if exists - wf_workflow_version table
const workflow_item_fields = [
  "name",
  "description",
  "activity_stages",
];

const workflow_item_filters = [
  "name=ACME Award Workflow",
];

const findWorkflowItem = ServiceNow.getTableData(
  workflow_item_fields,
  workflow_item_filters,
  "wf_workflow_version",
  function (res) {
    console.log(res);
    // console.log(res[0]);
    for (const [key, value] of Object.entries(res[0])) { //Iterate the Object to extract the values from each column
      console.log(`${key} : ${value}`);
      if (key == "activity_stages") {
      }
    }
  },
);
//console.log(findWorkflowItem);
