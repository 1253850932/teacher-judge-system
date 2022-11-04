// @ts-nocheck
import request from '@/utils/system/request'
/**
 * 添加角色
 * @param {JSON} BODYraw
 * @returns
 */
export const addRole = data => {
    return request('/role/addRole', 'post', data)
}
/**
 * 启用角色
 * @param {JSON} BODYraw
 * @returns
 */
export const enableRole = data => {
    return request('/role/enableRole', 'put')
}

/**
 * 禁用角色
 * @param {JSON} BODYraw
 * @returns
 */
export const disableRole = data => {
    return request('/role/disableRole', 'put', data)
}
/**
 * 分页获取角色
 * @param {JSON} BODYraw
 * @returns
 */
export const getPageRole = ({ currentPage, pageSize, keyword }) => {
    return request(`/role/getPageRole?currentPage=${currentPage}&pageSize=${pageSize}&keyword=${keyword}`, 'get')
}
/**
 * 根据id获取角色
 * @param {JSON} BODYraw
 * @returns
 */
export const getRoleById = data => {
    return request('/role/getRoleById', 'put')
}
