<template>
  <article class="main-page">
    <city-card
      v-for="(cityCard, cityIndex) in getWeatherContent"
      :key="cityIndex"
      :index="cityIndex"
      :city-card="cityCard"
    >
    </city-card>
  </article>
</template>

<script>
  import CityCard from "@/components/CityCard";

  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: "MainPage",
    components: {
      CityCard,
    },
    computed: {
      ...mapGetters('weatherModule', ['getWeatherContent', 'getWeatherContentLength'])
    },
    methods: {
      ...mapActions('weatherModule', ['getCityByIp'])
    },
    mounted() {
      if (!this.getWeatherContentLength) {
        this.getCityByIp()
      }
    }
  }
</script>

<style scoped>
  .main-page {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>
