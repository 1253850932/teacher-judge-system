// @ts-nocheck

const state = () => ({
    info: {},
    users: {}
})

// getters
const getters = {}

// mutations
const mutations = {
    PageUserChange(state, users) {
        state.users = users
    },
    DeleteUser(state, user) {
        let users = state.users.filter(item => item.id === user)
        state.users = users
    },
    AddUser(state, user) {
        state.users.splice(-1, 0, user)
    }
}

// actions
const actions = {
    // 分页获取用户
    getPageUser({ commit }, users) {
        commit('PageUserChange', users)
    },
    // 删除用户
    delUser({ commit }, user) {
        commit('DeleteUser', user)
    },
    // 增加用户
    addUser({ commit }, user) {
        commit('AddUser', user)
    }
}

export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
}
