<template>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="序号" width="180" />
        <el-table-column prop="name" label="学院名" width="180" />
        <el-table-column prop="address" label="专业名" />
        <el-table-column prop="address" label="教师" />
        <el-table-column label="操作" />
    </el-table>
</template>
<script>
// 解构
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'Table',
    props: {
        // 接收父组件数据
    },
    components: {},
    setup(props, ctx) {
        const tableData = [
            {
                date: '2016-05-03',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles'
            },
            {
                date: '2016-05-02',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles'
            },
            {
                date: '2016-05-04',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles'
            },
            {
                date: '2016-05-01',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles'
            }
        ]
        return { tableData }
    }
})
</script>
<style scoped lang="sass"></style>
