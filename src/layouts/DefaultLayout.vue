<template>
  <div class="root">
    <nav>
      <img :src="logo" alt="" class="logo">
      <section class="row">
        <section class="buttons-wrapper">
          <card-button
            :class="['main', { 'card-button_active': this.currentNavigation === 'Main' }]"
            :button-text="'Main'"
            @click.native="goTo('/')"
          ></card-button>

          <card-button
            :class="['favourites', { 'card-button_active': this.currentNavigation === 'Favourites' }]"
            :button-text="'Favourites'"
            @click.native="goTo('/favourites')"
          ></card-button>
        </section>
        <weather-search></weather-search>
      </section>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
// media
import logo from '@/assets/logo.svg';
// media

// components
import CardButton from "@/components/CardButton"
import WeatherSearch from "@/components/WeatherSearch";
// components

export default {
  name: 'DefaultLayout',
  components: {
    CardButton,
    WeatherSearch,
  },
  data() {
    return {
      logo
    }
  },
  methods: {
    goTo(location) {
      this.$router.push(location).catch(() => {});
    }
  },
  computed: {
    currentNavigation() {
      return this.$route.name;
    }
  }
}
</script>
<style scoped>
  .row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    margin-top: 10px;
  }

  .buttons-wrapper {
    display: flex;
    align-items: center;
    width: auto;
    height: 35px;
  }

  .buttons-wrapper .card-button.main {
    margin-right: 10px;
  }

  @media screen and (max-width: 530px) {
    .buttons-wrapper {
      margin-bottom: 10px;
    }

    .row {
      flex-direction: column;
      justify-content: center;
    }
  }
</style>
