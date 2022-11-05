<template>
    <el-form :model="form" label-width="150px" class="form" ref="ruleFormRef">
        <el-form-item :label="'名称'">
            <el-input v-model="form.username" :placeholder="'名称'" class="inputWidth" />
        </el-form-item>
        <el-form-item :label="'密码'">
            <el-input v-model="form.password" :placeholder="'请输入联系方式'" />
        </el-form-item>
        <el-form-item :label="'性别'">
            <el-radio-group v-model="form.gender" class="ml-4 itemSex">
                <el-radio label="男" size="large">男&nbsp;&nbsp;&nbsp;&nbsp;</el-radio>
                <el-radio label="女" size="large">女</el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item :label="'角色'">
            <el-radio-group v-model="form.roleId" class="ml-4 itemSex">
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
</template>
<script>
// @ts-nocheck

// 解构
import { defineComponent, reactive, ref } from 'vue'
import { Delete, Download, Plus, ZoomIn } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import { addUser } from '@/api/userMange.js'
import { useStore } from 'vuex'
export default defineComponent({
    name: 'AddInfo',
    props: {
        form: {
            type: Object,
            default: ''
        }
    },
    components: { Delete, Download, Plus, ZoomIn },
    setup(props, { emit }) {
        // 上传头像
        const dialogImageUrl = ref('')
        const store = useStore()
        let form = reactive({
            username: '',
            password: '',
            phone: '',
            email: '',
            gender: '',
            roleId: '',
            address: '',
            description: '',
            collegeId: '',
            professionalId: '',
            roleId: ''
        })
        const value = ref('')

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
        // 学院/专业 改变
        const handleChange = value => {
            form.collegeId = value[0]
            form.professionalId = value[1]
        }

        //  非空检查
        const checkForm = () => {
            return new Promise((resolve, reject) => {
                if (form.username === '') {
                    ElMessage.warning({
                        message: '用户名不能为空',
                        type: 'warning'
                    })
                    return
                }
                if (form.password === '') {
                    ElMessage.warning({
                        message: '密码不能为空',
                        type: 'warning'
                    })
                    return
                }
                if (form.phone === '') {
                    ElMessage.warning({
                        message: '验证码不能为空',
                        type: 'warning'
                    })
                    return
                }
                if (form.email === '') {
                    ElMessage.warning({
                        message: '邮箱不能为空',
                        type: 'warning'
                    })
                    return
                }
                if (form.address === '') {
                    ElMessage.warning({
                        message: '地址不能为空',
                        type: 'warning'
                    })
                    return
                }

                resolve(true)
            })
        }
        // 提交
        const submitForm = () => {
            checkForm().then(() => {
                let params = {
                    username: form.username,
                    password: form.password,
                    phone: form.phone,
                    email: form.email,
                    gender: form.gender,
                    roleId: form.roleId,
                    address: form.address,
                    description: form.description,
                    collegeId: form.collegeId,
                    professionalId: form.professionalId,
                    roleId: form.roleId,
                    role: {
                        roleName: form.roleId === '1585472797252001794' ? '学生' : '教师'
                    },
                    college: {
                        collegeOrProfessional: form.collegeId === '1586905110271827970' ? '软件学院' : '多媒体学院'
                    },
                    professional: {
                        collegeOrProfessional: form.professionalId === '1586906568190959617' ? '软件工程' : '多媒体学院'
                    }
                }

                addUser(params).then(data => {
                    if (data.data.msg === '添加成功') {
                        store.dispatch('userManage/addUser', params)
                        ElMessage.success({
                            message: '登录成功',
                            type: 'success',
                            showClose: true,
                            duration: 1000
                        })
                        emit('changeShow', false)
                    }
                })
            })
        }
        // 取消
        const cancelForm = () => {
            emit('changeShow', false)
        }
        return { form, options, dialogImageUrl, value, handleChange, submitForm, cancelForm }
    }
})
</script>
<style lang="scss" scoped>
.form {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 800px;
    height: 600px;
    :deep(.el-form-item) {
        width: 700px;
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
.text-area {
    :deep(.el-textarea__inner) {
        width: 600px;
        height: 100px;
    }
}
</style>
