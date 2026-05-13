const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM products');
        
        // Map snake_case database columns to camelCase for the frontend
        const products = result.rows.map(product => ({
            id: product.id,
            category: product.category,
            name: product.name,
            description: product.description,
            attributes: product.attributes,
            colors: product.colors,
            sizes: product.sizes,
            photos: product.photos,
            firstPrice: Number(product.first_price),
            currentPrice: Number(product.current_price)
        }));

        res.json(products);
    } catch (err) {
        console.error('Error fetching products:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;