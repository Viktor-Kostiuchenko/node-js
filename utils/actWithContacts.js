const fs = require('fs/promises')
const contactsPath = require("../models/path");

const readContent = async () => {
  const content = await fs.readFile(contactsPath,'utf8')
  return JSON.parse(content)
}

const updateContent = async (filePath, contacts) => {
  await fs.writeFile(filePath, JSON.stringify(contacts));
}

module.exports = { readContent, updateContent }