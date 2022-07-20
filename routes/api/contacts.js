const express = require('express');
const controller = require('../../controllers/contactsController')

const router = express.Router();

router.get('/', controller.listContacts);
router.get('/:contactId', controller.getContact);
router.post('/', controller.addContact)
router.delete('/:contactId', controller.deleteContact) 
router.put('/:contactId', controller.updateContact) 


module.exports = router;
