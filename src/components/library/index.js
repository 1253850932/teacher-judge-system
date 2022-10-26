// @ts-nocheck
// vue3.0插件写法要素：导出一个对象，有install函数，默认传入了app应用实例，app基础之上扩展

// 导入library文件夹下的所有组件
// 批量导入需要使用一个函数 require.context(dir,deep,matching)
// 参数：1. 目录  2. 是否加载子目录  3. 加载的正则匹配

// import.meta.glob()
// import.meta.globEager()

import { defineAsyncComponent } from 'vue'
const components = import.meta.glob('../library/*.vue')
console.log(components)
export default function install(app) {
    for (const [key, value] of Object.entries(components)) {
        const name = key.slice(key.lastIndexOf('/') + 1, key.lastIndexOf('.'))
        console.log(name, value)
        app.component(name, defineAsyncComponent(value))
    }
}
