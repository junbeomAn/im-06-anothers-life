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

// 회원 탈퇴
User.statics.findOneAndRemove = function(username, res) {
  this.remove({ username }, (err) => {
    if (err) throw err;
    else {
      const response = {
        message: username + '님 그동안 이용해주셔서 감사합니다'
      };
      return res.status(200).send(response);
    }
  })
}

// 비밀번호 변경
User.statics.updatePassword = function (username, password, res) {

  var encrypted = crypto.createHmac('sha1', config.secret)
    .update(password)
    .digest('base64');

  var conditions = { username };
  var update = { $set: { password: encrypted } };
  var options = { multi: false };
  
  this.update(conditions, update, options, (err) => {
    if (err) throw err;
    else {
      const response = {
        message: '비밀번호가 정상적으로 변경되었습니다'
      };
      return res.status(200).send(response);
    }
  })
}



// 해당 계정 유저 찾기
User.statics.findOneByUsername = function(username) {
  return this.findOne({ username }).exec();
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