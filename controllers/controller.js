const asyncHandler = require('express-async-handler');
const Contact = require('../models/connectmodel');


// Get all contacts
const getContacts = asyncHandler(async (req, res) => {
    const contact = await Contact.find();
    res.json(contact);
});


// Create new contact
const newContacts = asyncHandler(async (req, res) => {
    console.log("the req contact is", req.body);

    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are necessary");
    }

    const contact = await Contact.create({ name, email, phone });

    res.status(201).json(contact);
});



// Update contact
const updateContacts = asyncHandler(async (req, res) => {
    const contact=await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("id is invalid");
    }
    const updatedcontact=await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true},
    )
    res.status(201).json(updatedcontact);
});


// Delete contact
const deleteContacts = asyncHandler(async (req, res) => {
    const contact=await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("id is invalid");
    }
   await Contact.findByIdAndDelete(req.params.id);

    res.json(contact);
});


// Get specific contact
const getspecificContacts = asyncHandler(async (req, res) => {
    const contact=await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("invalid id");
    }
    res.status(200).json(contact);
    
});


module.exports = {
    getContacts,
    newContacts,
    updateContacts,
    getspecificContacts,
    deleteContacts
};
