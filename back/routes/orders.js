const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const orderData = req.body;
    console.log('--- NEW ORDER RECEIVED ---');
    console.log('Customer Info:', orderData.customer);
    console.log('Basket Items:', orderData.items);
    console.log('Total without promo:', orderData.totalWithoutPromo);
    console.log('Applied promo:', orderData.appliedPromo);
    console.log('Final price:', orderData.totalWithPromo);
    console.log('---------------------------');
    
    res.status(201).json({ message: 'Order received successfully' });
});

module.exports = router;
