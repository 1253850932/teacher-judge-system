<template>
    <el-card class="box-card">
        <template #header>
            <div class="card-header">
                <span>权限管理</span>
                <el-button class="button" text>新增</el-button>
                <el-dialog title="增加用户" width="70%" top="20px" align-center open-delay="1">
                    <AddInfo ref="addInfo" />
                    <template #footer>
                        <span class="dialog-footer">
                            <el-button type="primary">确定</el-button>
                            <el-button>取消</el-button>
                        </span>
                    </template>
                </el-dialog>
            </div>
        </template>
        <!-- 数据展示 -->
        <el-table :data="users" style="width: 100%" fit highlight-current-row>
            <el-table-column type="index" width="50" />
            <el-table-column prop="username" label="姓名" width="80px" />
            <el-table-column prop="role.roleName" label="角色" sortable width="80px" />
            <el-table-column prop="college.collegeOrProfessional" label="院系" width="100px" />
            <el-table-column prop="professional.collegeOrProfessional" label="专业" width="100px" sortable />
            <el-table-column label="操作" width="250px">
                <template #default="scope">
                    <el-button type="primary">编辑</el-button>
                    <el-button type="info">查看</el-button>
                    <el-button type="danger">删除</el-button>
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
import { getAllValidPermissionByRoleId } from '@/api/permission.js'
import { getRoleById } from '@/api/roleManage.js'
export default defineComponent({
    setup({ emit }) {
        const store = useStore()
        let id = '1586906568190959617'
        getRoleById(id).then(data => {
            console.log(data.data)
        })
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
