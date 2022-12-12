<template>
  <div class="weather-search">
    <div class="weather-search_search-autocomplete-wrap">
      <label>
        <input
          class="weather-search_search-input"
          type="text"
          v-model="searchValue"
        >
      </label>
      <ul
        class="weather-search_autocomplete"
        v-if="isAutocompleteShown"
      >
        <li
          v-for="(item, index) in currentSearchCities"
          v-text="item.name"
          :key="index"
          @click="choseCity(item)"
        ></li>
      </ul>
    </div>
    <card-button
      :button-text="'Search'"
    ></card-button>
  </div>
</template>

<script>
  const citiesData = require('./cities.json');
  import CardButton from "@/components/CardButton/CardButton";

  export default {
    name: "AutocompleteSearch",
    components: {
      CardButton,
    },
    data() {
      return {
        searchValue: '',
        cities: citiesData,
        chosenCity: '',
        currentSearchCities: '',
        isCityChosen: false
      }
    },
    computed: {
      isAutocompleteShown() {
        return this.searchValue.length > 0 && this.currentSearchCities.length > 0;
      }
    },
    watch: {
      async searchValue(newVal) {
        if (!this.isCityChosen) {
          this.currentSearchCities = await this.searchCities(newVal);
        } else {
          this.isCityChosen = false;
        }
      }
    },
    methods: {
      choseCity(cityData) {
        this.chosenCity = {
          name: cityData.name,
          coords: cityData.coord,
        };

        this.searchValue = cityData.name;
        this.currentSearchCities.length = 0;
        this.isCityChosen = true;

      },
      async searchCities(name) {
        return this.cities.filter((item) => {
          return item.name.toLowerCase().indexOf(name.toLowerCase()) !== -1;
        })
      }
    },
  }
</script>

<style scoped>
  .weather-search {
    display: flex;
  }

  .weather-search_search-autocomplete-wrap {
    position: relative;
    width: 60%;
  }

  .weather-search_search-input {
    display: block;
    width: 100%;
    height: 100%;
    border: 1px solid #c4c4c4;
    box-sizing: border-box;
    outline: none;
    font-weight: 300;
    color: #c4c4c4;
    font-size: 2.3vw;
    padding-left: 3px;
  }

  .weather-search_autocomplete {
    position: absolute;
    width: 100%;
    top: 100%;
    max-height: 300px;
    overflow-y: scroll;
    border: 1px solid #c4c4c4;
    border-top: unset;
    list-style: none;
    background: #ffffff;
  }

  .weather-search_autocomplete li {
    padding-left: 3px;
    text-align: left;
  }

  .card-button {
    box-sizing: border-box;
    width: 100px;
    border-left: unset;
  }
</style>
