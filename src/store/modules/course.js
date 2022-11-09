const state = () => ({
    course: {}
})

// mutations
const mutations = {
    GetAllCourse(state, data) {
        state.course = data
    },
    DeleteCourse(state, index) {
        state.course.splice(index, 1)
    },
    AddCollege(state, course) {
        state.course.push(course)
    }
}

const getters = {}

// actions
const actions = {
    getAllCourse({ commit }, data) {
        commit('GetAllCourse', data)
    },
    deleteCourse({ commit }, index) {
        commit('DeleteCourse', index)
    },
    addCollege({ commit }, course) {
        commit('AddCollege', course)
    },
    editCollege({ commit }, course) {
        commit('AddCollege', course)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
