const mongoose = require('mongoose');

const workshopRegistrationSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    whatsapp: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    registeredAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('WorkshopRegistration', workshopRegistrationSchema);