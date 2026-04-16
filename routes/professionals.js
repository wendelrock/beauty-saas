const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'List all professionals', professionals: [] });
});

router.get('/:id', (req, res) => {
    res.json({ message: `Get professional ${req.params.id}` });
});

router.post('/', (req, res) => {
    const { name, specialization, phone } = req.body;
    res.json({ message: 'Professional created', professional: { id: 1, name, specialization, phone } });
});

router.put('/:id', (req, res) => {
    res.json({ message: `Professional ${req.params.id} updated` });
});

router.delete('/:id', (req, res) => {
    res.json({ message: `Professional ${req.params.id} deleted` });
});

module.exports = router;