<template>
    <el-card class="box-card">
        <template #header>
            <div class="card-header">
                <span>课程设置</span>
                <el-button type="primary" class="button" @click="show = true" text>新增</el-button>
                <el-input size="small" v-model="search" placeholder="Please Input" :suffix-icon="Search" />
                <el-icon size="17"><Search @click="searchFn" /></el-icon>

                <el-dialog v-model="show" title="增加权限" width="40%" top="100px" align-center open-delay="1">
                    <AddCourse ref="addValid" @showChange="showChange" />
                    <template #footer>
                        <span class="dialog-footer">
                            <el-button @click="subAddValid" type="primary">确定</el-button>
                            <el-button @click="cancelValid">取消</el-button>
                        </span>
                    </template>
                </el-dialog>
            </div>
        </template>
        <!-- 数据展示 -->
        <el-table :data="course" style="width: 100%" fit highlight-current-row>
            <el-table-column type="index" width="40px" />
            <el-table-column prop="courseName" label="课程名" width="130px" />
            <el-table-column prop="teacher.username" label="教师" width="70px" />
            <el-table-column prop="courseCover" label="封面" width="130px" />
            <el-table-column prop="courseContent" label="内容" width="200px" />
            <el-table-column prop="courseDescription" label="简介" width="200px" />
            <el-table-column prop="createTime" label="创建时间" width="140px" />
            <el-table-column label="操作" width="250px">
                <template #default="scope">
                    <el-button @click="editUser(scope.$index)" type="primary">编辑</el-button>
                    <el-button @click="delUser(scope.$index)" type="danger">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-dialog
            class="elDialog"
            v-model="dialogVisible"
            title="课程信息"
            width="59%"
            top="40vh"
            open-delay="1000"
            close-delay="500"
            draggable="true"
            :before-close="handleClose"
            v-if="searchCourse"
            :modal="false"
        >
            <table>
                <tr style="margin: 30px">
                    <td width="130px">课程名</td>
                    <td width="80px">教师</td>
                    <td width="100px">封面</td>
                    <td width="190px">内容</td>
                    <td width="200px">简介</td>
                    <td width="160px">创建时间</td>
                </tr>
                <tr>
                    <td>{{ searchCourse.courseName }}</td>
                    <td>{{ searchCourse.teacher.username }}</td>
                    <td>{{ searchCourse.courseCover }}</td>
                    <td>{{ searchCourse.courseContent }}</td>
                    <td>{{ searchCourse.courseDescription }}</td>
                    <td>{{ searchCourse.createTime }}</td>
                </tr>
            </table>
        </el-dialog>
    </el-card>
    <EditCourse ref="editCourse" />
</template>
<script>
// @ts-nocheck
// 解构
import { defineComponent, ref, computed, watch } from 'vue'
import { Search } from '@element-plus/icons-vue'
import { getCourseById, deleteCourse } from '@/api/course.js'
import { useStore } from 'vuex'
import AddCourse from './addCourse.vue'
import { ElMessage, ElMessageBox } from 'element-plus'
export default defineComponent({
    name: '',
    props: {
        // 接收父组件数据
    },
    components: { Search, AddCourse },
    setup(props, { emit }) {
        const addValid = ref(null)
        const store = useStore()
        const show = ref(false)

        // 新增
        const subAddValid = () => {
            addValid.value.submitAdd()
        }
        const showChange = params => {
            show.value = true
        }
        const cancelValid = () => {
            show.value = false
        }

        const course = computed(() => store.state.course.course)

        // 操作 删除按钮
        const delUser = index => {
            ElMessageBox.confirm('确认删除吗？', {
                confirmButtonText: '确认',
                cancelButtonText: '取消',
                type: 'warning'
            })
                .then(() => {
                    deleteCourse(course.value[index].id).then(data => {
                        if (data.data.msg === '删除成功') {
                            store.dispatch('course/deleteCourse', index)
                            ElMessage({
                                type: 'success',
                                message: '删除成功'
                            })
                        } else {
                            ElMessage({
                                type: 'info',
                                message: data.data.msg
                            })
                        }
                    })
                })
                .catch(() => {
                    ElMessage({
                        type: 'info',
                        message: '删除取消'
                    })
                })
        }
        // 编辑按钮
        const editCourse = ref(null)

        const editUser = index => {
            const currCourse = computed(() => store.state.course.course[index])
            editCourse.value.editShow = true
            editCourse.value.formValid.courseName = currCourse.value.courseName
            editCourse.value.formValid.courseDescription = currCourse.value.courseDescription
            editCourse.value.formValid.courseContent = currCourse.value.courseContent
            editCourse.value.formValid.teacherId = currCourse.value.teacher.id
            editCourse.value.formValid.collegeId = currCourse.value.college.id
            editCourse.value.formValid.professionalId = currCourse.value.professional.id
            // editCourse.value.formValid = currCourse.value
        }
        // 搜索
        const search = ref('')
        const searchCourse = ref('')
        const dialogVisible = ref(false)
        const searchFn = params => {
            if (search.value) {
                for (const item of course.value) {
                    console.log(item)
                    if (item.courseName === search.value) {
                        getCourseById(item.id).then(data => {
                            if (data.data.msg === '获取成功') {
                                searchCourse.value = data.data.data
                                dialogVisible.value = true
                            }
                        })
                    }
                }
                // getCourseById(search.value).then(data => {
                //     console.log(data.data)
                // })
            }
        }
        const handleClose = () => {
            searchCourse.value = ''
        }
        return { addValid, show, subAddValid, cancelValid, showChange, course, delUser, editUser, editCourse, searchFn, search, searchCourse, dialogVisible, handleClose }
    }
})
</script>
<style lang="scss" scoped>
.box-card {
    margin: 20px auto;
    width: 1200px;
    height: 600px;
    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        .el-input {
            width: 300px;
            :deep(.el-input__inner) {
                border-radius: 20px;
            }
        }
        .el-icon {
            position: absolute;
            right: 10px;
        }
        .button {
            z-index: 1;
            position: absolute;
            right: 330px;
        }
    }

    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }
}
</style>
