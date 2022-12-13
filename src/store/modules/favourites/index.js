const state = () => ({
  favouritesWeather: [],
})

// getters
const getters = {
  getFavouritesContent(state) {
    return state.favouritesWeather;
  }
}

// actions
const actions = {
  uploadWeatherContent({ commit }, payload) {
    console.log(commit, payload)
  },
  addNewFavourite({ commit }, payload) {
    commit('addFavouritesContent', payload)
  }
}

// mutations
const mutations = {
  addFavouritesContent(state, payload) {
    state.favouritesWeather.push(payload);
  },
  setFavouritesContent(state, payload) {
    state.favouritesWeather = payload;
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
