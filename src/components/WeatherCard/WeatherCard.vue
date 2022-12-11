<template>
  <div
    class="weather-card"
  >
    <p class="date" v-text="date"></p>
    <p class="month" v-text="month"></p>
    <img class="weather-icon" alt="Weather Icon" :src="iconSettings[weatherIcon]">
    <p class="temperature">{{minTemperature}} °C ... {{maxTemperature}} °C</p>
  </div>
</template>

<script>
import dayIcon1 from './media/images/01d.png'
import dayIcon2 from './media/images/02d.png'
import dayIcon3 from './media/images/03d.png'
import dayIcon4 from './media/images/04d.png'
import dayIcon5 from './media/images/09d.png'
import dayIcon6 from './media/images/10d.png'
import dayIcon7 from './media/images/11d.png'
import dayIcon8 from './media/images/13d.png'
import dayIcon9 from './media/images/50d.png'

import nightIcon1 from './media/images/01n.png'
import nightIcon2 from './media/images/02n.png'
import nightIcon6 from './media/images/10n.png'

import { iconNames } from './iconNames';

export default {
  name: "WeatherCard",
  props: {
    date: {
      type: String,
      default: "Date",
    },
    month: {
      type: String,
      default: "Month",
    },
    weatherIcon: {
      type: String,
      validator: (value) => iconNames.includes(value),
      default: "03d",
    },
    minTemperature: {
      type: String,
      default: "10",
    },
    maxTemperature: {
      type: String,
      default: "10",
    },
  },
  data() {
    return {
      iconSettings: {
        '01d': dayIcon1,
        '02d': dayIcon2,
        '03d': dayIcon3,
        '04d': dayIcon4,
        '09d': dayIcon5,
        '10d': dayIcon6,
        '11d': dayIcon7,
        '13d': dayIcon8,
        '50d': dayIcon9,

        '01n': nightIcon1,
        '02n': nightIcon2,
        '03n': dayIcon3,
        '04n': dayIcon4,
        '09n': dayIcon5,
        '10n': nightIcon6,
        '11n': dayIcon7,
        '13n': dayIcon8,
        '50n': dayIcon9,
      }
    }
  }
}
</script>

<style scoped>
  .weather-card {
    width: 15%;
    min-height: 120px;
    padding: 8px 5px;
    text-align: center;
    border: 1px solid #c4c4c4;
  }

  .weather-card.active {
    border: 1px solid #0079b7;
  }

  .date {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.375;
    color: #2b2b2b;
  }

  .month {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.416;
    color: #525252;
    margin-bottom: 5px;
  }

  .weather-icon {
    display: block;
    width: 50px;
    height: 50px;
    margin: 0 auto 5px auto;
  }

  .temperature {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.187;
    color: #2b2b2b;
  }
</style>
