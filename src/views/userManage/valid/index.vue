<template>
    <el-card class="box-card">
        <template #header>
            <div class="card-header">
                <span>权限管理</span>
                <el-button class="button" text @click="show = true">新增</el-button>

                <el-dialog v-model="show" title="增加权限" width="33%" top="250px" align-center open-delay="1">
                    <AddValid ref="addValid" />
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
        <el-table :data="allValid" style="width: 100%" fit highlight-current-row>
            <el-table-column type="index" width="30px" />
            <el-table-column prop="permissionApi" label="权限代码" width="180px" />
            <el-table-column prop="permissionName" label="权限描述" width="80px" />
            <el-table-column prop="permissionType" label="权限类型" width="80px"> </el-table-column>
            <el-table-column prop="id" label="权限ID" width="150px"> </el-table-column>
            <el-table-column prop="valid" label="启用" width="80px">
                <template #default="scope">
                    <el-tag :type="scope.row.valid === true ? 'warning' : 'success'" disable-transitions>{{ scope.row.valid === true ? '未启用' : '已启用' }}</el-tag>
                </template>
            </el-table-column>

            <el-table-column prop="createTime" label="创建时间" width="150px" />
            <el-table-column prop="updateTime" label="更新时间" width="150px" />
            <el-table-column label="操作" width="200px">
                <template #default="scope">
                    <!-- <EditValid ref="EditValid" /> -->
                    <!-- <el-button type="primary" @click="editCur(scope.$index)">确认</el-button> -->
                    <el-button @click="startStop(scope.$index)">{{ scope.row.valid === true ? '启用' : '禁用' }}</el-button>

                    <el-popconfirm title="确定删除吗?" confirm-button-text="确定" cancel-button-text="取消" @confirm="confirmEvent(scope.$index)">
                        <template #reference>
                            <el-button type="danger">删除</el-button>
                        </template>
                    </el-popconfirm>
                </template>
            </el-table-column>
        </el-table>
    </el-card>
</template>

<script>
// @ts-nocheck

import { defineComponent, ref, computed, watch } from 'vue'
import { useStore } from 'vuex'
import { deleteUser } from '@/api/userMange.js'
import { ElMessage, ElMessageBox } from 'element-plus'
import { getAllValidPermissions, deletePermission, addPermission, enablePermission, disablePermission } from '@/api/permission.js'
import AddValid from './addValid.vue'

export default defineComponent({
    components: { AddValid },
    setup({ emit }) {
        const store = useStore()
        const addValid = ref(null)

        const allValid = computed(() => store.state.valid.valid)
        watch(
            () => allValid.value,
            () => {},
            { deep: true, immediate: true }
        )
        // 删除权限
        const confirmEvent = index => {
            delValid(index)
        }
        const delValid = value => {
            deletePermission(allValid.value[value].id).then(data => {
                if (data.data.msg === '删除成功') {
                    store.dispatch('valid/deleteValid', value)
                    ElMessage.success({
                        message: '删除成功',
                        type: 'success',
                        showClose: true,
                        duration: 1000
                    })
                }
            })
        }

        // 新增权限
        const show = ref(false)

        const subAddValid = () => {
            addPermission(addValid.value.formValid).then(data => {
                if (data.data.msg === '添加成功') {
                    ElMessage.success({
                        message: '添加成功',
                        type: 'success',
                        showClose: true,
                        duration: 1000
                    })
                    getAllValidPermissions().then(data => {
                        if (data.data.msg === '获取成功') {
                            store.dispatch('valid/getValid', data.data.data)
                        }
                    })
                    show.value = false
                } else {
                    ElMessage({
                        message: data.data.msg,
                        type: 'warning',
                        showClose: true,
                        duration: 1000
                    })
                }
            })
        }

        // 取消按钮
        const cancelValid = () => {
            addValid.value.formValid.permissionApi = ''
            addValid.value.formValid.permissionName = ''
            addValid.value.formValid.permissionType = ''
            show.value = false
        }
        // 编辑按钮
        const EditValid = ref(null)
        const editShow = ref(false)

        const editCur = index => {
            EditValid.value.editShow = true
            EditValid.value.formValid.permissionApi = allValid.value[index].permissionApi
            EditValid.value.formValid.permissionName = allValid.value[index].permissionName
            EditValid.value.formValid.permissionType = allValid.value[index].permissionType
            EditValid.value.formValid.valid = allValid.value[index].valid
            console.log(EditValid.value.formValid)
        }
        // 启用未启用

        const startStop = index => {
            if (allValid.value[index].valid) {
                enablePermission(allValid.value[index].id).then(data => {
                    if (data.data.msg === '启用成功') {
                        store.dispatch('valid/startValid', index)
                        ElMessage({
                            message: data.data.msg,
                            type: 'success',
                            showClose: true,
                            duration: 1000
                        })
                    }
                })
            } else {
                disablePermission(allValid.value[index].id).then(data => {
                    if (data.data.msg === '禁用成功') {
                        store.dispatch('valid/stopValid', index)
                        ElMessage({
                            message: data.data.msg,
                            type: 'success',
                            showClose: true,
                            duration: 1000
                        })
                    }
                })
            }
        }

        return { allValid, delValid, show, subAddValid, addValid, cancelValid, confirmEvent, editCur, editShow, EditValid, startStop }
    }
})
</script>

<style lang="scss" scoped>
.box-card {
    width: 1250px;
    height: 620px;
    margin: 10px auto;
    border-radius: 20px;

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
