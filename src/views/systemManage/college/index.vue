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
// @ts-nocheck

// 解构
import { computed, defineComponent } from 'vue'
import { Search } from '@element-plus/icons-vue'
import { getAllValidCollege, getAllValidProfessional } from '@/api/collegeProfessional'
import { useStore } from 'vuex'
export default defineComponent({
    name: '',
    props: {
        // 接收父组件数据
    },
    components: { Search },
    setup(props, ctx) {
        const store = useStore()
        // 获取所有有效学院
        getAllValidCollege().then(data => {
            if (data.data.msg === '获取成功') {
                store.dispatch('college/getAllValidCollege', data.data.data)
            }
        })
        const allCollege = computed(() => store.state.college.colleges)
        console.log(allCollege.value)
        // 获取所有有效专业
        getAllValidProfessional().then(data => {
            if (data.data.msg === '获取成功') {
                store.dispatch('college/getAllValidProfessional', data.data.data)
            }
        })
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
