const state = () => ({
  favouritesWeather: [],
})

// getters
const getters = {
  getFavouritesContent(state) {
    return state.favouritesWeather;
  },
  getFavouritesContentLength(state) {
    return state.favouritesWeather.length;
  }
}

// actions
const actions = {
  uploadWeatherContent({ commit }, payload) {
    console.log(commit, payload)
  },
  addNewFavourite({ commit }, payload) {
    commit('addFavouritesContent', payload)
  },
  deleteFavouritesCity({ commit }, payload) {
    commit('deleteCity', payload);
  },
}

// mutations
const mutations = {
  addFavouritesContent(state, payload) {
    state.favouritesWeather.push(payload);
  },
  setFavouritesContent(state, payload) {
    state.favouritesWeather = payload;
  },
  deleteCity(state, payload) {
    state.favouritesWeather.splice(payload, 1)
  }
}

const favouritesModule = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

export default favouritesModule;
