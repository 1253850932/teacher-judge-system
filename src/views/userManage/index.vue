<template>
    <el-card class="box-card">
        <template #header>
            <div class="card-header">
                <span>用户管理</span>
                <el-button @click="show = true" class="button" text>新增</el-button>
                <el-dialog v-model="show" title="增加用户" width="70%" top="20px" align-center open-delay="1">
                    <AddInfo ref="addInfo" @changeShow="changeShow" />
                    <template #footer>
                        <span class="dialog-footer">
                            <el-button type="primary" @click="submitForm">确定</el-button>
                            <el-button @click="cancelForm">取消</el-button>
                        </span>
                    </template>
                </el-dialog>
            </div>
        </template>
        <!-- 数据展示 -->
        <el-table :data="users" style="width: 100%" fit highlight-current-row>
            <el-table-column type="index" width="50" />
            <el-table-column prop="username" label="姓名" width="80px" />
            <el-table-column
                prop="role.roleName"
                label="角色"
                sortable
                width="80px"
                column-key="roleName"
                :filters="[
                    { text: '学生', value: '学生' },

                    { text: '老师', value: '老师' }
                ]"
                :filter-method="filterHandler"
            />
            <el-table-column prop="gender" label="性别" width="50px" />
            <el-table-column prop="college.collegeOrProfessional" label="院系" width="100px" />
            <el-table-column prop="professional.collegeOrProfessional" label="专业" width="100px" sortable />
            <el-table-column prop="email" label="邮箱" width="150px" />
            <el-table-column prop="phone" label="联系方式" width="150px" />
            <el-table-column prop="address" label="地址" width="200px" />
            <el-table-column label="操作" width="250px">
                <template #default="scope">
                    <el-button @click="editUser(scope.$index)" type="primary">编辑</el-button>
                    <el-button @click="checkVisible(scope.$index)" type="info">查看</el-button>
                    <el-button @click="delUser(scope.$index)" type="danger">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-card>
    <CheckInfo ref="checkInfo"></CheckInfo>

    <EditInfo ref="editInfo" />
</template>

<script>
// @ts-nocheck

import { defineComponent, ref, computed, reactive } from 'vue'
import { useStore } from 'vuex'
import { deleteUser } from '@/api/userMange.js'
import { ElMessage, ElMessageBox } from 'element-plus'
export default defineComponent({
    setup({ emit }) {
        const store = useStore()

        const addInfo = ref(null)
        const show = ref(false)
        const users = computed(() => store.state.userManage.users)
        const changeShow = value => {
            console.log(value)
            show.value = value
        }
        // 操作 查看按钮
        const checkInfo = ref(null)
        const checkVisible = index => {
            checkInfo.value.dialogTableVisible = true
            checkInfo.value.users = users.value[index]
        }
        // 操作 删除按钮
        const delUser = index => {
            ElMessageBox.confirm('确认删除吗？', {
                confirmButtonText: '确认',
                cancelButtonText: '取消',
                type: 'warning'
            })
                .then(() => {
                    deleteUser(users.value[index].id).then(data => {
                        if (data.data.msg === '删除成功') {
                            store.dispatch('userManage/delUser', users.value[index].id)
                            ElMessage('删除成功')
                        } else {
                            ElMessage({
                                message: '删除失败',
                                type: 'warning'
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

        // 过滤学生|老师
        const filterHandler = (value, row, column) => {
            const property = column['property']
            return row[property] === value
        }
        // 新增按钮操作
        const submitForm = () => {
            addInfo.value.submitForm()
        }
        const cancelForm = () => {
            addInfo.value.cancelForm()
        }

        // 编辑按钮操作
        const editInfo = ref(null)
        let currentUser = reactive({})
        const editUser = value => {
            currentUser = computed(() => store.state.userManage.users[value])
            editInfo.value.dialog = true
            editInfo.value.form = JSON.parse(JSON.stringify(currentUser.value))
        }

        return { show, checkVisible, checkInfo, filterHandler, users, delUser, changeShow, editUser, submitForm, cancelForm, addInfo, editInfo, currentUser }
    }
})
</script>

<style lang="scss" scoped>
.box-card {
    width: 1250px;
    height: 620px;
    margin: 10px auto;
    border-radius: 20px;
    // :deep(.el-dialog) {
    //     position: absolute;
    //     transform: translateX(22%) translateY(-12%);
    // }
    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }
}
</style>
