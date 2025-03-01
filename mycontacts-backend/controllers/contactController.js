const asyncHandler = require("express-async-handler")


const getContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
});

const postContact = asyncHandler(async (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    res.status(400);
    throw new Error("all fields are mandatory!");
  }
  res.status(201).json({ message: "post a contact" });
});

const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get contact of ${req.params.id}` });
});

const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update contact of ${req.params.id}` });
});

const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete contact of ${req.params.id}` });
});

module.exports = {
  getContacts,
  postContact,
  getContact,
  updateContact,
  deleteContact,
};
