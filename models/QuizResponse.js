const mongoose = require('mongoose');

const quizResponseSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    answers: [{
        type: String,
        required: true
    }],
    quizType: {
        type: String,
        enum: ['style-transformer', 'ambitious-creator', 'inner-healer', 'multi-dreamer'],
        required: true
    },
    bestTimeToContact: {
        type: String,
        enum: ['morning', 'afternoon', 'evening'],
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('QuizResponse', quizResponseSchema);