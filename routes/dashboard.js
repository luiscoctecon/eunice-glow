const express = require('express');
const router = express.Router();
const QuizResponse = require('../models/QuizResponse');
const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');

// Get dashboard overview data
router.get('/dashboard', auth, async (req, res) => {
    try {
        // Get total responses
        const totalResponses = await QuizResponse.countDocuments();

        // Get weekly responses
        const weekAgo = new Date();
        weekAgo.setDate(weekAgo.getDate() - 7);
        const weeklyResponses = await QuizResponse.countDocuments({
            createdAt: { $gte: weekAgo }
        });

        // Get types distribution
        const typesDistribution = await QuizResponse.aggregate([
            {
                $group: {
                    _id: '$quizType',
                    count: { $sum: 1 }
                }
            }
        ]);

        // Get daily responses for the last 30 days
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        const dailyResponses = await QuizResponse.aggregate([
            {
                $match: {
                    createdAt: { $gte: thirtyDaysAgo }
                }
            },
            {
                $group: {
                    _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
                    count: { $sum: 1 }
                }
            },
            {
                $sort: { _id: 1 }
            }
        ]);

        // Get recent responses
        const recentResponses = await QuizResponse.find()
            .sort({ createdAt: -1 })
            .limit(10);

        res.json({
            totalResponses,
            weeklyResponses,
            conversionRate: Math.round((weeklyResponses / totalResponses) * 100),
            avgCompletionTime: 5, // You can implement actual calculation
            typesDistribution: {
                styleTransformer: getTypeCount(typesDistribution, 'style-transformer'),
                ambitiousCreator: getTypeCount(typesDistribution, 'ambitious-creator'),
                innerHealer: getTypeCount(typesDistribution, 'inner-healer'),
                multiDreamer: getTypeCount(typesDistribution, 'multi-dreamer')
            },
            dailyResponses: dailyResponses.map(day => ({
                date: day._id,
                count: day.count
            })),
            recentResponses
        });
    } catch (error) {
        console.error('Dashboard data error:', error);
        res.status(500).json({ error: 'Failed to fetch dashboard data' });
    }
});

// Helper function to get count for quiz type
function getTypeCount(distribution, type) {
    const found = distribution.find(item => item._id === type);
    return found ? found.count : 0;
}

// Export router
module.exports = router;