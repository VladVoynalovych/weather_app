<template>
  <article class="favourites-page">
    <favourite-city-card
      v-for="(cityCard, cityIndex) in getFavouritesContent"
      :key="cityIndex"
      :index="cityIndex"
      :city-card="cityCard"
    >
    </favourite-city-card>
  </article>
</template>

<script>
  import FavouriteCityCard from "@/components/FavouriteCityCard";

  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: "FavouritesPage",
    components: {
      FavouriteCityCard,
    },
    computed: {
      ...mapGetters('favouritesModule', ['getFavouritesContent', 'getFavouritesContentLength'])
    },
    methods: {
      ...mapActions('favouritesModule', ['getFavouritesFromLocalStorage'])
    },
    mounted() {
      if (!this.getFavouritesContentLength) {
        this.getFavouritesFromLocalStorage()
      }
    }
  }
</script>

<style scoped>
  .favourites-page {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>
