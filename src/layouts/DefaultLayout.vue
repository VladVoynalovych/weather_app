<template>
  <nav>
    <img :src="logo" alt="" class="logo">
    <div class="buttons-wrapper">
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
    </div>
  </nav>
</template>

<script>
// media
import logo from '@/assets/logo.svg';
// media

// components
import CardButton from "@/components/CardButton/CardButton";
// components

export default {
  name: 'DefaultLayout',
  components: {
    CardButton,
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
