<template>
    <el-card class="box-card"> </el-card>
</template>
<script>
// @ts-nocheck

// 解构
import { computed, defineComponent, ref, watch } from 'vue'
import { useStore } from 'vuex'
import { deleteCourse } from '@/api/course.js'
import { ElMessage, ElMessageBox } from 'element-plus'
import EditCoures from '../../../components/library/edit-course.vue'

export default defineComponent({
    name: 'Table',
    props: {
        // 接收父组件数据
    },
    components: { EditCoures },
    setup(props, ctx) {
        const store = useStore()
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
        const show = ref(false)
        const editCourse = ref(null)

        const editUser = index => {
            show.value = true
            const currCourse = computed(() => store.state.course.course[index])
            console.log(editCourse.value)
        }
        return { course, delUser, editUser, show, editCourse }
    }
})
</script>
<style scoped lang="sass"></style>
