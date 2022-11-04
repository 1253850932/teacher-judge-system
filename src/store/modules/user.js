// @ts-nocheck
import { userAccountLogin, loginOutApi, getCaptcha } from '@/api/user'

const state = () => ({
    token: 'system',
    authorization: '',
    info: {}, // 用户信息
    // 验证码
    captcha: {
        captchaKey: '',
        captchaImg: ''
    }
})

// getters
const getters = {
    token(state) {
        return state.token
    }
}

// mutations
const mutations = {
    tokenChange(state, token) {
        state.token = token
    },
    infoChange(state, info) {
        state.info = info
    },
    captchaChange(state, captcha) {
        state.captcha = captcha
    },
    authorizationChange(state, authorization) {
        state.authorization = authorization
    }
}

// actions
const actions = {
    // 通过login.vue登录
    login({ commit, dispatch }, params) {
        return new Promise((resolve, reject) => {
            userAccountLogin(params).then(data => {
                console.log(data)
                commit('authorizationChange', data.headers.authorization)
                commit('infoChange', data.data.data)
                resolve(data.data)
            })
        })
    },
    // 获取验证码信息
    getCaptcha({ commit }) {
        return new Promise(() => {
            getCaptcha().then(data => {
                commit('captchaChange', data.data.data)
            })
        })
    },
    // 改变验证码
    changeCaptcha({ commit }, captcha) {
        return new Promise(() => {
            getCaptcha(captcha).then(data => {
                commit('captchaChange', data.data.data)
            })
        })
    },
    // 拿到Token
    async getToken({ commit }, token) {
        await commit('tokenChange', token)
    },

    // 用户点击退出，退出系统
    loginOut({ commit }) {
        loginOutApi()
            .then(res => {})
            .catch(error => {})
            .finally(() => {
                localStorage.removeItem('tabs')
                localStorage.removeItem('vuex')
                location.reload()
            })
    }
}

export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
}
