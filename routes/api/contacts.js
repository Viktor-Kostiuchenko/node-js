const express = require('express');
const { basedir } = global;
const ctrl = require(`${basedir}/controllers`);
const { tryCatchHandler } = require(`${basedir}/utils`);

const router = express.Router();

router.get('/', tryCatchHandler(ctrl.listContacts));
router.get('/:contactId', tryCatchHandler(ctrl.getContact));
router.post('/', tryCatchHandler(ctrl.addContact));
router.delete('/:contactId', tryCatchHandler(ctrl.deleteContact));
router.put('/:contactId', tryCatchHandler(ctrl.updateContact));

module.exports = router;
