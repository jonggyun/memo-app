const mongoose = require('mongoose');

const { Schema } = mongoose;

const Memo = new Schema({
  title: { type: String, required: true },
  content: { type: String },
  createDate: { type: Date, default: new Date() }
});

const Folder = new Schema({
  name: { type: String },
  memolist : [Memo]
});

module.exports = mongoose.model('Folder', Folder);