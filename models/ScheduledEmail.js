const mongoose = require('mongoose');

const scheduledEmailSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'QuizResponse',
        required: true
    },
    email: {
        type: String,
        required: true
    },
    template: {
        type: String,
        required: true
    },
    scheduledDate: {
        type: Date,
        required: true
    },
    quizType: {
        type: String,
        required: true
    },
    sent: {
        type: Boolean,
        default: false
    },
    sentDate: {
        type: Date
    }
});

module.exports = mongoose.model('ScheduledEmail', scheduledEmailSchema);