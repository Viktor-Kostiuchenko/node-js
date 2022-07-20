const api = require('../services/api');
const { createError } = require('../utils');
const schema = require('../schemas/contactSchema');

const listContacts = async (req, res, next) => {
  const result = await api.listContacts();
  res.json(result);
};

const getContact = async ({ params: { contactId } }, res, next) => {
  try {
    const result = await api.getContact(contactId);
    if (!result) {
      throw createError(404);
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const addContact = async ({ body }, res, next) => {
  try {
    const { error } = schema.addContact.validate(body);
    if (error) {
      throw createError(400, error.message);
    }
    const result = await api.addContact(body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

const deleteContact = async ({ params: { contactId } }, res, next) => {
  try {
    const result = await api.removeContact(contactId);
    if (!result) {
      throw createError(404);
    }
    res.json({
      message: 'contact deleted',
    });
  } catch (error) {
    next(error);
  }
};

const updateContact = async ({ body, params: { contactId } }, res, next) => {
  try {
    const { error } = schema.updateContact.validate(body);
    if (error) {
      throw createError(400, error.message);
    }
    const result = await api.updateContact(contactId, body);
    if (!result) {
      throw createError(404);
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  listContacts,
  getContact,
  addContact,
  deleteContact,
  updateContact,
};
