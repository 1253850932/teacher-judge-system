// @ts-nocheck
import request from '@/utils/system/request'
/**
 * 添加权限
 * @param {String} permissionApi
 * @param {String} permissionName
 * @param {String} permissionType
 * @returns
 */
export const addPermission = ({ permissionApi, permissionName, permissionType }) => {
    return request('/permission/addPermission', 'post', {
        permissionApi,
        permissionName,
        permissionType
    })
}
/**
 * 禁用权限
 * @param {String} id
 * @returns
 */
export const disablePermission = id => {
    return request(`/permission/disablePermission/${id}`, 'put')
}
/**
 * 启用权限
 * @param {String} id
 * @returns
 */
export const enablePermission = id => {
    return request(`/permission/enablePermission/${id}`, 'put')
}
/**
 * 删除权限
 * @param {String} id
 * @returns
 */
export const deletePermission = id => {
    return request(`/permission/deletePermission/${id}`, 'DELETE')
}
/**
 * 获取所有有效权限
 * @returns
 */
export const getAllValidPermissions = () => {
    return request('/permission/getAllValidPermissions', 'get')
}
/**
 * 分页获取权限
 * @param {String} currentPage
 * @param {String} pageSize
 * @param {String} keyword
 * @returns
 */
export const getPagePermission = ({ currentPage, pageSize, keyword }) => {
    return request(`/permission/getPagePermission?currentPage=${currentPage}&pageSize=${pageSize}&keyword=${keyword}`, 'get')
}
/**
 * 根据id获取权限
 * @param {String} id
 * @returns
 */
export const getPermissionById = id => {
    return request(`/permission/getPermissionById/${id}`, 'get')
}
/**
 * 根据角色id获取对应的所有有效权限
 * @param {String} id
 * @returns
 */
export const getAllValidPermissionByRoleId = id => {
    return request(`/permission/getAllValidPermissionByRoleId/${id}`, 'get')
}
