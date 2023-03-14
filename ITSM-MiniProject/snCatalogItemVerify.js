import client from "servicenow-rest-api";

const ServiceNow = new client(
  "dev109438",
  "admin",
  "LrmsjVJB@8^3",
);
ServiceNow.Authenticate();

// Search existing catalog items inside sc_cat_item_list table. Table contains all catalog items in a specific instance
const catalog_items_fields = [
  "name",
  "description",
  "sc_catalogs",
];

const catalog_items_filters = [
  "name=Lenovo USB Ethernet Adapter",
  //"description=Garmin Forerunner® 265S GPS Running Watch",
  //"sc_catalogs.name=ACME Award System",
];

const findCatalogItem = ServiceNow.getTableData(
  catalog_items_fields,
  catalog_items_filters,
  "sc_cat_item",
  function (res) {
    console.log(res);
  },
);
console.log(`${findCatalogItem}`);
