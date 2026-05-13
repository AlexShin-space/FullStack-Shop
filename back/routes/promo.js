const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM promocodes');
        
        // Reconstruct the object format: { code: discount }
        const promocodes = {};
        result.rows.forEach(row => {
            promocodes[row.code] = row.discount;
        });

        res.json(promocodes);
    } catch (err) {
        console.error('Error fetching promocodes:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;

