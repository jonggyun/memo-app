const mongoose = require('mongoose');

const { Schema } = mongoose;
const Memo = new Schema({
  title: String,
  content: String,
  createDate: {
    type: Date,
    default: new Date()
  }
});

module.exports = mongoose.model('Memo', Memo);