import { credentials } from "../../../app.js";
import { ServiceNow } from "../../../lib/servicenowAsync.js";

export async function oneOne() {
  const sn = ServiceNow;
  const connector = new sn(credentials.instName, credentials.instUserName, credentials.instPassword, true);
  connector.Authenticate();

  // Get the specific catalog ACME Award System from sc_catalog table
  let isCatalogFound = false;
  const fieldsCatalog = [
    'title'
  ];
  const filtersCatalog = [
    'title=ACME Award System'
  ];
  const tableDataCatalog = await connector.getTableData(fieldsCatalog, filtersCatalog, 'sc_catalog', function (res) {console.log(res)});
  if (tableDataCatalog.data.result.length > 0) {
    isCatalogFound = true;
  }

  // Get the categories and sub-categories from ACME Award System(verification only for the number,
  // not including the names)
  let parentCategoriesFound = false;
  const fieldsParentCategories = [
    'sc_catalog.title',
    'parent.title'
    
  ];
  const filtersParentCategories = [
    'sc_catalog.title=ACME Award System',
    'parent.title='
  ];
  const tableDataParentCategories = await connector.getTableData(fieldsParentCategories, filtersParentCategories, 'sc_category', function (res) {console.log(res)});
  if (tableDataParentCategories.data.result.length == 4) {
    parentCategoriesFound = true;
  } 
  //console.log(tableDataParentCategories);


  let childCategoriesFound = false;
  const fieldsChildCategories = [
    'sc_catalog.title',
    'parent.title'
  ];
  const filtersChildCategories = [
    'sc_catalog.title=ACME Award System',
  ];
  const tableDataChildCategories = await connector.getTableData(fieldsChildCategories, filtersChildCategories, 'sc_category', function (res) {console.log(res)});
  let childCategories = [];
  for (let i = 0; i < tableDataChildCategories.data.result.length; i++) {
    let currentChildCategory = tableDataChildCategories.data.result[i];
    if (currentChildCategory['parent.title'] != null)
      childCategories.push(currentChildCategory)
  }
  if (childCategories.length >= 12) {
    childCategoriesFound = true;
  }
  //console.log(childCategories);
  //console.log(tableDataChildCategories);



  if (isCatalogFound && parentCategoriesFound && childCategoriesFound) {
    return true;
  } else {
    return false;
  }

}


