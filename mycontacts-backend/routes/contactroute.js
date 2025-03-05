const express = require("express")
const validateToken = require("../middleware/validateToken")

const router = express.Router()
const { getContacts, postContact, getContact, updateContact, deleteContact } = require("../controllers/contactController")

router.use(validateToken)

router.route("/").get(getContacts);

router.route("/").post(postContact);

router.route("/:id").get(getContact);

router.route("/:id").put(updateContact);

router.route("/:id").delete(deleteContact);


module.exports = router