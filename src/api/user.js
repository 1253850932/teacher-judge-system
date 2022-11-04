// @ts-nocheck
import request from '@/utils/system/request'
const Bearer = 'Bearer '

/**
 * 账号密码登录
 * @param {String} username  账号
 * @param {String} password 密码
 * @param {String} code 验证码
 * @param {String} key 验证码key
 * @returns promise
 */
export const userAccountLogin = ({ username, password, code, key }) => {
    return request(`/login?code=${code}&key=${key}&username=${username}&password=${password}`, 'post')
}

/**
 * 获取验证码
 * @param {String} key 验证码key
 * @returns promise
 */
export const getCaptcha = key => {
    return request(`/common/captcha?captchaKey=${key === '' ? '' : key}`, 'get')
}
export const getUserInfo = () => {}

// 获取用户信息Api
export function getInfoApi(data) {
    return request({
        url: '/user/info',
        method: 'post',
        baseURL: '/mock',
        data
    })
}

// 退出登录Api
export function loginOutApi() {
    return request({
        url: '/user/out',
        method: 'post',
        baseURL: '/mock'
    })
}

// 获取用户信息Api
export function passwordChange(data) {
    return request({
        url: '/user/passwordChange',
        method: 'post',
        baseURL: '/mock',
        data
    })
}
