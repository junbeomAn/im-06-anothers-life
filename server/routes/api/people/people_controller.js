const Person = require('../../../models/people');
const fs = require('fs');

// person 테이블 데이터 다 긁어오기
exports.list = (req, res) => {
  var fetch = function() {
    return Person.find().then(data => {
      res.send(data);
    });
  }

  fetch();
}