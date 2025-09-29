require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const cron = require('node-cron');
const WorkshopRegistration = require('./models/WorkshopRegistration');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB Schema for scheduled emails
const scheduledEmailSchema = new mongoose.Schema({
    email: String,
    name: String,
    quizType: String,
    template: String,
    scheduledDate: Date,
    sent: { type: Boolean, default: false }
});

const ScheduledEmail = mongoose.model('ScheduledEmail', scheduledEmailSchema);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Setup email transporter
const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});

// Verify email configuration
transporter.verify(function(error, success) {
    if (error) {
        console.log('Email server error:', error);
    } else {
        console.log('Email server is ready to send messages');
    }
});

// Email templates
const emailTemplates = {
    'style-transformer': {
        subject: "You deserve to feel radiant every day ✨",
        template: (name) => `
            Hi ${name},
            
            I know that for you, confidence starts with the woman you see in the mirror. You dream of walking out the door, head held high, knowing that your hair, makeup, and style reflect the powerful woman inside.
            
            And I also know how frustrating it feels when you try product after product, trend after trend… and still feel like something is missing.
            
            That's why I created a space just for women like you—where personal image is more than "looking pretty." It's about unlocking the energy that makes you magnetic. 🌹
            
            💫 I'd love to invite you to my upcoming workshop, where we'll go step by step into the secrets of styling, confidence, and the little details that make you shine effortlessly.
            
            And the best part? You won't be doing this alone—you'll join a community of women who are also rewriting their stories and supporting each other every step of the way.
            
            ✨ Are you ready to fall in love with your reflection again?
            
            👉 [Join the workshop here]
            
            With love,
            Eunice`
    },
    'ambitious-creator': {
        subject: "Your vision deserves to become reality 🚀",
        template: (name) => `
            Hi ${name},
            
            I can already tell—you're ambitious, creative, and you know deep down you were made for more. Success isn't just a dream for you, it's a calling.
            
            But I also know how exhausting it feels to work hard and still feel like the results don't match your effort. Or to have the vision, but not the clarity or strategies to bring it to life.
            
            You don't have to do it alone anymore. 💡
            
            That's why I designed a business-focused workshop for women like you—where we talk about visibility, strategy, and how to turn confidence into actual opportunities.
            
            And even more powerful—you'll step into a community of ambitious women who get what it feels like to dream bigger, push through doubts, and rise together.
            
            💫 This is your time to stop holding back and finally create the life (and business) you've been visualizing.
            
            👉 [Save your spot in the workshop here]
            
            Cheering for you always,
            Eunice`
    },
    'inner-healer': {
        subject: "You don't have to carry this alone 💫",
        template: (name) => `
            Hi ${name},
            
            I feel your heart. You've been carrying so much inside—moments of doubt, heaviness, and maybe even loneliness.
            
            But here's the truth: the fact that you're here, taking this test, means that deep down you already know you're ready for change. You're ready to release old patterns and step into the peace, clarity, and confidence you've always deserved. 🌙
            
            I created a healing & empowerment workshop where we'll work on inner talk, emotions, and building that inner strength that nobody can take away from you.
            
            And the most beautiful part—you'll meet other women walking the same path. Women who want to break free from the same cycles and finally rise together. Because healing doesn't have to be lonely. 🌸
            
            ✨ This could be the first step toward the lighter, more joyful life you've been craving.
            
            👉 [Join the workshop here]
            
            With all my heart,
            Eunice`
    },
    'multi-dreamer': {
        subject: "You don't have to have it all figured out (yet) 💫",
        template: (name) => `
            Hi ${name},
            
            Have you ever laid in bed at night, your mind racing with ideas, dreams, and "what ifs"… but instead of feeling inspired, you feel exhausted because you don't know where to begin?
            
            I know that feeling. The quiet frustration of wanting to change, of craving a life that feels bigger, freer, more you—but not knowing which path to take first. It feels like carrying a fire inside your heart with no clear direction to let it burn.
            
            But here's the truth: there is nothing wrong with you for feeling this way. In fact, it's a sign of how much life is inside of you. You're not lost—you're just a multi-dreamer, a woman who was never meant to fit in one box.
            
            That's why I created a space for women like you. A space where you don't have to choose one path right away—you get to explore, try, and rediscover yourself without the pressure of being perfect.
            
            ✨ You can start with a 1-week private journey of self-discovery (1:1 sessions touching on style, business, and inner work).
            ✨ Or dive into a 2-month mentorship, where we go layer by layer through self-image, mindset, goals, and the woman you're becoming.
            
            And along the way, you'll find not only clarity—but also a community of women who are walking this same road of becoming.
            
            💫 You don't need to wait for the perfect moment. The moment is now—the first step is yours.
            
            👉 [Start your self-discovery journey here]
            
            With love, belief, and fire for you,
            Eunice`
    }
};

