const mongoose = require('mongoose')

const memberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    emailAddress: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    acceptedTerms: {
        type: Boolean,
        required: true
    },
    guardianName: {
        type: String,
        required: false
    },
    guardianLastName: {
        type: String,
        required: false
    },
    guardianPhoneNumber: {
        type: String,
        required: false
    },
    subscribedToNewsletter: {
        type: Boolean,
        required: false
    },
    memberImage: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('Member', memberSchema)