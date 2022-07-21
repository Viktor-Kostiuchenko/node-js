const options = require('../models/options');

const listContacts = async () => {
  return await options.listContacts();
};

const getContact = async (id) => {
  return await options.getContact(id);
};

const removeContact = async (id) => {
  return await options.removeContact(id);
};

const addContact = async (body) => {
  return await options.addContact(body);
};

const updateContact = async (id, body) => {
  return await options.updateContact(id, body);
};

module.exports = {
  listContacts,
  getContact,
  removeContact,
  addContact,
  updateContact,
};
