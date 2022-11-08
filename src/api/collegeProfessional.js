// @ts-nocheck
import request from '@/utils/system/request'
/**
 * 添加学院
 * @param {String} collegeOrProfessional
 * @returns
 */
export const addCollege = collegeOrProfessional => {
    return request('/colleteProfessional/addCollege', 'post', collegeOrProfessional)
}
/**
 * 添加专业
 * @param {String} collegeOrProfessional
 * @param {String} parentId
 * @returns
 */
export const addProfessional = ({ collegeOrProfessional, parentId }) => {
    return request('/colleteProfessional/addProfessional', 'post', { collegeOrProfessional, parentId })
}
/**
 * 禁用专业
 * @param {String} id
 * @returns
 */
export const disableProfessional = id => {
    return request(`/colleteProfessional/disableProfessional/${id}`, 'put')
}

/**
 * 启用学院
 * @param {String} id
 * @returns
 */
export const enableCollege = () => {
    return request(`/colleteProfessional/enableCollege/${id}`, 'put')
}
/**
 * 启用专业
 * @param {String} id
 * @returns
 */
export const enableProfessional = () => {
    return request(`/colleteProfessional/enableProfessional/${id}`, 'put')
}
/**
 * 删除专业
 * @param {String} id
 * @returns
 */
export const deleteProfessional = id => {
    return request(`/colleteProfessional/deleteProfessional/${id}`, 'DELETE')
}
/**
 * 删除学院
 * @param {String} id
 * @returns
 */
export const deleteCollege = () => {
    return request(`/colleteProfessional/deleteCollege/${id}`, 'DELETE')
}
/**
 * 获取所有有效学院
 * @returns
 */
export const getAllValidCollege = () => {
    return request('/colleteProfessional/getAllValidCollege', 'get')
}
/**
 * 获取所有有效专业
 * @returns
 */
export const getAllValidProfessional = () => {
    return request('/colleteProfessional/getAllValidProfessional', 'get')
}
/**
 * 分页获取学院
 * @param {String} currentPage
 * @param {String} pageSize
 * @param {String} keyword
 * @returns
 */
export const getPageCollege = ({ currentPage, pageSize, keyword }) => {
    return request(`/colleteProfessional/getPageCollege?currentPage=${currentPage}&pageSize=${pageSize}&keyword=${keyword}`, 'get')
}
/**
 * 分页获取专业
 * @param {String} currentPage
 * @param {String} pageSize
 * @param {String} keyword
 * @returns
 */
export const getPageProfessional = ({ currentPage, pageSize, keyword }) => {
    return request(`/colleteProfessional/getPageProfessional?currentPage=${currentPage}&pageSize=${pageSize}&keyword=${keyword}`, 'get')
}

/**
 * 根据id获取学院
 * @param {String} id
 * @returns
 */
export const getCollegeById = id => {
    return request(`/colleteProfessional/deleteCollege/${id}`, 'get')
}
/**
 * 根据id获取专业
 * @param {String} id
 * @returns
 */
export const getProfessionalById = id => {
    return request(`/colleteProfessional/getProfessionalById/${id}`, 'get')
}
/**
 * 根据学院id获取包含的专业
 * @param {String} id
 * @returns
 */
export const getAllProfessionalByCollegeId = id => {
    return request(`/colleteProfessional/getAllProfessionalByCollegeId/${id}`, 'get')
}
