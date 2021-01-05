const createApplication = async (client, { form_version, form_data }) => {
  const query = `insert into workflows (form_version, form_data) values ($1, $2) returning *`;
  const res = await client.query(query, [form_version, form_data]);

  if (res.rows.length === 0) {
    return null;
  }

  return res.rows[0];
};

const updateApplication = async (client, { id, form_version, form_data }) => {
  const query = `update workflows set form_version=$2, form_data=$3 where id=$1 returning *`;
  const res = await client.query(query, [id, form_version, form_data]);

  if (res.rows.length === 0) {
    return null;
  }

  return res.rows[0];
};

module.exports = {
  createApplication,
  updateApplication,
};
