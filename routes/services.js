const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'List all services', services: [] });
});

router.get('/:id', (req, res) => {
    res.json({ message: `Get service ${req.params.id}` });
});

router.post('/', (req, res) => {
    const { name, description, price, duration } = req.body;
    res.json({ message: 'Service created', service: { id: 1, name, description, price, duration } });
});

router.put('/:id', (req, res) => {
    res.json({ message: `Service ${req.params.id} updated` });
});

router.delete('/:id', (req, res) => {
    res.json({ message: `Service ${req.params.id} deleted` });
});

module.exports = router;