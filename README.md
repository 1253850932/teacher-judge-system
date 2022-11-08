# Teacher-Judge-Project
## 主要技术栈

- MVVM框架：vue v3
- 工程化管理：vite v2
- UI框架：element-plus
- 路由管理：vue-router v4
- 状态管理：vuex v4
- 数据请求：axios
- 实用工具库：@vueuse/core



## 使用

1. 获取源码资源包

   ```
   git clone https://github.com/1253850932/teacher-judge-system.git
   ```


2. 安装依赖，国内推荐使用cnpm或tyarn，国外推荐使用npm或yarn

   ```
   npm install \ npm install --legacy-peer-deps
   ```

   

3. 运行

   ```
   npm run dev 
   ```

   

4. 打包

   ```
   npm run build
   ```
   
### 目录结构
```
teacher-judge-project
      
├─ dist               # 打包dist
├─ mock               # mock服务
├─ public             # 静态资源
├─ src                # 源码
│  ├─ api             # 接口请求
│  ├─ assets          # webpack打包的资源
│  ├─ components      # 公共组件
│  ├─ config          # 全部配置
│  ├─ directive       # 全局指令
│  ├─ layout          # 全局Layout
│  ├─ model           # 全部model存放
│  ├─ plugins         # 插件
│  ├─ router          # 路由
│  ├─ store           # 全局store管理
│  ├─ theme           # 全局样式
│  ├─ utils           # 全局公共方法
│  └─ views           # 所有业务页面
├─ index.html	      # 根页面
├─ .env.dev.build     # 开发环境
├─ .env.dev.serve     # 开发本地本地
├─ .env.prod.build    # 生产环境
├─ .env.prod.serve    # 生产环境本地
├─ .eslintrc.js       # eslint
├─ .prettierrc.js     # prettierrc
├─ README.md    
└─ vite.config.js     # vite 配置
```



### vscode开启@路径自动提示
- 一、安装path模块
     ```js  
	 npm install path --save
- 二、设置路径别名
     > 查看项目结构, **vue-cli** 的脚手架找到 **vue.config.js**, 使用path模块，设置路径别名
	 ```js
	    const path = require("path");
		function resolve(dir) {
		return path.join(__dirname, dir);
		} 
		module.exports = {
			chainWebpack: config => {
				config.resolve.alias
				.set("@", resolve("src"))
				.set("assets", resolve("src/assets"))
				.set("components", resolve("src/components"))
				.set("base", resolve("baseConfig"))
				.set("public", resolve("public"));
			},
		}
	```	
	> vite 项目找到 **vite.config.js**,使用path模块，设置路径别名
	```js
	import {resolve} from 'path'

	const pathResolve = dir => {
	return resolve(__dirname, '.', dir)
	}

	const alias = {
	'@': pathResolve('src')
	}
	export default ({command}) => {
	const prodMock = true
	return {
		base: './',
		resolve: {
		alias
		}
	}
	}
- 三、VScode设置自动路径补全
     * 1.使用快捷键  `ctrl + shift + p` 召唤搜索框
     * 2.搜索 **setting.json**
     * 3.添加代码
    ```js
	  {
		"path-intellisense.mappings": {
		"@": "${workspaceRoot}/src"
	  }
	```

### 使用Echarts
 1. `import * as echarts from 'echarts'`
 2. 在setup中声明
 	 ```js
	  // 声明定义一下echart
        let echart = echarts
		onMounted(() => {
            courseChart()   
        })
		onUnmounted(() => {
            courseChart.dispose
        })
	  // 基础配置一下Echarts
	    const courseChart = () => {
            let chart = echart.init(document.getElementById('course'), null, {
                width: 380,
                height: 250
            })
            // 把配置和数据放这里
            chart.setOption({
                legend: {
                    // Try 'horizontal'
                    right: 0,
                    top: 0
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                series: [
                    {
                        name: '人数',
                        type: 'pie',
                        data: [
                            {
                                value: 335,
                                name: '学生'
                            },
                            {
                                value: 234,
                                name: '教师'
                            }
                        ]
                    }
                ]
            })
            window.onresize = function () {
                //自适应大小
                chart.resize()
            }
        }
	```	
3. 准备**dom**容器 `  <div id="course" :style="{ width: '424px', height: '250px' }"></div>`

### Git 提交规范
```markdown
	feat: 新功能
	fix: 修复bug
	docs: 只有文档改变
	style: 并没有影响代码的意义(空格，去掉分号，格式的修改等)
	refactor: 代码的修改并没有修改bug，也没有添加新功能
	perf: 代码的修改提高的性能
	test: 添加测试
	build: 影响构建系统或外部依赖项的更改(maven,gradle,npm 等等)
	ci: 对CI配置文件和脚本的更改
	chore：对非 src 和 test 目录的修改
	revert: Revert a commit
```


