// @ts-nocheck
import request from '@/utils/system/request'
/**
 * 禁用权限
 * @param {String} College
 * @returns
 */
export const disablePermission = () => {
    return request('/permission/disablePermission/1587258291740790786', 'put')
}
/**
 * 启用权限
 * @param {String} College
 * @returns
 */
export const enablePermission = () => {
    return request('/permission/enablePermission/1587258291740790786', 'put')
}
/**
 * 删除权限
 * @param {String} College
 * @returns
 */
export const deletePermission = () => {
    return request('/permission/deletePermission/1587258291740790786', 'del')
}
/**
 * 获取所有有效权限
 * @param {String} College
 * @returns
 */
export const deletePermission = () => {
    return request('/permission/getAllValidPermissions', 'get')
}
/**
 * 分页获取权限
 * @param {String} College
 * @returns
 */
export const getPagePermission = () => {
    return request(`/permission/getPagePermission?currentPage=1&pageSize=2&keyword=管理`, 'get')
}
/**
 * 根据id获取权限
 * @param {String} College
 * @returns
 */
export const getPermissionById = () => {
    return request(`/permission/getPermissionById/1587993075257544706`, 'get')
}
