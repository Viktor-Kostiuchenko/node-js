const { v4 } = require('uuid');
const {
  actWithContacts: { readContent, updateContent },
} = require('../utils');
const contactsPath = require('./path');

const listContacts = async () => {
  return await readContent();
};

const getContact = async (contactId) => {
  const contacts = await readContent();
  const result = contacts.find((contact) => contact.id === contactId);
  return result || null;
};

const removeContact = async (contactId) => {
  const contacts = await readContent();
  const idx = contacts.findIndex((item) => item.id === contactId);
  if (idx === -1) {
    return null;
  }
  const [removeContact] = contacts.splice(idx, 1);
  updateContent(contactsPath, contacts);
  return removeContact;
};

const addContact = async ({ name, email, phone }) => {
  const contacts = await readContent();
  const newContact = { id: v4(), name, email, phone };
  contacts.push(newContact);
  updateContent(contactsPath, contacts);
  return newContact;
};

const updateContact = async (id, objForUpdate) => {
  const contacts = await readContent();

  const idx = contacts.findIndex((item) => item.id === id);
  if (idx === -1) {
    return null;
  }
  const updatedContact = {};

  for (const key in objForUpdate) {
    if (key) {
      updatedContact[key] = objForUpdate[key];
    }
  }

  contacts[idx] = { ...contacts[idx], ...updatedContact };
  updateContent(contactsPath, contacts);
  return contacts[idx];
};

module.exports = {
  listContacts,
  getContact,
  removeContact,
  addContact,
  updateContact,
};