### 自动注册全局组件
 1. VueCli 
    >扩展vue原有的功能：全局组件，自定义指令，挂载原型方法，注意：没有全局过滤器。
    -	vue3.0插件写法要素：导出一个对象，有install函数，默认传入了app应用实例，app基础之上扩展
    -	`import XtxMore from './xtx-more.vue'`
	-	导入library文件夹下的所有组件
	-	批量导入需要使用一个函数 require.context(dir,deep,matching)
	-	参数：1. 目录  2. 是否加载子目录  3. 加载的正则匹配
	```js
		const importFn = require.context('./', false, /\.vue$/)
		export default {
			install(app){
				//在app上进行扩展，	app提供component directive 函数
				//如果要挂载原型，app.config.globalProperties 方式
				// 批量注册全局组件
				 importFn.keys().forEach(key => {
					// 导入组件
					const component = importFn(key).default
					// 注册组件
					app.component(component.name, component)
				})
				  // 自定义指令
				defineDirective(app)
				app.config.globalProperties.$message = Message
			}
		}	
	```
2. vite
   1. 使用 import.meta.glob() 
		-	// import.meta.glob()  
		-   // import.meta.globEager()
	
		```js
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
    	```
   2. 使用 *unplugin-vue-components* 插件
      > 放在 src/components  文件夹里面
       + `npm i unplugin-vue-components`
       + `import Components from 'unplugin-vue-components/vite'`
       +  ```js 
		        plugins: [
					vue(),
					viteMockServe({
						mockPath: 'mock',
						localEnabled: command === 'serve',
						prodEnabled: command !== 'serve' && prodMock,
						watchFiles: true,
						injectCode: `
						import { setupProdMockServer } from '../mockProdServer';
						setupProdMockServer();
						`,
						logger: true
					}),
					Components({
						dirs: ['src/components/library']
					})
				]
		  ```	

### vue3 父组件使用子组件的函数
	 refs 可以拿到子组件的对象
	 子组件需要return暴露出去
   1. 父组件
```vue
		<template>
			父组件
			<div @click="changeChild">改变子组件函数</div>
			<Child ref='child'>子组件</Child>
		</template>
		<script>
		import {ref} from 'vue'
		export default {
			setup(){
				const child = ref(null)
				const changeChild=(){
					child.value.changeShow()
				}
				return{changeChild}
			}
		}
		</script>
```	
  2. 子组件
```vue
		<template>
			子组件
		</template>
		<script>
		import {ref} from 'vue'
		export default {
			setup(){
				const show =ref(false)
				const changeShow = ()=>{
					show.value = true
				}
				return{show,changeShow}
			}
		}
		</script>
```	

### Axios请求传递请求头
> config.headers['Authorization'] = `Bearer ${store.state.user.authorization}`
```js
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
```
### 跨域问题
> vite.config.js

```js
	    server: {
            port: '8000',
            proxy: {
                '/api': {
                    target: 'http://121.43.163.227:9001', // 凡是遇到 /api 路径的请求，都映射到 target 属性 目标地址
                    changeOrigin: true, // 是否跨域
                    rewrite: path => path.replace(/^\/api/, '')
                }
            }
        },
```	
>  request.js

```js 
const baseURL = '/api'

const instance = axios.create({
    baseURL,
    timeout: 5000
})
```

### vue3 子组件向父组件传递值
子组件 child.vue
```vue
		<template>
			子组件
			<div @click="send">发送</div>
		</template>
		<script>
		export default {
			setup({emit}){
				const show = false
				const send = ()=>{
					emit('sendFather',show)
				}
				return{send}
			}
		}
		</script>
```
父组件 father.vue
```vue
 		<template>
			父组件
			<!--@sendFather是子组件中定义的方法--emit('sendFather',show)， "sendFather"是父组件定义接受的函数 -->
			<Child @sendFather="sendFather"></Child>
		</template>
		<script>
		import Child form child.vue
		export default {
			components:{Child},
			setup({emit}){
				const sendFather = (value)=>{
					// value 是子组件传递过来的
					console.log(value)
				}
				return {sendFather}
			}
		}
		</script>
```		


### 在项目中遇到问题
  `TypeError: Cannot read properties of undefined (reading 'deep')`  
 > 错误记录：此错误由vue3.0报出， 使用了未注册的指令

如：在`login.vue`中的登录按钮使用了 `v-ware` 指令，而没有在`main.js` 声明注册