const mongoose = require('mongoose');
const crypto = require('crypto');
const Schema = mongoose.Schema;
const config = require('../config');

const User = new Schema({
  username: String,
  password: String,
  admin: { type: Boolean, default: false }
});

// 회원가입
User.statics.create = function(username, password) {
  // 비밀번호 해싱
  var encrypted = crypto.createHmac('sha1', config.secret)
                  .update(password)
                  .digest('base64');
  const user = new this({
    username,
    password : encrypted
  })

  // 저장후 프로미스 리턴
  return user.save();
}

// 해당 계정 유저 찾기
User.statics.findOneByUsername = function(username) {
  return this.findOne({
    username
  }).exec();
}

// 패스워드 검증
User.methods.verify = function(password) {
  var encrypted = crypto.createHmac('sha1', config.secret)
                  .update(password)
                  .digest('base64');
  return this.password === encrypted;
}

User.methods.assignAdmin = function() {
  this.admin = true
  return this.save();
}

module.exports = mongoose.model('User', User);