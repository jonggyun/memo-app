const mongoose = require('mongoose');

const { Schema } = mongoose;

const Memo = new Schema({
  folderName: String,
  content: [ // 폴더 안의 내용을 여러개 저장할 수 있다.
    {
      title: String,
      body: String,
      tags: [String], // 문자열 배열
      publishedDate: {
        type: Date,
        default: new Date() // 현재 날짜를 기준으로!
      }
    }
  ]
});

module.exports = mongoose.model('Memo', Memo);