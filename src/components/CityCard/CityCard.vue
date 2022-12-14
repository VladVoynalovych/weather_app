<template>
  <div class="city-card">
    <h1 class="city-name">{{cityCard.cityName}}</h1>
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
      v-show="cityCard.weatherList"
    >
      <weather-card
        v-show="isWeeklyWeatherShow"
        v-for="(weatherItem, weatherIndex) in cityCard.weatherList"
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
      :labels="getDateList(cityCard.weatherList[0])"
      :chart-data="getWeatherList(cityCard.weatherList[0])"
      :type="'line'"
      :id="`${cityCard.cityName}Chart`"
    ></weather-chart>
    <section class="activity-buttons-wrapper">
      <card-button
        :class="['weather-button', 'weather-button_favourites']"
        :button-text="'Add to favourites'"
        @click.native="checkConfirmation"
      ></card-button>

      <card-button
        :class="['weather-button', 'weather-button_delete']"
        :button-text="'Delete'"
        @click.native="deleteCity"
      ></card-button>
    </section>

    <confirm-modal
      @confirmStatus="addFavourite"
      :opened.sync="isModalOpened"
      :confirm-title="'Add favourite confirmation'"
      :confirm-text="'Are you sure you want to add to favourites?'"
    ></confirm-modal>

    <info-modal
      :opened.sync="infoModalOpened"
      :info-title="'Warning'"
      :info-text="'You can`t add new card to favourites, max amount 5 cards'"
    ></info-modal>
  </div>
</template>

<script>
  /* eslint-disable */

  import moment from "moment";
  import WeatherCard from "@/components/WeatherCard/WeatherCard";
  import WeatherChart from "@/components/WeatherChart";
  import CardButton from "@/components/CardButton/CardButton";
  import ConfirmModal from "@/components/ConfirmModal";
  import InfoModal from "@/components/InfoModal";

  import { mapActions, mapGetters } from "vuex";

  export default {
    name: "CityCard",
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
      ...mapGetters('favouritesModule', ['getFavouritesContent', 'getFavouritesContentLength'])
    },
    data() {
      return {
        isWeeklyWeatherShow: false,
        isModalOpened: false,
        infoModalOpened: false,
      }
    },
    components: {
      WeatherCard,
      WeatherChart,
      CardButton,
      ConfirmModal,
      InfoModal,
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

      ...mapActions('favouritesModule', ['addNewFavourite']),
      ...mapActions('weatherModule', ['addToFavourite', 'deleteWeatherCity']),
      isPresentInFavourites() {
        return this.getFavouritesContent.findIndex(( item ) => {
          return item.cityName === this.cityCard.cityName
        }) !== -1;
      },
      checkConfirmation() {
        if (!this.isPresentInFavourites()) {
          if (this.checkFavouritesCount()) {
            this.infoModalOpened = true
          } else {
            this.isModalOpened = true;
          }
        }
      },
      checkFavouritesCount(maxItems = 5) {
        return Number(this.getFavouritesContentLength) === maxItems;
      },
      addFavourite(confirmStatus) {
        if (confirmStatus) {
          this.addToFavourite(this.index);
          this.addNewFavourite(this.cityCard);
        }
      },
      deleteCity() {
        this.deleteWeatherCity(this.index);
        this.getFavouritesContent.findIndex()
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

  .city-name {
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
