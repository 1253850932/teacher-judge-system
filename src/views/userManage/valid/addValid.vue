<template>
    <el-form :label-position="labelPosition" :model="formLabelAlign">
        <el-form-item label="权限代码">
            <el-input v-model="formValid.permissionApi" />
        </el-form-item>
        <el-form-item label="权限描述">
            <el-input v-model="formValid.permissionName" />
        </el-form-item>
        <el-form-item label="权限类型">
            <el-input v-model="formValid.permissionType" />
        </el-form-item>
    </el-form>
</template>
<script>
// 解构
import { defineComponent, reactive, ref } from 'vue'
export default defineComponent({
    name: '',
    props: {
        // 接收父组件数据
    },
    components: {},
    setup(props, ctx) {
        const formValid = reactive({
            permissionApi: '',
            permissionName: '',
            permissionType: ''
        })
        return { formValid }
    }
})
</script>
<style scoped lang="less"></style>
