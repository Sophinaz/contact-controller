const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
const { default: mongoose } = require("mongoose");
const constants = require("../constants");

const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});

const postContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("all fields are mandatory!");
  }

  const contact = await Contact.create({
    name,
    email,
    phone,
  });

  res.status(201).json(contact);
});

const getContact = asyncHandler(async (req, res) => {
  const user_id = req.params.id;
  const contact = await Contact.findById(user_id);

  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  res.status(200).json(contact);
});

const updateContact = asyncHandler(async (req, res) => {
  const user_id = req.params.id;
  const contact = Contact.findById(user_id);

  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  const updatedContact = await Contact.findByIdAndUpdate(user_id, req.body, { new: true});

  res.status(200).json(updatedContact);
});

const deleteContact = asyncHandler(async (req, res) => {
  const user_id = req.params.id
  const contact = await Contact.findById(user_id)

  if (!contact) {
    res.status(404)
    throw new Error("Contact to be deleted not found")
  }

  const deletedUser = await Contact.findByIdAndDelete(user_id)

  res.status(200).json(deletedUser);
});

module.exports = {
  getContacts,
  postContact,
  getContact,
  updateContact,
  deleteContact,
};