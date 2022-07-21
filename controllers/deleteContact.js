const api = require('../services/api');
const { createError } = require('../utils');

const deleteContact = async ({ params: { contactId } }, res, next) => {
  const result = await api.removeContact(contactId);
  if (!result) {
    throw createError(404);
  }
  res.json({
    message: 'contact deleted',
  });
};

module.exports = deleteContact;
