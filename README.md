github:  https://github.com/zhuming3834/manage

本地开发

// 开启服务器，浏览器访问 http://localhost:8080
npm run dev

构建生产

// 执行构建命令，生成的dist文件夹放在服务器下即可访问
npm run build

## 目录结构介绍 ##

	|-- build                            // webpack配置文件
	|-- config                           // 项目打包路径
		|-- index.js                     // 第26行 修改端口号
	|-- dist                             // 打包后的静态文件
		|-- index.html                   // 部署用的静态文件
		|-- static                       // 静态资源目录
	|-- src                              // 源码目录
	|		|-- page                   	 // 主要路由页面
	|           |-- Login.vue          	 // 登录
	|   |-- App.vue                      // 页面入口文件
	|   |-- main.js                      // 程序入口文件，加载各种公共组件
	|-- .babelrc                         // ES6语法编译配置
	|-- .editorconfig                    // 代码编写规格
	|-- .gitignore                       // 忽略的文件
	|-- index.html                       // 入口html文件
	|-- package.json                     // 项目及工具的依赖配置文件
	|-- README.md                        // 说明
