<template>
  <div class="city-card">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "CityCard"
  }
</script>

<style scoped>
  .city-card {
    width: 80%;
    min-height: 300px;
    height: max-content;
    box-shadow: 0 0 10px rgba(0, 121, 183, .3);
  }
</style>
