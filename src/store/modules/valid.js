const state = () => ({
    valid: {}
})

// mutations
const mutations = {
    GetValid(state, valid) {
        state.valid = valid
    },
    DeleteValid(state, valid) {
        state.valid.splice(valid, 1)
    },
    StartValid(state, id) {
        state.valid[id].valid = false
    },
    StopValid(state, id) {
        state.valid[id].valid = true
    }
}

const getters = {}

// actions
const actions = {
    // 获取权限
    getValid({ commit }, valid) {
        commit('GetValid', valid)
    },
    // 删除权限
    deleteValid({ commit }, index) {
        commit('DeleteValid', index)
    },
    // 启用权限
    startValid({ commit }, id) {
        commit('StartValid', id)
    },
    // 禁用权限
    stopValid({ commit }, id) {
        commit('StopValid', id)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
