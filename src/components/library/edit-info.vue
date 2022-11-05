<template>
    <el-drawer ref="drawerRef" v-model="dialog" title="编辑信息" :before-close="handleClose" custom-class="demo-drawer">
        <el-form :model="form" label-width="150px" class="form" ref="ruleFormRef">
            <el-form-item :label="'名称'">
                <el-input v-model="form.username" :placeholder="'名称'" class="inputWidth" />
            </el-form-item>
            <el-form-item :label="'密码'">
                <el-input v-model="form.password" :placeholder="'请输入密码'" />
            </el-form-item>
            <el-form-item :label="'性别'">
                <el-radio-group v-model="form.gender" class="ml-4 itemSex">
                    <el-radio label="男" size="large">男&nbsp;&nbsp;&nbsp;&nbsp;</el-radio>
                    <el-radio label="女" size="large">女</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item :label="'角色'">
                <el-radio-group v-model="form.role.id" class="ml-4 itemSex">
                    <el-radio label="1585472797252001794" size="large">学生</el-radio>
                    <el-radio label="1585472740486410241" size="large">教师</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item :label="'院系/专业'">
                <el-cascader :options="options" @change="handleChange" />
            </el-form-item>

            <el-form-item :label="'联系方式'">
                <el-input v-model="form.phone" :placeholder="'请输入联系方式'" />
            </el-form-item>
            <el-form-item :label="'电子邮箱'">
                <el-input v-model="form.email" :placeholder="'请输入电子邮箱'" />
            </el-form-item>
            <el-form-item :label="'地址'">
                <el-input v-model="form.address" :placeholder="'请输入地址'" />
            </el-form-item>

            <el-form-item label="详细介绍">
                <el-input v-model="form.description" :autosize="{ minRows: 7, maxRows: 11 }" class="text-area" type="textarea" />
            </el-form-item>
        </el-form>
        <div class="demo-drawer__content">
            <div class="demo-drawer__footer">
                <el-button @click="cancelForm">取消</el-button>
                <el-button type="primary" @click="onClick">确定</el-button>
            </div>
        </div>
    </el-drawer>
</template>
<script>
// @ts-nocheck

// 解构
import { ref, defineComponent, watch } from 'vue'
import { ElDrawer, ElMessageBox, ElMessage } from 'element-plus'
import { editUser } from '@/api/userMange.js'
import store from '../../store'
export default defineComponent({
    name: 'EditInfo',
    props: {
        // 接收父组件数据
    },
    components: { ElDrawer, ElMessageBox },
    setup(props, ctx) {
        const formLabelWidth = '80px'
        const table = ref(false)
        const dialog = ref(false)
        const loading = ref(false)
        const drawerRef = ref()

        let form = ref()
        watch(
            () => form,
            () => {},
            { immediate: true, deep: true }
        )
        // 点击确认
        const onClick = () => {
            let params = {
                id: form.value.id,
                username: form.value.username,
                phone: form.value.phone,
                email: form.value.email,
                gender: form.value.gender,
                address: form.value.address,
                description: form.value.description,
                collegeId: form.value.college.id,
                professionalId: form.value.professional.id,
                roleId: form.value.role.id
            }
            editUser(params).then(data => {
                if (data.data.msg === '修改成功') {
                    store.dispatch('userManage/editUser', form.value)
                    ElMessage.success({
                        message: '修改成功',
                        type: 'success',
                        showClose: true,
                        duration: 1000
                    })
                    dialog.value = false
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
        // 学院/专业 改变
        const handleChange = value => {
            form.value.college.id = value[0]
            form.value.professional.id = value[1]
            if (value[0] === '1586905110271827970') {
                form.value.college.collegeOrProfessional = '软件学院'
                form.value.professional.collegeOrProfessional = '软件工程'
            } else {
                form.value.college.collegeOrProfessional = '多媒体学院'
                form.value.professional.collegeOrProfessional = '计算机科学与技术'
            }
            value = ''
        }
        // 学院专业数据
        const options = [
            {
                value: '1586905110271827970',
                label: '软件学院',
                children: [
                    {
                        value: '1586906568190959617',
                        label: '软件工程'
                    }
                ]
            },
            {
                value: '1587102735507980289',
                label: '多媒体学院',
                children: [
                    {
                        value: '1587074835639468033',
                        label: '计算机科学与技术'
                    }
                ]
            }
        ]
        const cancelForm = () => {
            dialog.value = false
        }
        return { form, table, dialog, loading, formLabelWidth, onClick, options, drawerRef, cancelForm, handleChange }
    }
})
</script>
<style lang="scss" scoped>
.form {
    margin-top: 20px;
    :deep(.el-form-item) {
        width: 400px;
    }
    :deep(.el-cascader) {
        position: absolute;
        left: 0;
    }
    .itemSex {
        position: absolute;
        left: 0;
    }
}
</style>
