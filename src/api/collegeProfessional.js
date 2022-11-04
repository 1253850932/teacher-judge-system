// @ts-nocheck
import request from '@/utils/system/request'
/**
 * 添加学院
 * @param {String} College
 * @returns
 */
export const addCollege = College => {
    return request('/colleteProfessional/addCollege', 'post', College)
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
 * @param {String} collegeOrProfessional
 * @param {String} parentId
 * @returns
 */
export const disableProfessional = () => {
    return request('/colleteProfessional/disableProfessional/1586906568190959617', 'put')
}
/**
 * 禁用学院
 * @param {String} collegeOrProfessional
 * @param {String} parentId
 * @returns
 */
export const disableCollege = () => {
    return request('/colleteProfessional/disableCollege/1586906568190959617', 'put')
}
/**
 * 启用学院
 * @param {String} collegeOrProfessional
 * @param {String} parentId
 * @returns
 */
export const enableCollege = () => {
    return request('/colleteProfessional/enableCollege/1586906568190959617', 'put')
}
/**
 * 启用专业
 * @param {String} collegeOrProfessional
 * @param {String} parentId
 * @returns
 */
export const enableProfessional = () => {
    return request('/colleteProfessional/enableProfessional/1586906568190959617', 'put')
}
/**
 * 删除专业
 * @param {String} collegeOrProfessional
 * @param {String} parentId
 * @returns
 */
export const deleteProfessional = () => {
    return request('/colleteProfessional/deleteProfessional/1586906568190959617', 'del')
}
/**
 * 删除学院
 * @param {String} collegeOrProfessional
 * @param {String} parentId
 * @returns
 */
export const deleteCollege = () => {
    return request('/colleteProfessional/deleteCollege/1586906568190959617', 'del')
}
/**
 * 获取所有有效学院
 * @param {String} collegeOrProfessional
 * @param {String} parentId
 * @returns
 */
export const getAllValidCollege = () => {
    return request('/colleteProfessional/getAllValidCollege/1586906568190959617', 'del')
}
/**
 * 分页获取学院
 * @param {String} collegeOrProfessional
 * @param {String} parentId
 * @returns
 */
export const getPageCollege = ({ currentPage, pageSize, keyword }) => {
    return request(`/colleteProfessional/getPageCollege?currentPage=${currentPage}&pageSize=${pageSize}&keyword=${keyword}`, 'get')
}
/**
 * 分页获取专业
 * @param {String} collegeOrProfessional
 * @param {String} parentId
 * @returns
 */
export const getPageProfessional = ({ currentPage, pageSize, keyword }) => {
    return request(`/colleteProfessional/getPageProfessional?currentPage=${currentPage}&pageSize=${pageSize}&keyword=${keyword}`, 'get')
}
/**
 * 分页获取专业
 * @param {String} collegeOrProfessional
 * @param {String} parentId
 * @returns
 */
export const getPageCollege = ({ currentPage, pageSize, keyword }) => {
    return request(`/colleteProfessional/getPageProfessional?currentPage=${currentPage}&pageSize=${pageSize}&keyword=${keyword}`, 'get')
}
/**
 * 根据id获取学院
 * @param {String} collegeOrProfessional
 * @param {String} parentId
 * @returns
 */
export const getCollegeById = () => {
    return request('/colleteProfessional/getCollegeById/1586905110271827970', 'get')
}
/**
 * 根据id获取专业
 * @param {String} collegeOrProfessional
 * @param {String} parentId
 * @returns
 */
export const getProfessionalById = () => {
    return request('/colleteProfessional/getProfessionalById/1587074835639468033', 'get')
}
/**
 * 根据学院id获取包含的专业
 * @param {String} collegeOrProfessional
 * @param {String} parentId
 * @returns
 */
export const getAllProfessionalByCollegeId = () => {
    return request('/colleteProfessional/getAllProfessionalByCollegeId/1586905110271827970', 'get')
}
