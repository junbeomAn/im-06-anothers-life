import { Permissions, Notifications } from 'expo';

const PUSH_ENDPOINT = 'https://exp.host/--/api/v2/push/send';

async function registerPushNotificationAsync() {
  let token = await Notifications.getExpoPushTokenAsync(); // 토큰생성

  let result = await
  Permissions.askAsync(Permissions.NOTIFICATIONS);
  if(Constants.lisDevice && result.status === 'granted'){
    console.log('Notification pemissions granted');         
  }

  return fetch(PUSH_ENDPOINT, {
    method: POST,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "to": token,
      "title": "모고?",
      "sound": "default",
      "body": "가자!",
    }),
  })
}

