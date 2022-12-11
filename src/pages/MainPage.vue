<template>
  <div class="main-page">
    <CityCard></CityCard>
  </div>
</template>

<script>
  import CityCard from "@/components/CityCard/CityCard";

  export default {
    name: "MainPage",
    components: {
      CityCard,
    }
  }
</script>

<style scoped>
  .main-page {
    display: flex;
    justify-content: center;
  }
</style>
