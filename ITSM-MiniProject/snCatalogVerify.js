import client from "servicenow-rest-api";

const ServiceNow = new client(
  "dev109438",
  "admin",
  "LrmsjVJB@8^3",
);
ServiceNow.Authenticate();

// Test method
// ServiceNow.getSampleData('change_request',(res)=>{console.log(res);});

// Get the first existing table record from sc_catalog table
ServiceNow.getSampleData("sc_catalog", (res) => {
  console.log(res);
});
