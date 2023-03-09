import client from "servicenow-rest-api";

const ServiceNow = new client(
  "dev109438",
  "admin",
  "LrmsjVJB@8^3",
);
ServiceNow.Authenticate();

// Verify for a specific Workflow if exists - wf_workflow_version table
ServiceNow.getSampleData("wf_workflow_version", (res) => {
  console.log(res);
});
