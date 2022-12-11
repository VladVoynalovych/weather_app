<template>
  <div
    class="weather-card"
  >
    <p class="date"></p>
    <p class="month"></p>
    <img class="weather-icon" alt="Weather Icon">
    <p class="temperature"></p>
  </div>
</template>

<script>
export default {
  name: "weatherCard",
  props: {
    date: {
      type: String,
      default: "Date",
    },
    month: {
      type: String,
      default: "Month",
    },
    weatherIcon: {
      type: String,
      default: "",
    }
  }
}
</script>

<style scoped>

</style>