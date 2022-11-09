<template>
    <router-view></router-view>
</template>

<script>
import { defineComponent } from 'vue'
import locale from 'element-plus/lib/locale/lang/zh-cn'
export default defineComponent({
    name: 'App',
    setup() {
        // 获取所有有效学院
        // getAllValidCollege().then(data => {
        //     if ((data.data.msg = '获取成功')) {
        //         store.dispatch('college/getAllCollegeOrProfessional', data.data.data)
        //     }
        // })
        // //  获取所有有效专业
        // getAllValidProfessional().then(data => {
        //     if ((data.data.msg = '获取成功')) {
        //         store.dispatch('college/getAllValidProfessional', data.data.data)
        //     }
        // })
    }
})
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 100%;
    height: 100vh;
}
</style>