// Schedule email sending (runs every hour)
cron.schedule('0 * * * *', async () => {
    try {
        const now = new Date();
        const scheduledEmails = await ScheduledEmail.find({
            scheduledDate: { $lte: now },
            sent: false
        });

        for (const email of scheduledEmails) {
            try {
                const template = emailTemplates[email.quizType];
                await transporter.sendMail({
                    from: `"Eunice Inside Glow" <${process.env.EMAIL_USER}>`,
                    to: email.email,
                    subject: template.subject,
                    html: template.template(email.name)
                });

                email.sent = true;
                await email.save();
                console.log(`Follow-up email sent to ${email.email}`);
            } catch (err) {
                console.error(`Failed to send email to ${email.email}:`, err);
            }
        }
    } catch (err) {
        console.error('Error processing scheduled emails:', err);
    }
});

// Quiz submission endpoint
app.post('/submit-quiz', async (req, res) => {
    try {
        const { answers, fullName, email, phone } = req.body;
        
        // Calculate quiz type based on answers
        const quizType = calculateQuizType(answers);
        
        // Get email template
        const emailTemplate = emailTemplates[quizType];
        
        // Send immediate email
        await transporter.sendMail({
            from: `"Eunice Inside Glow" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: emailTemplate.subject,
            html: emailTemplate.template(fullName)
        });

        // Schedule follow-up emails
        const scheduledDates = [
            new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),  // 2 days later
            new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),  // 5 days later
            new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)   // 7 days later
        ];

        for (const date of scheduledDates) {
            await ScheduledEmail.create({
                email,
                name: fullName,
                quizType,
                scheduledDate: date
            });
        }
        
        res.json({ 
            success: true, 
            type: quizType 
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ 
            success: false, 
            error: 'Failed to process quiz submission' 
        });
    }
});

// Calculate quiz type
function calculateQuizType(answers) {
    const counts = {
        A: answers.filter(a => a === 'A').length,
        B: answers.filter(a => a === 'B').length,
        C: answers.filter(a => a === 'C').length
    };

    if (counts.A > counts.B && counts.A > counts.C) {
        return 'style-transformer';
    } else if (counts.B > counts.A && counts.B > counts.C) {
        return 'ambitious-creator';
    } else if (counts.C > counts.A && counts.C > counts.B) {
        return 'inner-healer';
    } else {
        return 'multi-dreamer';
    }
}

const PORT = process.env.PORT || 3000;
// Workshop signup endpoint
app.post('/workshop-signup', async (req, res) => {
    try {
        const { fullName, whatsapp, email } = req.body;
        
        // Create new registration
        const registration = new WorkshopRegistration({
            fullName,
            whatsapp,
            email
        });
        
        await registration.save();

        // Send confirmation email
        await transporter.sendMail({
            from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: '🌟 Welcome to Our Free Transformation Workshop!',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h1 style="color: #b8860b;">Welcome, ${fullName}!</h1>
                    <p>Thank you for signing up for our free transformation workshop!</p>
                    <p>Here's what you need to know:</p>
                    <ul>
                        <li>We'll be sending workshop details to your WhatsApp (${whatsapp})</li>
                        <li>The workshop will be interactive and transformative</li>
                        <li>You'll receive your workbook and resources before we begin</li>
                    </ul>
                    <p>Watch your WhatsApp for more information coming soon!</p>
                    <p style="color: #666;">With excitement,<br>Eunice</p>
                </div>
            `
        });

        res.json({ 
            success: true, 
            message: 'Registration successful' 
        });
    } catch (error) {
        console.error('Workshop registration error:', error);
        res.status(500).json({ 
            success: false, 
            error: 'Failed to process registration' 
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

