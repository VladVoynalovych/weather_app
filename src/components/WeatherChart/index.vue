<template>
  <section class="weather-chart">
    <canvas class="weather-chart_canvas" :id="id"></canvas>
  </section>
</template>

<script>
  /* eslint-disable */

  import Chart from "chart.js/auto";

  export default {
    name: "WeatherChart",
    props: {
      type: {
        type: String,
        default: '',
      },
      labels: {
        type: Array,
        default: () => ['a', 'b'],
      },
      chartData: {
        type: Array,
        default: () => [10, 10],
      },
      fill: {
        type: Boolean,
        default: false,
      },
      borderColor: {
        type: String,
        default: 'rgb(75, 192, 192)',
      },
      tension: {
        type: Number,
        default: 0.1
      },
      id: {
        type: String,
        default: 'chart'
      }
    },
    data() {
      return {
      }
    },
    mounted() {
      const ctx = document.getElementById(`${this.id}`).getContext('2d');

      const myChart = new Chart(ctx, {
        type: this.type,
        data: {
          labels: this.labels,
          datasets: [{
            label: 'Weather',
            data: this.chartData,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: false
            }
          }
        }
      });
    }
  }
</script>

<style scoped>
  .weather-chart {
    margin: 10px auto;
    width: 65%;
    height: max-content;
  }

  .weather-chart_canvas {
    width: 100%;
    min-width: 320px;
    min-height: 300px;
  }
</style>
