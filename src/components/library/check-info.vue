<template>
    <el-button type="info" @click="dialogTableVisible = true">查看</el-button>
    <div class="check-info-box" v-drag v-if="dialogTableVisible">
        <el-dialog v-model="dialogTableVisible" title="xxx学生基本信息" destroy-on-close>
            <el-descriptions class="descriptions" :column="1">
                <el-descriptions-item width="300px" label="名字">kooriookami</el-descriptions-item>
                <el-descriptions-item width="300px" label="密码">18100000000</el-descriptions-item>
                <el-descriptions-item width="300px" label="照片">Suzhou</el-descriptions-item>
                <el-descriptions-item width="300px" label="性别"> </el-descriptions-item>
                <el-descriptions-item width="300px" label="院系">No.1188, Wuzhong Avenue</el-descriptions-item>
                <el-descriptions-item width="300px" label="专业">No.1188, Wuzhong Avenue</el-descriptions-item>
                <el-descriptions-item width="300px" label="联系方式">No.1188, Wuzhong Avenue</el-descriptions-item>
                <el-descriptions-item width="300px" label="家庭地址">No.1188, Wuzhong Avenue</el-descriptions-item>
                <el-descriptions-item width="300px" label="详细信息">No.1188, Wuzhong Avenue</el-descriptions-item>
            </el-descriptions>
        </el-dialog>
    </div>
</template>
<script>
// @ts-nocheck

// 解构
import { defineComponent, ref } from 'vue'
import drag from '@/directive/drag/index'

export default defineComponent({
    name: 'CheckInfo',
    props: {
        // 接收父组件数据
        info: {
            type: Object,
            default: ''
        }
    },
    directives: { drag },
    components: {},
    setup(props, { emit }) {
        // 对话框是否可见
        const dialogTableVisible = ref(false)
        return {
            dialogTableVisible
        }
    }
})
</script>
<style scoped lang="scss">
.check-info-box {
    .el-button--text {
        margin-right: 15px;
    }

    .dialog-footer button:first-child {
        margin-right: 10px;
    }
    .descriptions {
        display: flex;
        flex-wrap: wrap;
    }

    .is-left {
        width: 500px;
        background-color: brown;
    }
}
</style>
