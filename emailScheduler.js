const cron = require('node-cron');
const emailService = require('./services/emailService');

// Run every hour
cron.schedule('0 * * * *', async () => {
    console.log('Processing scheduled emails...');
    await emailService.processScheduledEmails();
});

// Run every day at midnight to clean up old scheduled emails
cron.schedule('0 0 * * *', async () => {
    console.log('Cleaning up old scheduled emails...');
    // Add cleanup logic here
});