// @ts-nocheck
import request from '@/utils/system/request'
/**
 * 添加用户
 * @param {JSON} BODYraw
 * @returns
 */
export const addUser = ({ username, password, phone, email, gender, roleId, address, description, collegeId, professionalId }) => {
    return request('/user/addUser', 'post', { username, password, phone, email, gender, roleId, address, description, collegeId, professionalId })
}
/**
 * 分页获取用户
 * @param {Number} currentPage 当前页面
 * @param {Number} pageSize 页面大小
 * @param {String} keyword 密码
 * @returns
 */
export const getPageUser = ({ currentPage, pageSize, keyword }) => {
    return request(`/user/getPageUser?currentPage=${currentPage}&pageSize=${pageSize}&keyword=${keyword}`, 'get')
}
/**
 * 根据id获取用户
 * @param {Number} id 用户ID
 * @returns
 */
export const getUserById = id => {
    return request(`/user/getUserById/${id}`, 'get')
}
/**
 * 修改用户
 * @param {}
 * @returns
 */
export const editUser = ({ id, username, phone, email, gender, address, description, collegeId, professionalId, roleId }) => {
    return request('/user/editUser', 'put', {
        id,
        username,
        phone,
        email,
        gender,
        address,
        description,
        collegeId,
        professionalId,
        roleId
    })
}
/**
 * 启用用户
 * @param {}
 * @returns
 */
export const enableUser = id => {
    return request(`/user/enableUser/${id}`, 'put')
}
// /**
//  * 禁用用户
//  * @param {}
//  * @returns
//  */
// export const getPageUser = () => {
//     return request('/user/disableUser/1587251477842329602', 'put')
// }
/**
 * 删除用户
 * @param {Number} id 用户ID
 * @returns
 */
export const deleteUser = id => {
    return request(`/user/deleteUser/${id}`, 'DELETE')
}
