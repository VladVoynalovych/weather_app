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
  import CityCard from "@/components/CityCard/CityCard";

  import { mapGetters } from 'vuex';

  export default {
    name: "MainPage",
    components: {
      CityCard,
    },
    computed: {
      ...mapGetters('weatherModule', ['getWeatherContent'])
    },
    methods: {

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
