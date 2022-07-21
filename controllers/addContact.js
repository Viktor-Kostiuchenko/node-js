const api = require('../services/api');
const { createError } = require('../utils');
const schema = require('../schemas/contactSchema');

const addContact = async ({ body }, res, next) => {
  const { error } = schema.addContact.validate(body);
  if (error) {
    throw createError(400, error.message);
  }
  const result = await api.addContact(body);
  res.status(201).json(result);
};

module.exports = addContact;
