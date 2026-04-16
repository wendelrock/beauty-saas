const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'List all appointments', appointments: [] });
});

router.get('/date/:date', (req, res) => {
    res.json({ message: `Appointments for ${req.params.date}`, appointments: [] });
});

router.get('/:id', (req, res) => {
    res.json({ message: `Get appointment ${req.params.id}` });
});

router.post('/', (req, res) => {
    const { clientId, professionalId, serviceId, appointmentDate } = req.body;
    res.json({ message: 'Appointment created', appointment: { id: 1, clientId, professionalId, serviceId, appointmentDate, status: 'confirmed' } });
});

router.put('/:id/status', (req, res) => {
    const { status } = req.body;
    res.json({ message: `Appointment ${req.params.id} status updated to ${status}` });
});

router.put('/:id/cancel', (req, res) => {
    res.json({ message: `Appointment ${req.params.id} cancelled` });
});

module.exports = router;