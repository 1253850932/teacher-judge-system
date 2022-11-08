<template>
    <div class="container">
        <div class="box">
            <el-form class="form">
                <span>教师评价管理系统</span>
                <el-input size="large" v-model="form.name" placeholder="用户名" type="text" maxlength="50"> </el-input>
                <el-input size="large" ref="password" v-model="form.password" :type="passwordType" placeholder="密码" name="password" maxlength="50">
                    <template #append>
                        <i class="sfont password-icon" :class="passwordType ? 'system-yanjing-guan' : 'system-yanjing'" @click="passwordTypeChange"></i>
                    </template>
                </el-input>
                <el-radio-group v-model="radio" @change="changeRadio(radio)">
                    <el-radio :label="'system'">管理员</el-radio>
                    <el-radio :label="'student'">学生</el-radio>
                    <el-radio :label="'teacher'">教师</el-radio>
                </el-radio-group>
                <!-- 验证码 -->
                <el-input size="large" v-model="form.code" placeholder="验证码" type="text"> </el-input>
                <div class="captchaImg"><img @click="changeCaptcha" :src="captchaImg" alt="" /></div>
                <el-button type="primary" @click="submit" style="width: 250px" size="medium">登录</el-button>
            </el-form>
        </div>
    </div>
</template>

<script>
// @ts-nocheck

import { systemTitle } from '@/config'
import { defineComponent, ref, reactive, computed, onBeforeMount, onUpdated } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import { addRoutes } from '@/router/index.js'
import { ElMessage } from 'element-plus'
export default defineComponent({
    name: 'Login',
    setup() {
        const store = useStore()
        const router = useRouter()
        const route = useRoute()
        const form = reactive({
            name: 'dcc',
            password: '1019',
            code: ''
        })
        //  密码类型显示隐藏
        const passwordType = ref('password')
        const passwordTypeChange = () => {
            passwordType.value === '' ? (passwordType.value = 'password') : (passwordType.value = '')
        }
        // 页面渲染之前，拿到验证码
        onBeforeMount(() => {
            store.dispatch('user/getCaptcha')
        })
        // 点击改变验证码
        const changeCaptcha = () => {
            store.dispatch('user/changeCaptcha', captchaKey.value)
        }

        // 验证码图片
        const captchaImg = computed(() => store.state.user.captcha.captchaImg)
        const captchaKey = computed(() => store.state.user.captcha.captchaKey)
        //  登录非空检查
        const checkForm = () => {
            return new Promise((resolve, reject) => {
                if (form.name === '') {
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
                if (form.code === '') {
                    ElMessage.warning({
                        message: '验证码不能为空',
                        type: 'warning'
                    })
                    return
                }
                resolve(true)
            })
        }

        const radio = ref('system')
        const changeRadio = value => {
            store.commit('user/tokenChange', value)
        }
        //  登录
        const submit = () => {
            checkForm().then(() => {
                let params = {
                    username: form.name,
                    password: form.password,
                    code: form.code,
                    key: store.state.user.captcha.captchaKey
                }
                store.dispatch('user/login', params).then(data => {
                    ElMessage.success({
                        message: '登录成功',
                        type: 'success',
                        showClose: true,
                        duration: 1000
                    })
                    // 动态添加路由
                    addRoutes(radio.value)
                    // 重定向
                    router.push(route.query.redirect || '/')
                })
            })
        }
        return {
            systemTitle,
            form,
            passwordType,
            passwordTypeChange,
            submit,
            captchaImg,
            changeCaptcha,
            radio,
            changeRadio
        }
    }
})
</script>

<style lang="scss" scoped>
.container {
    position: relative;
    width: 100vw;
    height: 100vh;
    background: url(@/assets/images/loginbg.jpg);
    background-size: 100%;
    background-color: #eef0f3;

    .box {
        width: 480px;
        height: 430px;
        position: absolute;
        left: 63.6%;
        top: 50%;
        background: white;
        transform: translateY(-50%);
        border-radius: 68px;
        overflow: hidden;
        box-shadow: 0 6px 20px 5px rgba(152, 152, 152, 0.1), 0 16px 24px 2px rgba(117, 117, 117, 0.14);
        h1 {
            margin-top: 40px;
            text-align: center;
            font-size: 16px;
        }
        .form {
            display: flex;
            position: relative;
            width: 250px;
            flex-wrap: wrap;
            margin: 65px auto 15px;
            :deep(.el-radio-group) {
                margin: 10px 0;
            }
            span {
                margin: 0 auto;
                margin-bottom: 30px;
                font-weight: 600;
                font-size: 18px;
            }
            .captchaImg {
                position: absolute;
                cursor: pointer;
                top: 210px;
                right: 25px;
                width: 90px;
            }
            .el-input {
                width: 250px;
                margin: 0 auto;
                padding-bottom: 20px;
                :deep(.el-input__inner) {
                    border-bottom-color: #bfa;
                    border-top-color: rgba(255, 255, 255, 0.748);
                    border-right-color: rgba(255, 255, 255, 0.748);
                    border-left-color: rgba(255, 255, 255, 0.748);
                }
                :deep(.el-input-group__append) {
                    display: none;
                }
                &:hover :deep(.el-input-group__append) {
                    display: block;
                    position: absolute;
                    right: 0;
                    top: 50%;
                    transform: translateY(-58%);

                    background-color: #fff;
                    border-color: rgba(255, 255, 255, 0.748);
                }

                .prepend {
                    background-color: #fff;
                }
            }
            .password-icon {
                cursor: pointer;
                color: #409eff;
            }
            .el-button {
                margin: 20px auto;
                display: block;
                background-color: rgb(170, 224, 255);
                border-color: rgba(255, 255, 255, 0.748);
                &:hover {
                    background-color: #409eff;
                }
            }
        }
        .fixed-top-right {
            position: absolute;
            top: 10px;
            right: 10px;
        }
    }
}
@media screen and (max-width: 750px) {
    .container .box {
        width: 100vw;
        height: 100vh;
        box-shadow: none;
        left: 0;
        top: 0;
        transform: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h1 {
            margin-top: 0;
        }
        .form {
        }
    }
}
</style>
