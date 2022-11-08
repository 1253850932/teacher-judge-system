// @ts-nocheck
import request from '@/utils/system/request'
/**
 * 添加课程
 * @param {String} courseName
 * @param {String} courseDescription
 * @param {String} courseContent
 * @param {String} collegeId
 * @param {String} professionalId
 * @param {String} teacherId
 * @returns
 */
export const addCollege = ({ courseName, courseDescription, courseContent, collegeId, professionalId, teacherId }) => {
    return request('/course/addCourse', 'post', {
        courseName,
        courseDescription,
        courseContent,
        collegeId,
        professionalId,
        teacherId
    })
}
/**
 * 修改课程
 * @param {String} id
 * @param {String} courseName
 * @param {String} courseDescription
 * @param {String} courseContent
 * @param {String} collegeId
 * @param {String} professionalId
 * @param {String} teacherId
 * @returns
 */
export const editCourse = ({ id, courseName, courseDescription, courseContent, collegeId, professionalId, teacherId }) => {
    return request('/course/editCourse', 'put', {
        id,
        courseName,
        courseDescription,
        courseContent,
        collegeId,
        professionalId,
        teacherId
    })
}
/**
 * 禁用课程
 * @param {String} id
 * @returns
 */
export const disableCourse = id => {
    return request(`/course/disableCourse/${id}`, 'put')
}
/**
 * 启用课程
 * @param {String} id
 * @returns
 */
export const enableCourse = id => {
    return request(`/course/enableCourse/${id}`, 'put')
}
/**
 * 删除课程
 * @param {String} id
 * @returns
 */
export const deleteCourse = id => {
    return request(`/course/deleteCourse/${id}`, 'DELETE')
}
/**
 * 分页获取课程
 * @param {String} currentPage
 * @param {String} pageSize
 * @param {String} keyword
 * @returns
 */
export const getPageCourse = ({ currentPage, pageSize, keyword }) => {
    return request(`/course/getPageCourse?currentPage=${currentPage}&pageSize=${pageSize}&keyword=${keyword}`, 'get')
}
/**
 * 分页获取课程
 * @param {String} id
 * @returns
 */
export const getCourseById = id => {
    return request(`/course/getCourseById/${id}`, 'get')
}
