const state = () => ({
    college: {},
    Professional: {}
})

// mutations
const mutations = {
    GetAllCollege(state, data) {
        state.college = data
    },
    GetAllProfessional(state, data) {
        state.Professional = data
    }
}

const getters = {}

// actions
const actions = {
    getAllCollege({ commit }, data) {
        commit('GetAllCollege', data)
    },
    GetAllProfessional({ commit }, data) {
        commit('GetAllProfessional', data)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
