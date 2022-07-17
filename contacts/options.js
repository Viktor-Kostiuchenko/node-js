const {v4} = require("uuid");
const { readContent, updateContent } = require('./helpers')
const contactsPath = require("./path");


const listContacts = async() => {
  return await readContent()
}

const getContactById = async(contactId) => {
  const contacts = await readContent()
  const result = contacts.find(contact => contact.id === contactId)
  return result ? result : null
}

const removeContactById = async(contactId) => {
  const contacts = await readContent()
    const idx = contacts.findIndex(item => item.id === contactId);
    if(idx === -1){
        return null;
    }
    const [removeContact] = contacts.splice(idx, 1);
    updateContent(contactsPath, contacts)
    return removeContact
}

const addContact = async(name, email, phone) => {
  const contacts = await readContent()
  const newContact = { id: v4(), name, email, phone }
  contacts.push(newContact)
  updateContent(contactsPath, contacts)
  return newContact
}

module.exports = { listContacts, getContactById, removeContactById, addContact }