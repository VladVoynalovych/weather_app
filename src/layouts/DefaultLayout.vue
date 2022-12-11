<template>
  <nav>
    <img :src="logo" alt="" class="logo">
    <div class="buttons-wrapper">
      <CardButton class="main" :button-text="'Main'"></CardButton>
      <CardButton class="favourites" :button-text="'Favourites'"></CardButton>
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
