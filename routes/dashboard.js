const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        todayAppointments: 8,
        todayClients: 6,
        inactiveClients: 12,
        appointmentStatus: {
            confirmed: 5,
            completed: 2,
            cancelled: 1
        },
        monthlyRevenue: 2500.00
    });
});

router.get('/schedule/today', (req, res) => {
    res.json({ message: 'Today schedule', appointments: [] });
});

router.get('/clients/inactive', (req, res) => {
    res.json({ message: 'Inactive clients', clients: [] });
});

router.get('/revenue', (req, res) => {
    res.json({
        totalRevenue: 15000.00,
        monthlyRevenue: 3500.00,
        weeklyRevenue: 850.00
    });
});

module.exports = router;