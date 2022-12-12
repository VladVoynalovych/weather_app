import { setupWeather } from "@/services/weatherSetup.service";

const state = () => ({
  weather: [],
})

// getters
const getters = {
  getWeatherContent(state) {
    return state.weather;
  }
}

// actions
const actions = {
  async uploadWeatherContent({ commit }, payload) {
    const weather = await setupWeather(payload);
    commit('addWeatherContent', weather);
  }
}

// mutations
const mutations = {
  addWeatherContent(state, payload) {
    state.weather.push(payload);
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
