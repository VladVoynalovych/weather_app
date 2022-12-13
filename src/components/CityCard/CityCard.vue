<template>
  <div class="city-card">
    <h1 class="city-name">{{cityName}}</h1>
    <section class="weather-type-buttons-wrapper">
      <card-button
        :class="['weather-button', 'weather-button_daily', { active: !isWeeklyWeatherShow }]"
        :button-text="'Daily'"
        @click.native="isWeeklyWeatherShow = false"
      ></card-button>

      <card-button
        :class="['weather-button', 'weather-button_weekly', { active: isWeeklyWeatherShow }]"
        :button-text="'Weekly'"
        @click.native="isWeeklyWeatherShow = true"
      ></card-button>
    </section>
    <section
      class="weather-cards-wrapper"
      v-show="weatherList"
    >
      <weather-card
        v-show="isWeeklyWeatherShow"
        v-for="(weatherItem, weatherIndex) in weatherList"
        :key="weatherIndex"
        :date="getFormattedDate(weatherItem[0].date)"
        :temperature="String(weatherItem[0].temperature)"
        :feels-like="String(weatherItem[0].feelsLike)"
        :weather-icon="weatherItem[0].icon"
        :humidity="String(weatherItem[0].humidity)"
        :wind="String(weatherItem[0].windSpeed)"
      ></weather-card>

      <weather-card
        v-show="!isWeeklyWeatherShow"
        :date="getFormattedDate(dailyWeather.date)"
        :temperature="String(dailyWeather.temperature)"
        :feels-like="String(dailyWeather.feelsLike)"
        :weather-icon="dailyWeather.icon"
        :humidity="String(dailyWeather.humidity)"
        :wind="String(dailyWeather.windSpeed)"
      ></weather-card>
    </section>
    <weather-chart
      :labels="getDateList(weatherList[0])"
      :chart-data="getWeatherList(weatherList[0])"
      :type="'line'"
    ></weather-chart>
    <section class="activity-buttons-wrapper">
      <card-button
        :class="['weather-button', 'weather-button_favourites']"
        :button-text="'Add to favourites'"
      ></card-button>

      <card-button
        :class="['weather-button', 'weather-button_delete']"
        :button-text="'Delete'"
      ></card-button>
    </section>

    <confirm-modal></confirm-modal>
  </div>
</template>

<script>
  /* eslint-disable */

  import moment from "moment";
  import WeatherCard from "@/components/WeatherCard/WeatherCard";
  import WeatherChart from "@/components/WeatherChart";
  import CardButton from "@/components/CardButton/CardButton";
  import ConfirmModal from "@/components/ConfirmModal";

  export default {
    name: "CityCard",
    props: {
      cityName: {
        type: String,
        default: 'City Name'
      },
      weatherList: {
        type: Array,
        default: () => [],
      }
    },
    computed: {
      dailyWeather() {
        return this.weatherList[0][0];
      }
    },
    data() {
      return {
        isWeeklyWeatherShow: false
      }
    },
    components: {
      WeatherCard,
      WeatherChart,
      CardButton,
      ConfirmModal,
    },
    methods: {
      getFormattedDate(date) {
        return moment(date).format('MMM Do YY');
      },
      getDateList(weatherList) {
        const dateList = weatherList.map((item) => {
          return moment(item.date).format('LT');
        });

        return dateList;
      },
      getWeatherList(weatherList) {
        const weather = weatherList.map((item) => {
          return item.temperature;
        });

        return weather;
      }
    }
  }
</script>

<style scoped>
  .city-card {
    width: 80%;
    min-height: 300px;
    height: max-content;
    box-shadow: 0 0 10px rgba(0, 121, 183, .3);
    margin-bottom: 10px;
  }

  .weather-card {
    margin-right: 5px;
  }

  .weather-type-buttons-wrapper {
    margin-left: 26px;
    display: flex;
    width: 30%;
    align-items: center;
    height: auto;
  }

  .weather-cards-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
    padding-top: 10px;
  }

  .weather-button {
    margin-right: 10px;
  }

  .city-name {
    padding-top: 10px;
    font-size: 2vw;
  }

  .activity-buttons-wrapper {
    display: flex;
    width: max-content;
    margin-left: auto;
    margin-bottom: 10px;
  }
</style>
