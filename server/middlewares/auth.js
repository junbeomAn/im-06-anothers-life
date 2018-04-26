const jwt = require('jsonwebtoken');

var authMiddleware = (req, res, next) => {
  // 헤더나 URL에서 토큰 읽기
  var token = req.headers['x-access-token'] || req.query.token;

  // 토큰이 존재하지 않을 시
  if(!token) return res.status(403).json({ success: false, message: '토큰 없음' });

  // 토큰 디코딩 하는 프로미스 생성
  var p = new Promise(
    (resolve, reject) => {
      jwt.verify(token, req.app.get('jwt-secret'), (err, decoded) => {
        if (err) reject(err);
        resolve(decoded);
      })
    }
  )

  // 토큰이 유효하지 않으면, 에러메세지 리턴
  var onError = (error) => {
    res.status(403).json({
      success: false,
      message: error.message
    })
  }

  // 프로미스 진행
  p.then((decoded) => {
    req.decoded = decoded;
    next();
  }).catch(onError) 
}

module.exports = authMiddleware