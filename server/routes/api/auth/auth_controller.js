const jwt = require('jsonwebtoken');
const User = require('../../../models/user');

exports.register = (req, res) => {
  const { username, password, email } = req.body;
  var newUser = null;

  // 동일 아이디가 존재하지않으면 계정 생성
  var create = (user) => {
      if(user) throw new Error('중복된 아이디가 존재합니다');
      else return User.create(username, password, email);
  };

  // 유저 숫자 카운팅
  var count = (user) => {
      newUser = user;
      return User.count({}).exec();
  };

  // 최초유저 admin 권한 부여
  var assign = (count) => {
      if(count === 1) return newUser.assignAdmin();
      else return Promise.resolve(false);
  };

  // 클라이언트에게 응답
  var respond = (isAdmin) => {
      res.json({
      message : '회원님의 가입을 환영합니다.',
      admin: isAdmin ? true : false
      })
  };

  // 에러 있을때 (동일 아이디 존재)
  var onError = (error) => {
    res.status(409).json({
        message: error.message
    })
  }

  // 유저네임 및 이메일 중복 확인
  User.findOneByUsername(username)
  .then(create)
  .then(count)
  .then(assign)
  .then(respond)
  .catch(onError)
}

exports.login = (req, res) => {
  var { username, password } = req.body;
  var secret = req.app.get('jwt-secret');

  // 유저 정보 확인 & 토큰 생성
  var check = (user) => {
    if(!user) throw new Error('해당되는 계정이 없습니다');
    // 해당되는 계정이 있을 시 비밀번호 확인
    if(user.verify(password)){
      // 비동기적으로 토큰을 생성하는 프로미스 생성
      var p = new Promise((resolve, reject) => {
        jwt.sign(
          {
            _id: user._id,
            username: user.username,
            admin: user.admin
          },
          secret,
          {
            expiresIn: '7d',
            subject: 'userinfo'
          }, (err, token) => {
            if(err) reject(err);
            resolve(token);
          })   
      })
      return p;
    }
    else throw new Error(' 님 비밀번호를 확인하세요');
  }

  // 토큰 응답
  var respond = (token) => {
    res.json({
      message: ' 님 환영합니다.',
      token
    })
  }

  // 에러 발생 시
  var onError = (error) => {
    res.status(403).json({
      message: error.message
    })
  }

  // 유저 찾기
  User.findOneByUsername(username)
    .then(check)
    .then(respond)
    .catch(onError)
}

exports.check = (req, res) => {
  res.json({
    success: true,
    info: req.decoded
  })
}

exports.remove = (req, res) => {
  var { username } = req.body;

  User.findOneAndRemove(username, res)
}

exports.update = (req, res) => {
  var { username, password } = req.body;

  User.updatePassword(username, password, res)
}

exports.find = (req, res) => {
  var { username } = req.body;

  // 클라이언트에게 응답
  var respond = (userInfo) => {
    res.json({
      userInfo
    })
  };

  User.findOneByUsername(username)
    .then(respond)
    .catch(err => {throw err})
}