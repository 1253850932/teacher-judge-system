<template>
    <el-card class="box-card">
        <template #header>
            <div class="card-header">
                <span>院系设置</span>
                <el-input size="small" placeholder="Please Input" :suffix-icon="Search" />
                <el-icon size="17"><Search /></el-icon>
            </div>
        </template>
        <Table />
    </el-card>
</template>
<script>
// 解构
import { defineComponent } from 'vue'
import { Search } from '@element-plus/icons-vue'
export default defineComponent({
    name: '',
    props: {
        // 接收父组件数据
    },
    components: { Search },
    setup(props, ctx) {
        return {}
    }
})
</script>
<style lang="scss" scoped>
.box-card {
    margin: 30px auto;
    width: 1200px;
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
    }

    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }
}
</style>
