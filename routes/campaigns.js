const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'List all campaigns', campaigns: [] });
});

router.get('/:id', (req, res) => {
    res.json({ message: `Get campaign ${req.params.id}` });
});

router.post('/', (req, res) => {
    const { title, message, targetSegment } = req.body;
    res.json({ message: 'Campaign created', campaign: { id: 1, title, message, targetSegment, status: 'draft' } });
});

router.post('/:id/send', (req, res) => {
    res.json({ message: `Campaign ${req.params.id} messages sent successfully` });
});

router.put('/:id', (req, res) => {
    res.json({ message: `Campaign ${req.params.id} updated` });
});

router.delete('/:id', (req, res) => {
    res.json({ message: `Campaign ${req.params.id} deleted` });
});

module.exports = router;