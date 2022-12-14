<template>
  <div class="favourite-city-card">
    <h1 class="city-card__city-name">{{cityCard.cityName}}</h1>
    <section class="weather-type-buttons-wrapper">
      <card-button
        :class="['weather-button', 'weather-button_daily', { 'card-button_active': !isWeeklyWeatherShow }]"
        :button-text="'Daily'"
        @click.native="isWeeklyWeatherShow = false"
      ></card-button>

      <card-button
        :class="['weather-button', 'weather-button_weekly', { 'card-button_active': isWeeklyWeatherShow }]"
        :button-text="'Weekly'"
        @click.native="isWeeklyWeatherShow = true"
      ></card-button>
    </section>
    <section
      class="weather-cards-wrapper"
      v-show="cityCard.weatherList"
    >
      <weather-card
        v-for="(weatherItem, weatherIndex) in weatherList"
        :key="weatherIndex"
        :date="getFormattedDate(weatherItem[0].date)"
        :temperature="String(weatherItem[0].temperature)"
        :feels-like="String(weatherItem[0].feelsLike)"
        :weather-icon="weatherItem[0].icon"
        :humidity="String(weatherItem[0].humidity)"
        :wind="String(weatherItem[0].windSpeed)"
      ></weather-card>
    </section>
    <weather-chart
      :labels="getDateList(cityCard.weatherList[0])"
      :chart-data="getWeatherList(cityCard.weatherList[0])"
      :type="'line'"
      :id="`${cityCard.cityName}Chart`"
    ></weather-chart>
    <section class="activity-buttons-wrapper">
      <card-button
        :class="['weather-button', 'weather-button_delete']"
        :button-text="'Delete'"
        @click.native="deleteCity"
      ></card-button>
    </section>
  </div>

</template>

<script>
  import moment from "moment";
  import WeatherCard from "@/components/WeatherCard";
  import WeatherChart from "@/components/WeatherChart";
  import CardButton from "@/components/CardButton";

  import { mapActions } from "vuex";

  export default {
    name: "FavouriteCityCard",
    props: {
      cityCard: {
        type: Object,
        default: () => {},
        subtype: {
          cityName: {
            type: String,
            default: 'City Name'
          },
          weatherList: {
            type: Array,
            default: () => [],
          }
        }
      },
      index: {
        type: Number,
        default: 0,
      }
    },
    computed: {
      dailyWeather() {
        return this.cityCard.weatherList[0][0];
      },
      weatherList() {
        if (this.isWeeklyWeatherShow) {
          return this.cityCard.weatherList;
        } else {
          let weatherList = JSON.stringify(this.cityCard.weatherList);
          weatherList = JSON.parse(weatherList);
          weatherList.length = 1;
          return weatherList
        }
      }
    },
    data() {
      return {
        isWeeklyWeatherShow: false,
        isModalOpened: false,
      }
    },
    components: {
      WeatherCard,
      WeatherChart,
      CardButton,
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
      },

      ...mapActions('favouritesModule', ['deleteFavouritesCity']),


      deleteCity() {
        this.deleteFavouritesCity(this.id);
      }
    }
  }
</script>

<style scoped>
  .favourite-city-card {
    width: 80%;
    min-height: 300px;
    height: max-content;
    box-shadow: 0 0 10px rgba(0, 121, 183, .3);
    margin-bottom: 10px;
  }

  .weather-card {
    margin-right: 15px;
  }

  .weather-type-buttons-wrapper {
    margin-left: 26px;
    display: flex;
    width: fit-content;
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

  .weather-button_daily,
  .weather-button_favourites,
  .weather-button_delete {
    margin-right: 10px;
  }

  .city-card__city-name {
    padding-top: 10px;
    font-size: 20px;
  }

  .activity-buttons-wrapper {
    display: flex;
    width: max-content;
    margin-left: auto;
    margin-bottom: 10px;
  }
</style>
