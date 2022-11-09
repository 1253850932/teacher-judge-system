<template>
    <div>
        <el-dialog ref="EditCourse" v-model="editShow" title="Tips" width="30%" :before-close="handleClose">
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
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="cancel">取消</el-button>
                    <el-button type="primary" @click="submitAdd"> 确认 </el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>
<script>
// @ts-nocheck

// 解构
import { computed, defineComponent, reactive, ref } from 'vue'
import { editCourse } from '@/api/course.js'
import { useStore } from 'vuex'
import { ElMessage, ElMessageBox } from 'element-plus'

export default defineComponent({
    name: 'EditCourse',
    props: {
        // 接收父组件数据
    },
    components: {},
    setup(props, { emit }) {
        const store = useStore()
        const editShow = ref(false)
        const EditCourse = ref(null)
        let formValid = reactive({
            courseName: '',
            courseDescription: '',
            courseContent: '',
            collegeId: '',
            professionalId: '',
            teacherId: ''
        })
        const cancel = () => {
            editShow.value = false
        }

        const submitAdd = () => {
            editCourse(formValid).then(data => {
                if (data.data.msg === '修改成功') {
                    store.dispatch('course/editCollege', formValid)
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
                    editShow.value = false
                } else {
                    ElMessage({
                        message: data.data.msg,
                        type: 'info'
                    })
                }
            })
        }
        return { formValid, submitAdd, editShow, EditCourse, cancel }
    }
})
</script>
<style scoped lang="less"></style>
