<template>
  <div class="root">
    <nav>
      <img :src="logo" alt="" class="logo">
      <section class="row">
        <section class="buttons-wrapper">
          <CardButton
            :class="['main', { active: this.currentNavigation === 'Main' }]"
            :button-text="'Main'"
            @click.native="goTo('/')"
          ></CardButton>

          <CardButton
            :class="['favourites', { active: this.currentNavigation === 'Favourites' }]"
            :button-text="'Favourites'"
            @click.native="goTo('/favourites')"
          ></CardButton>
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
import CardButton from "@/components/CardButton/CardButton"
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
    justify-content: space-between;
    height: 100%;
    width: 100%;
  }

  .buttons-wrapper {
    display: flex;
    align-items: center;
    width: 50%;
    height: 35px;
    margin-top: 10px;
  }

  .buttons-wrapper .card-button {
    margin-right: 10px;
  }
</style>
