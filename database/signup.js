const mongoose = require("mongoose");

const SignUpSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
       
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true

       
    },
    confirmemail: {
        type: String,
        required: true,
        unique: true
       
    },
    contact_number: {
        type: String,
        required: true,
        unique: true
       
    },
    age: {
        type: String,
        required: true
       
    },
    password: {
        type: String,
        required: true
       
    },
    confirmpassword: {
        type: String,
        required: true
       
    }
});

const SignUp = mongoose.model('SignUp', SignUpSchema);

module.exports = SignUp;