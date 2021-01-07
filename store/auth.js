const state = () => ({
    user: {}
})

const mutations = {
    SET_USER(state, payload) {
        state.user = payload
    }
}

const actions = {
    setUser({ commit }, user) {
        commit('SET_USER', user)
    }
}

const getters = {
    getUser(state) {
        return state.user
    }
}

export default {
  state,
  mutations,
  actions,
  getters,
}