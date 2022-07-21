const api = require('../services/api');
const { createError } = require('../utils');
const schema = require('../schemas/contactSchema');

const updateContact = async ({ body, params: { contactId } }, res, next) => {
  const { error } = schema.updateContact.validate(body);
  if (error) {
    throw createError(400, error.message);
  }
  const result = await api.updateContact(contactId, body);
  if (!result) {
    throw createError(404);
  }
  res.json(result);
};

module.exports = updateContact;
