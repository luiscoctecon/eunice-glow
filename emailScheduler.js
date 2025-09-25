const cron = require('node-cron');
const emailService = require('./services/emailService');
const { ScheduledEmail } = require('./models/ScheduledEmail');

// Run every hour
cron.schedule('0 * * * *', async () => {
    try {
        console.log('Processing scheduled emails...');
        await emailService.processScheduledEmails();
        console.log('Finished processing scheduled emails');
    } catch (error) {
        console.error('Error processing scheduled emails:', error);
    }
});

// Run every day at midnight to clean up old scheduled emails
cron.schedule('0 0 * * *', async () => {
    try {
        console.log('Cleaning up old scheduled emails...');
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        
        const result = await ScheduledEmail.deleteMany({
            sent: true,
            scheduledDate: { $lt: thirtyDaysAgo }
        });
        
        console.log(`Cleaned up ${result.deletedCount} old scheduled emails`);
    } catch (error) {
        console.error('Error cleaning up old scheduled emails:', error);
    }
});