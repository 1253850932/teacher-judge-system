<template>
    <el-card class="box-card">
        <template #header>
            <div class="card-header">
                <span>学院管理</span>
                <el-button class="button" text>新增</el-button>
            </div>
        </template>
        <!-- 数据展示 -->
        <!-- <div class="layout-container-table">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column type="expand">
                    <template #default="props">
                        <el-table :data="props.row.family">
                            <el-table-column prop="title2" align="center" />
                            <el-table-column prop="content" />
                            <el-table-column prop="code" align="center" />
                            <el-table-column />
                        </el-table>
                    </template>
                </el-table-column>
                <el-table-column label="学院" prop="title1" align="center" />
                <el-table-column label="评价标准" align="center" />
                <el-table-column label="得分" align="center" />
                <el-table-column label="操作" align="center" />
            </el-table> -->
        <!-- </div> -->
    </el-card>
</template>

<script>
// @ts-nocheck

import { defineComponent, ref, computed, reactive } from 'vue'
import { useStore } from 'vuex'
import { getAllValidCollege, getAllValidProfessional, getAllProfessionalByCollegeId } from '@/api/collegeProfessional.js'
import { ElMessage, ElMessageBox } from 'element-plus'

export default defineComponent({
    setup({ emit }) {
        getAllValidCollege().then(data => {
            if (data.data.msg === '获取成功') {
                store.dispatch('college/getAllCollege', data.data.data)
            }
        })
        getAllValidProfessional().then(data => {
            if (data.data.msg === '获取成功') {
                store.dispatch('college/GetAllProfessional', data.data.data)
            }
        })
        const store = useStore()

        let college = computed(() => store.state.college.college)
        let Professional = computed(() => store.state.college.Professional)
        let Data = college.value

        return { college }
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
