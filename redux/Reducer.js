// 1. 필요한 것을 import

// 2. Action을 정의
// 로그인여부를 껏다 켯다 하는 액션을 만들어야 한다.
// 이것은 나중에 Switch문에서 사용할 변수들이다.
const TOGGLE_LOGIN = 'TOGGLE_LOGIN';

// 3. 정의한 Action에 대한 Action Creator를 정의
function toggleLogin() {
  return {
    type: TOGGLE_LOGIN
  };
}

function toggleLogin() {
  return {
    type: TOGGLE_LOGIN
  };
}


// 4. Reducer 정의
// Action을 보낼 때 마다 Redux는 자동으로 reducer를 실행한다. (Action을 Reducer로)
// 먼저 initial state를 만든다.
const TIME_DURATION = 1500;
const initialState = {
  isLogin: false,
}

// 위에서 생성한 초기 state로 시작하기 위해 아래와 같아 입력
function reducer(state = initialState, action) {
  switch (action.type) { // 받은 Action의 type을 기준으로 전부 다른 작업을 한다.
    case START_TIMER:
      return applyStartTimer(state); // 여기서 state는 현재 state이다.
    default:
      return state;
  }
}