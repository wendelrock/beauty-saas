const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'List all clients', clients: [] });
});

router.get('/:id', (req, res) => {
    res.json({ message: `Get client ${req.params.id}` });
});

router.post('/', (req, res) => {
    const { name, phone, email } = req.body;
    res.json({ message: 'Client created successfully', client: { id: 1, name, phone, email } });
});

router.put('/:id', (req, res) => {
    res.json({ message: `Client ${req.params.id} updated` });
});

router.delete('/:id', (req, res) => {
    res.json({ message: `Client ${req.params.id} deleted` });
});

module.exports = router;