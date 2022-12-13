import axios from 'axios';

export async function getCurrentUserIp() {
  let REQUEST_URL = 'https://ipapi.co/json/';

  const reqResult = await axios.get(REQUEST_URL);
  return  reqResult;
}
