const express = require('express');
const router = express.Router();

router.get('/', (_, res) => {
  res.send([
    'product1',
    'product2',
    'product3',
    'product4',
  ])
});

module.exports = router;