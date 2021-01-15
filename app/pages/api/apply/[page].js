import { LAST_PAGE, submitApplication, pageForward } from 'services/application';
import schema from 'schemas/consolidated-schema';
import uiSchema from 'schemas/ui-schema';
import splitSchemas from 'schemas/split-schema';
import _ from 'lodash';

const order = uiSchema['ui:order'];
const schemasArray = splitSchemas(schema, order);

function getFieldsForPage(page, schemasArray) {
  try {
    return Object.keys(schemasArray[page - 1].properties);
  } catch (e) {
    console.error(e);
    return [];
  }
}

function cleanData(page, formData) {
  // Turn string false, true, to booleans
  const dataArray = Object.entries(formData);
  const { properties } = schema;
  if (Array.isArray(dataArray)) {
    dataArray.forEach(([propertyName, value]) => {
      if (properties[propertyName] && properties[propertyName].type === 'boolean') {
        if (value === 'false') {
          formData[propertyName] = false;
        }
        if (value === 'true') {
          formData[propertyName] = true;
        }
      }
    });
  }

  // Remove old data for page before adding new data
  const fields = getFieldsForPage(page, schemasArray);
  const cleanFormData = _.omit(formData, fields);

  return cleanFormData;
}

async function handler(req, res) {
  const { body: postData, session = {}, query = {} } = req;
  const { formData = {} } = session;
  let { page, js } = query;

  page = Number(page);
  js = js === 'true';

  const cleanedData = cleanData(page, postData);
  const newData = { ...cleanedData, ...postData };
  session.formData = newData;

  const context = { req, newData, page, js };

  if (page === LAST_PAGE) {
    await submitApplication(context);
    session.formData = {};
  } else {
    pageForward(context);
  }

  res.end();
}

export default handler;
