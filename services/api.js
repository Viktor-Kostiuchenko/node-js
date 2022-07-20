const options = require('../models/options');

const listContacts = async () => {
  try {
    const data = await options.listContacts();
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

const getContact = async (id) => {
  try {
    const data = await options.getContact(id);
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

const removeContact = async (id) => {
  try {
    const data = await options.removeContact(id); 
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

const addContact = async (body) => {
  try {
    const data = await options.addContact(body);
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

const updateContact = async (id, body) => {
  try {
    const data = await options.updateContact(id, body);
    return data;
  } catch (err) {
    console.log(err.message);
  }
};


module.exports = {listContacts, getContact, removeContact, addContact, updateContact};
