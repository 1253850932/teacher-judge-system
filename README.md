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
   git clone https://github.com/1253850932/teacher-project.git
   ```


2. 安装依赖，国内推荐使用cnpm或tyarn，国外推荐使用npm或yarn

   ```
   npm install
   ```

   

3. 运行

   ```
   npm run dev 或 npm run start
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