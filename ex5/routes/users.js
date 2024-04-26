const express = require('express');
const router = express.Router();
const UserModel = require('../models/users');

router.get('/', async (req, res) => {
  const query = req.query;
  const limit = query.limit;

  const users = await UserModel.find({})
    .limit(limit);

  res.send(users);
});


router.post('/', async (req, res) => {
  const user = req.body;

  const newUser = new UserModel(user);

  await newUser.save();

  res.send({
    message: "soy el método post",
    user:newUser
  });
});

module.exports = router;
