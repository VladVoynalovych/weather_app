import { uploadWeather } from './http/weatherUpload.service'

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
    weatherList: weatherListByDays
  }

  return weather;
}

function splitWeatherByDate(weatherList) {
  let weatherListByDate = [];
  let currentDay = new Date(Date.now()).getDate();

  let dailyWeatherList = [];

  weatherList.forEach((item) => {
    if (currentDay === new Date(item.date).getDate()) {
      dailyWeatherList.push(item)
    } else {
      currentDay = new Date(item.date).getDate();
      weatherListByDate.push(dailyWeatherList);

      dailyWeatherList = [];
      dailyWeatherList.push(item)
    }
  });

  return weatherListByDate;
}
