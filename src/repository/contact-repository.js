const Contact = require('../models/contacts-data');

//write all crude operations here with proper error handling and response with proper error codes
class ContactRepository{
    async getAllContacts() {
        try {
            return await Contact.find();
        } catch (err) {
            throw err;
        }
    }
    async createContact(contact) {
        try {
            return await Contact.create(contact);
        } catch (err) {
            throw err;
        }
    }
    async updateContact(id, contact) {
        try {
            return await Contact
        } catch (err) {
            throw err;
        }
    }
    async deleteContact(id) {
        try {
            return await Contact.findByIdAndDelete(id);
        }
        catch (err) {
            throw err;
        }
    }          
}
module.exports = ContactRepository;