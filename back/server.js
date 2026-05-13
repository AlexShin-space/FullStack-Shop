const express = require('express');
const cors = require('cors');

const productsRoutes = require('./routes/products');
const promoRoutes = require('./routes/promo');
const ordersRoutes = require('./routes/orders');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/products', productsRoutes);
app.use('/api/promo', promoRoutes);
app.use('/api/orders', ordersRoutes);

app.listen(5000, () => {
    console.log('Server running on port 5000');
});