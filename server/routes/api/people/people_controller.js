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

/* DB people collection of documnet
[
  {
    "name": "오프라 윈프리",
    "description": "오프라 윈프리는 가난과 인종차별이라는 장애물을 뛰어넘고 인간에 대한 공감과 진실한 소통으로 가장 낮은 곳에서 절정의 인생에 이르게 돼써요. 오프라 윈프리의 부지런함은 그의 성공의 큰 요소 중 하나에요. 오프라 윈프리의 삶을 살아보세요!",
    "img_one": "https://en.wikipedia.org/wiki/Oprah_Winfrey#/media/File:Oprah_in_2014.jpg",
    "img_two": "https://cdn.luxatic.com/wp-content/uploads/2017/11/Oprah-Winfrey.jpg",
    "schedule": [
      { "time": "06-00", "task": "오프라 윈프리는 일어나서 운동을 하고 있어요." },
      { "time": "07-30", "task": "오프라 윈프리는 방송 모니터링과 녹화를 하고 있어요." },
      { "time": "11-30", "task": "오프라 윈프리는 점심을 먹고 중요한 업무 전화를 하고 있어요." },
      { "time": "12-35", "task": "오프라 윈프리는 방송 녹화를 하고 있어요." },
      { "time": "02-00", "task": "오프라 윈프리는 방송 계획을 세우고 있어요." },
      { "time": "07-50", "task": "오프라 윈프리는 다시 운동을 하고 있어요." },
      { "time": "08-50", "task": "오프라 윈프리는 파트너와 저녁을 먹고 있어요." },
      { "time": "10-00", "task": "오프라 윈프리는 독서를 하고 북클럽에서 읽을 책을 선정하고 있어요." },
      { "time": "11-10", "task": "오프라 윈프리는 불을 끄고 잘 준비를 하고 있어요. 늘 불 끄는 시간을 칼 같이 지키고 있어요." }
    ]
  },

  {
    "name": "르브론 제임스",
    "description": "르브론 제임스는 미국 프로 농구 협회(NBA) 소속 클리브랜드 캐벌리어스의 프로 농구 선수에요. 그는 아직 현역이면서도 수많은 레전드 사이에 이름을 올리고 있는 놀라운 선수랍니다. 르브론 제임스의 삶을 살아보세요!",
    "img_one": "https://en.wikipedia.org/wiki/LeBron_James#/media/File:LeBron_James_(31944491583).jpg",
    "img_two": "https://cdn.theatlantic.com/assets/media/img/mt/2017/12/RTS1IEEZ/lead_960_540.jpg?1522768846",
    "schedule": [
      { "time": "08-00", "task": "르브론 제임스는 일어나서 운동을 하고 있어요." },
      { "time": "09-00", "task": "르브론 제임스는 아침을 먹고 있어요." },
      { "time": "09-30", "task": "르브론 제임스는 수분 충전 중이에요." },
      { "time": "10-00", "task": "르브론 제임스는 클리블랜드 팀 연습 중이에요." },
      { "time": "01-00", "task": "르브론 제임스는 운동 후 찬물 목욕 중이에요." },
      { "time": "02-00", "task": "르브론 제임스는 마사지를 받고 있어요." },
      { "time": "03-00", "task": "르브론 제임스는 스트레칭 중이에요." },
      { "time": "03-30", "task": "르브론 제임스는 전기근육자극요법을 받고 있어요." },
      { "time": "04-00", "task": "르브론 제임스는 재충전을 위해 낮잠을 자고 있어요." },
      { "time": "07-00", "task": "르브론 제임스는 특수기구로 스트레칭 중이에요." },
      { "time": "08-00", "task": "르브론 제임스는 마사지를 받고 있어요." },
      { "time": "08-30", "task": "르브론 제임스는 크라이오테라피를 받고 있어요." },
      { "time": "09-00", "task": "르브론 제임스는 저녁을 먹고 있어요." },
      { "time": "11-00", "task": "르브론 제임스는 내일의 연습을 위해 자고 있어요." }
    ]
  },
  {
    "name": "힐러리 클린턴",
    "description": "힐러리 클린턴은 13년 연속으로 미국인이 가장 존경하는 여성 1위를 차지할 정도로 영향력 있는 정치인이에요. 그는 변호사, 법률가, 퍼스트레이디, 상원의원, 그리고 미국 국무장관까지의 길을 걸어오며 부지런하게 살아왔답니다. 힐러리 클린턴의 삶을 살아보세요!",
    "img_one": "https://en.wikipedia.org/wiki/Hillary_Clinton#/media/File:Hillary_Clinton_official_Secretary_of_State_portrait_crop.jpg",
    "img_two": "http://thehill.com/sites/default/files/styles/thumb_small_article/public/hillaryclinton_11132017.jpg?itok=LxG19BtQ",
    "schedule": [
      { "time": "05-00", "task": "힐러리 클린턴은 일어나서 독서를 하고 있어요." },
      { "time": "06-00", "task": "힐러리 클린턴은 독서를 마치고 요가를 하고 나갈 준비를 하고 있어요." },
      { "time": "08-30", "task": "힐러리 클린턴은 회의 중이에요." },
      { "time": "09-00", "task": "힐러리 클린턴은 아침식사 중이에요." },
      { "time": "09-30", "task": "힐러리 클린턴은 브리핑을 받고 있어요." },
      { "time": "11-05", "task": "힐러리 클린턴은 백악관에 있어요." },
      { "time": "12-10", "task": "힐러리 클린턴은 외교관 행사에 참석 중이에요." },
      { "time": "01-00", "task": "힐러리 클린턴은 점심식사 중이에요." },
      { "time": "02-15", "task": "힐러리 클린턴은 외교 전략에 대해 회의하고 있어요." },
      { "time": "03-00", "task": "힐러리 클린턴은 사람들과 미팅 중이에요." },
      { "time": "07-30", "task": "힐러리 클린턴은 정책 관련 저녁 행사에 참석 중이에요." },
      { "time": "12-00", "task": "힐러리 클린턴도 잘 시간이에요! 하지만 바쁘면 밤새서 일을 할 때도 있답니다." }
    ]
  },
  {
    "name": "루트비히 판 베토벤",
    "description": "베토벤은 유명한 독일의 서양 고전 음악 작곡가였고, 약 200년이 지난 지금까지도 존경받고 있는 작곡가에요. 그의 유명한 작품 중에는 교향곡 5번, 6번, 9번과 비창 소나타, 월광 소나타 등이 있어요. 베토벤의 200년 전 삶을 살아보세요!",
    "img_one": "https://en.wikipedia.org/wiki/Ludwig_van_Beethoven#/media/File:Beethoven.jpg",
    "img_two": "https://fthmb.tqn.com/mPf-JK6T0hqMFCAo2zmVUoVychE=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/2629441-56a153a33df78cf77269aaa0.jpg",
    "schedule": [
      { "time": "06-30", "task": "베토벤이 아침을 먹은 시간이에요." },
      { "time": "07-00", "task": "베토벤은 아침부터 작곡을 했답니다." },
      { "time": "02-30", "task": "베토벤은 와인과 함께 식사를 한 시간이에요." },
      { "time": "03-30", "task": "베토벤은 생각을 하기 위해 긴 산책을 했어요." },
      { "time": "05-30", "task": "베토벤은 신문을 읽기 위에 선술집에 들리곤 했어요." },
      { "time": "09-00", "task": "베토벤은 맥주와 함께 간단한 저녁식사를 했어요." },
      { "time": "10-00", "task": "베토벤이 매일 잠에 든 시간이에요." }
    ]
  }
]
*/