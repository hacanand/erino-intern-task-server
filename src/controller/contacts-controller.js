const ContactRepository = require('../repository/contact-repository');
const contactRepository = new ContactRepository();
//write all the business logic here with proper error handling and response with proper error codes and messages
const getAllContacts = async (req, res) => {
    try {
        const contacts = await contactRepository.getAllContacts();
        res.status(200).json({
            success: true,
            data: contacts,
            err: {},
            message: "Contacts fetched successfully"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            data: {},
            err: error,
            message: "Failed to fetch contacts"
        })
    }
};

const createContact = async (req, res) => {
    try {
        const contact = await contactRepository.createContact(req.body);
        res.status(201).json({
            success: true,
            data: contact,
            err: {},
            message: "Contact created successfully"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            data: {},
            err: error,
            message: "Failed to create contact"
        })
    }

};

const updateContact = async (req, res) => {
    try {
        const contact = await contactRepository.updateContact(req.params.id, req.body);
        res.status(200).json({
            success: true,
            data: contact,
            err: {},
            message: "Contact updated successfully"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            data: {},
            err: error,
            message: "Failed to update contact"
        })
    }
}
const deleteContact = async (req, res) => {
    try {
        const contact = await contactRepository.deleteContact(req.params.id);
        res.status(200).json({
            success: true,
            data: contact,
            err: {},
            message: "Contact deleted successfully"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            data: {},
            err: error,
            message: "Failed to delete contact"
        })
    }
}
module.exports = {
    getAllContacts,
    createContact,
    updateContact,
    deleteContact
}