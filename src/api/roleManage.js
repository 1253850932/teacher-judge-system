// @ts-nocheck
import request from '@/utils/system/request'
/**
 * 添加角色
 * @param {string} roleName
 * @returns
 */
export const addRole = roleName => {
    return request('/role/addRole', 'post', roleName)
}
/**
 * 启用角色
 * @param {string} id 用户ID
 * @returns
 */
export const enableRole = id => {
    return request(`/role/enableRole/${id}`, 'put')
}

/**
 * 禁用角色
 * @param {string} id 用户ID
 * @returns
 */
export const disableRole = id => {
    return request(`/role/disableRole/${id}`, 'put')
}

/**
 * 删除角色
 * @param {string} id 用户ID
 * @returns
 */
export const deleteRole = id => {
    return request(`/role/deleteRole/${id}`, 'DELETE')
}
/**
 * 分页获取角色
 * @param {number} currentPage
 * @param {number} pageSize
 * @param {number} keyword
 * @returns
 */
export const getPageRole = ({ currentPage, pageSize, keyword }) => {
    return request(`/role/getPageRole?currentPage=${currentPage}&pageSize=${pageSize}&keyword=${keyword}`, 'get')
}
/**
 * 根据id获取角色
 * @param {string} id roleId
 * @returns
 */
export const getRoleById = id => {
    return request(`/role/getRoleById/${id}`, 'get')
}
/**
 * 获取所有有效角色
 * @returns
 */
export const getAllValidRole = id => {
    return request('/role/getAllValidRole', 'get')
}
