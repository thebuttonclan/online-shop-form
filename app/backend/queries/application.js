const createApplication = async (client, { form_data }) => {
  const query = `insert into applications (form_data) values ($1) returning *`;
  const res = await client.query(query, [form_data]);

  if (res.rows.length === 0) {
    return null;
  }

  return res.rows[0];
};

const countApplication = async client => {
  const query = `select count(*) from applications`;
  const res = await client.query(query, []);

  if (res.rows.length === 0) {
    return -1;
  }

  const { count } = res.rows[0];

  return Number.parseInt(count, 10);
};

module.exports = {
  createApplication,
  countApplication,
};
