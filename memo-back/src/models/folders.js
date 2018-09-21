const mongoose = require('mongoose');

const { Schema } = mongoose;

const Folder = new Schema({
  name: String
});

module.exports = mongoose.model('Folder', Folder);