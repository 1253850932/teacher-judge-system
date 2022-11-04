// @ts-nocheck

// 1. 创建新的axios实例
// 2. 请求拦截器： 如果有token 进行头部携带
// 3. 响应拦截器： 1。剥离无效数据，2.处理token无效
// 4. 到处一个函数，调用当前的axios实例发请求
import axios from 'axios'
import store from '@/store'
import { ElMessage } from 'element-plus'

// 导出基准地址，原因：其它地方不是通过axios发请求的地方用上基准地址
const baseURL = '/api'

const instance = axios.create({
    baseURL,
    timeout: 5000
})

// 请求前的统一处理 拦截请求函数
instance.interceptors.request.use(
    config => {
        // JWT鉴权处理
        if (store.state.user.authorization) {
            config.headers['Authorization'] = `Bearer ${store.state.user.authorization}`
        }
        return config
    },
    error => {
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

// 拦截响应函数
// res=>response.data 取出data数据，将来调用接口时直接拿到的就是后台的数据
instance.interceptors.response.use(
    res => {
        return res
    },
    error => {
        console.log(error) // for debug
        const badMessage = error.message || error
        const code = parseInt(badMessage.toString().replace('Error: Request failed with status code ', ''))
        showError({ code, message: badMessage })
        return Promise.reject(error)
    }
)

function showError(error) {
    if (error.code === 403) {
        // to re-login
        store.dispatch('user/loginOut')
    } else {
        ElMessage({
            message: error.msg || error.message || '服务异常',
            type: 'error',
            duration: 3 * 1000
        })
    }
}

export default (url, method, submitData) => {
    // 负责发请求，请求地址，请求方式，提交的数据
    return instance({
        url,
        method,
        // 1. 如果是get请求  需要使用params来传递submitData   ?a=10&c=10
        // 2. 如果不是get请求  需要使用data来传递submitData   请求体传参
        // [] 设置一个动态的key, 写js表达式，js表达式的执行结果当作KEY
        // method参数：get,Get,GET  转换成小写再来判断
        // 在对象，['params']:submitData ===== params:submitData 这样理解
        [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
    })
}
