<template>
    <el-form :label-position="labelPosition" :model="formValid">
        <el-form-item label="课程名">
            <el-input v-model="formValid.courseName" />
        </el-form-item>
        <el-form-item label="课程描述">
            <el-input v-model="formValid.courseDescription" />
        </el-form-item>
        <el-form-item label="课程内容">
            <el-input v-model="formValid.courseContent" />
        </el-form-item>
        <el-form-item label="学院">
            <el-input v-model="formValid.collegeId" />
        </el-form-item>
        <el-form-item label="专业">
            <el-input v-model="formValid.professionalId" />
        </el-form-item>
        <el-form-item label="教师">
            <el-input v-model="formValid.teacherId" />
        </el-form-item>
        <el-form-item label="封面">
            <el-input v-model="formValid.courseCover" />
        </el-form-item>
    </el-form>
</template>
<script>
// @ts-nocheck

// 解构
import { defineComponent, reactive, ref } from 'vue'
import { addCollege } from '@/api/course.js'
import { useStore } from 'vuex'
import { ElMessage, ElMessageBox } from 'element-plus'

export default defineComponent({
    name: '',
    props: {
        // 接收父组件数据
    },
    components: {},
    setup(props, { emit }) {
        const store = useStore()
        const formValid = reactive({
            courseName: '',
            courseDescription: '',
            courseContent: '',
            collegeId: '',
            professionalId: '',
            teacherId: ''
        })
        const submitAdd = () => {
            addCollege(formValid).then(data => {
                if (data.data.msg === '添加成功') {
                    store.dispatch('course/addCollege', formValid)
                    ElMessage({
                        message: data.data.msg,
                        type: 'success'
                    })
                    formValid = {
                        courseName: '',
                        courseDescription: '',
                        courseContent: '',
                        collegeId: '',
                        professionalId: '',
                        teacherId: ''
                    }
                    emit('showChange', false)
                } else {
                    ElMessage({
                        message: data.data.msg,
                        type: 'info'
                    })
                }
            })
        }
        return { formValid, submitAdd }
    }
})
</script>
<style scoped lang="less"></style>
