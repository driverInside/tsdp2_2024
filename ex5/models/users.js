const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  lastname: String,
  password: String,
  email: {
    type: String,
    unique: true
  },
  address: {
    street: String,
    number: Number,
    zip: String
  }
});

const UserModel = mongoose.model('Users', userSchema, 'users');

module.exports = UserModel;
