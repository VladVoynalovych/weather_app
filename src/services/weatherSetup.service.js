import { uploadWeather } from './http/weatherUpload.service'
import { v4 as uuidv4 } from 'uuid';
/* eslint-disable */

export async function setupWeather(coords) {
  const uploadedWeather = await uploadWeather(coords);

  const weatherList = uploadedWeather.data.list.map(( item ) => {
    return {
      date: item.dt * 1000,
      icon: item.weather[0].icon,
      temperature: Math.round(item.main.temp),
      feelsLike: Math.round(item.main.feels_like),
      humidity: item.main.humidity,
      windSpeed: item.wind.speed,
    }
  });

  const weatherListByDays = splitWeatherByDate(weatherList);

  const weather = {
    cityName: uploadedWeather.data.city.name,
    isFavourite: false,
    uuid: uuidv4(),
    weatherList: weatherListByDays
  }

  return weather;
}

function splitWeatherByDate(weatherList, daysCount = 5) {
  let weatherListByDate = [];
  let currentDay = new Date(Date.now()).getDate();

  let dailyWeatherList = [];
  let daysPassed = 0;

  weatherList.forEach((item, index) => {
    if (currentDay === new Date(item.date).getDate()) {
      dailyWeatherList.push(item)
      if (index === weatherList.length - 1 && daysPassed < daysCount) {
        weatherListByDate.push(dailyWeatherList);
      }
    } else {
      currentDay = new Date(item.date).getDate();
      if (daysPassed < daysCount && dailyWeatherList.length) {
        daysPassed++;
        weatherListByDate.push(dailyWeatherList);
      }

      dailyWeatherList = [];
      dailyWeatherList.push(item)
    }
  });

  return weatherListByDate;
}
