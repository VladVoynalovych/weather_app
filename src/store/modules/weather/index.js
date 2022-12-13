import { setupWeather } from "@/services/weatherSetup.service";

const state = () => ({
  weather: [],
})

// getters
const getters = {
  getWeatherContent(state) {
    return state.weather;
  },
  getWeatherContentLength(state) {
    return state.weather.length;
  }
}

// actions
const actions = {
  async uploadWeatherContent({ commit }, payload) {
    const weather = await setupWeather(payload);
    commit('addWeatherContent', weather);
  },
  addToFavourite({ commit }, payload) {
    commit('setFavourite', payload);
  },
  deleteWeatherCity({ commit }, payload) {
    commit('deleteCity', payload);
  }
}

// mutations
const mutations = {
  addWeatherContent(state, payload) {
    state.weather.push(payload);
  },
  setFavourite(state, payload) {
    state.weather[payload].isFavourite = true;
  },
  deleteCity(state, payload) {
    state.weather.splice(payload, 1)
  }
}

const weatherModule = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

export default weatherModule;
