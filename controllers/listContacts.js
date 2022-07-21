const api = require('../services/api');

const listContacts = async (req, res, next) => {
  const result = await api.listContacts();
  res.json(result);
};

module.exports = listContacts;
