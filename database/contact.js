const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
       
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    cemail: {
        type: String,
        required: true
       
    },
    c_number: {
        type: String,
        required: true
    },
    mage: {
        type: String,
        required: true
       
    },
    txtarea: {
        type: String,
        required: true
       
    }
});

const Contact = mongoose.model('Contact', ContactSchema);

module.exports = Contact;