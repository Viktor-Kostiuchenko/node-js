const { program } = require('commander');
const {
  listContacts,
  addContact,
  getContactById,
  removeContactById,
} = require('./contacts/options');

program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);
const options = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      const contacts = await listContacts();
      console.table(contacts);
      break;

    case 'get':
      const contactById = await getContactById(id);
      if (!contactById) {
        throw new Error(`Contact with id=${id} not found`);
      }
      console.log(contactById);
      break;

    case 'add':
      const addedContact = await addContact(name, email, phone);
      console.log(addedContact);
      break;

    case 'remove':
      const removedContact = await removeContactById(id);
      if (!removedContact) {
        throw new Error(`Contact with id=${id} not found to be removed`);
      }
      console.log(removedContact);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

(async () => {
  await invokeAction(options);
})();

