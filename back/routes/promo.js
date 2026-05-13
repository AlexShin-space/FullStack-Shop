const express = require('express');
const router = express.Router();

const { promocodes } = require('../data/promo');

router.get('/', (req, res) => {
    res.json(promocodes);
});

module.exports = router;
