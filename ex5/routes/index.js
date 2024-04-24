const express = require('express');
const router = express.Router();

const productRouter = require('./products');
const userRouter = require('./users');

router.use('/users', userRouter);
router.use('/products', productRouter);

module.exports = router;
