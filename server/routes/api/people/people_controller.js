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

// exports.create = () => {
//   var newPerson = new Person({ 
//     name: "한영재",
//     description: "영재는 오집니다!",
//     img_one: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Steve_Jobs_Headshot_2010-CROP.jpg/225px-Steve_Jobs_Headshot_2010-CROP.jpg",
//     img_two: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Steve_Jobs_Headshot_2010-CROP.jpg/225px-Steve_Jobs_Headshot_2010-CROP.jpg",
//     schedule: [{ "time": 0700, "task": "명상" }, { "time": 0900, "task": "코딩하기" }]
//   })
//   newPerson.save().then(() => {
//     console.log('save success!!!!!!!!!');
//   })
// }