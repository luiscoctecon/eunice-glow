const nodemailer = require('nodemailer');
const styleTransformerTemplate = require('./email-templates/styleTransformer');
const ambitiousCreatorTemplate = require('./email-templates/ambitiousCreator');
const innerHealerTemplate = require('./email-templates/innerHealer');

class EmailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            service: process.env.EMAIL_SERVICE,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD
            }
        });
    }

    async sendQuizResults(userData, quizType) {
        const templates = {
            'style-transformer': {
                template: styleTransformerTemplate,
                subject: '✨ Your Style Transformation Journey Begins!'
            },
            'ambitious-creator': {
                template: ambitiousCreatorTemplate,
                subject: '🚀 Your Vision Deserves to Become Reality'
            },
            'inner-healer': {
                template: innerHealerTemplate,
                subject: '💫 Your Journey to Inner Peace Starts Now'
            }
        };

        const { template, subject } = templates[quizType] || templates['multi-dreamer'];

        try {
            // Send immediate results email
            await this.transporter.sendMail({
                from: `"Eunice Inside Glow" <${process.env.EMAIL_USER}>`,
                to: userData.email,
                subject: subject,
                html: template(userData.fullName),
                replyTo: process.env.REPLY_TO_EMAIL
            });

            // Schedule follow-up emails
            this.scheduleFollowUpEmails(userData, quizType);

        } catch (error) {
            console.error('Email sending failed:', error);
            throw new Error('Failed to send email');
        }
    }

    async scheduleFollowUpEmails(userData, quizType) {
        const followUpSchedule = [
            { days: 2, template: this.getFollowUp1Template(quizType) },
            { days: 5, template: this.getFollowUp2Template(quizType) },
            { days: 7, template: this.getFollowUp3Template(quizType) }
        ];

        for (const schedule of followUpSchedule) {
            const sendDate = new Date();
            sendDate.setDate(sendDate.getDate() + schedule.days);

            // Store scheduled email in database
            await this.storeScheduledEmail({
                userId: userData._id,
                email: userData.email,
                template: schedule.template,
                scheduledDate: sendDate,
                quizType: quizType
            });
        }
    }

    getFollowUp1Template(quizType) {
        // First follow-up email template
        return (name) => `
            Hi ${name},
            
            I've been thinking about you since you took the quiz...
            [Rest of follow-up email content]
        `;
    }

    getFollowUp2Template(quizType) {
        // Second follow-up email template
        return (name) => `
            Hi ${name},
            
            How has your journey been going?
            [Rest of follow-up email content]
        `;
    }

    getFollowUp3Template(quizType) {
        // Final follow-up email template
        return (name) => `
            Hi ${name},
            
            I wanted to share something special with you...
            [Rest of follow-up email content]
        `;
    }

    async processScheduledEmails() {
        try {
            // Get all emails scheduled for now
            const scheduledEmails = await this.getScheduledEmails();

            for (const email of scheduledEmails) {
                await this.transporter.sendMail({
                    from: `"Eunice Inside Glow" <${process.env.EMAIL_USER}>`,
                    to: email.email,
                    subject: email.subject,
                    html: email.template(email.userData.fullName),
                    replyTo: process.env.REPLY_TO_EMAIL
                });

                // Mark email as sent
                await this.markEmailAsSent(email._id);
            }
        } catch (error) {
            console.error('Failed to process scheduled emails:', error);
        }
    }
}

module.exports = new EmailService();