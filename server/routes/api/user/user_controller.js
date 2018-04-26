const User = require('../../../models/user');

exports.list = (req, res) => {
  // 관리자 계정 아닐 시 거절
  if(!req.decoded.admin) return res.status(403).json({ message: '관리자 계정이 아닙니다.' });

  User.find({})
  .then(
    users => res.json({users})
  )
}

exports.assignAdmin = (req, res) => {
  // 관리자 계정 아닐 시 거절
  if(!req.decoded.admin) return res.status(403).json({ message: '관리자 계정이 아닙니다.' });
  
  User.findOneByUsername(req.params.username)
  .then(user => user.assignAdmin)
  .then(res.json({ success : true }))
}