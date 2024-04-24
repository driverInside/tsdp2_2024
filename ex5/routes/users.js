const express = require('express');
const router = express.Router();
const UserModel = require('../models/users');

router.get('/', async (_, res) => {
  const users = await UserModel.find({
    lastname: "Pérez"
  }).limit(1);
  res.send(users);
});

module.exports = router;
