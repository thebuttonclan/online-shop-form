import axios from 'axios';

async function createApplication(data) {
  try {
    const appliedSuccessfully = await axios.post('/api/application/submit/js', data).then(res => res.data);
    return appliedSuccessfully;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function updateApplication(data) {
  const { id } = data;

  delete data.id;

  try {
    const application = await axios.put(`/api/application/${id}`, data).then(res => res.data);

    return application;
  } catch (error) {
    console.error(error);
    return null;
  }
}

module.exports = { createApplication, updateApplication };
