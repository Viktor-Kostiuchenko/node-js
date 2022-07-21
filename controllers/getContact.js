const api = require('../services/api');
const { createError } = require('../utils');

const getContact = async ({ params: { contactId } }, res, next) => {
  const result = await api.getContact(contactId);
  if (!result) {
    throw createError(404);
  }
  res.json(result);
};

module.exports = getContact;
