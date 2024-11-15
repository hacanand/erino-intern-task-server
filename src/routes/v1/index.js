const express = require("express");
const contactsController = require("../../controller/contacts-controller");
const router = express.Router();

router.get("/contacts", contactsController.getAllContacts);
router.post("/contacts", contactsController.createContact);
router.put("/contacts/:id", contactsController.updateContact);
router.delete("/contacts/:id", contactsController.deleteContact);

module.exports = router;
