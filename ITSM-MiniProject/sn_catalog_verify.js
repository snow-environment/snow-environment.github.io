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
ServiceNow.getSampleData('sc_catalog', (res) => {console.log(res);});

// Search existing catalog items inside sc_cat_item_list table. Table contains all catalog items in a specific instance
const catalog_items_fields = [
  'name',
  'description',
  'sc_catalogs.name',
];

const catalog_items_filters = [
  'name=Garmin Forerunner® 265S GPS Running Watch',
  'description=Garmin Forerunner® 265S GPS Running Watch',
  'sc_catalogs.name=ACME Award System'
];

