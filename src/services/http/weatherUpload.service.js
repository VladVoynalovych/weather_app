import axios from 'axios';


export async function uploadWeather(coords) {
  const UNITS = 'metric';
  const API_ID = 'ea626a7713e410f9bc2d2e1445bfbf3e';
  let REQUEST_URL = `http://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&appid=${API_ID}&units=${UNITS}`;

  const reqResult = await axios.get(REQUEST_URL);
  return reqResult;
}
