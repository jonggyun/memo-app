const mongoose = require('mongoose');

const { Schema } = mongoose;
const { Types: {ObjectId} } = Schema;
const Memo = new Schema({
  folder: {
    type: ObjectId,
    required: true,
    ref: 'Folder'
  },
  title: String,
  content: String,
  createDate: {
    type: Date,
    default: new Date()
  }
});

module.exports = mongoose.model('Memo', Memo);