 桌面翻译APP
## 简介
+ 使用Electron实现桌面应用
+ 调用有道翻译API，实现翻译功能

## 环境支持（Node.js npm electron）
1. 首先要下载安装Node.js
在命令行中分别输入node -v, npm -v看到版本号则安装成功。
2. 安装cnpm, 通过cnpm安装electron
> //安装cnpm
> npm install -g cnpm --registry=https://registry.npm.taobao.org
> //使用cnpm安装package，例如electron
> cnpm install -g electron

3. 安装electron-prebuilt
> cnpm install -g electron-prebuilt

4. 安装packager发布工具
> cnpm install -g electron-prebuilt

5. 安装electron-builder
> cnpm install electron-builder -g

6. 安装 aser 打包工具
> cnpm install -g asar


## 应用创建
1. 首先创建工程文件夹
2. 在工程文件夹下打开cmd
3. 输入npm init, 按照提示输入。
4. 创建程序入口js文件, 该文件名即为3中生成的package.json中main节点对应的值
参考程序如下
> const { app, BrowserWindow } = require('electron')
> const path = require('path')
> const url = require('url')
> // 保持对window对象的全局引用，如果不这么做的话，当JavaScript对象被
> // 垃圾回收的时候，window对象将会自动的关闭
> let win
> function createWindow () {
>   // 创建浏览器窗口。
>   win = new BrowserWindow({ width: 800, height: 600 })
>   // 然后加载应用的 index.html。
>   //win.loadFile('index.html')
>   // 加载项目的index.html文件.
>   win.loadURL(url.format({
>     pathname: path.join(__dirname, 'src/index.html'),
>     protocol: 'file:',
>   // 当窗口关闭时候的事件.
>     slashes: true
>   }))
>   // 打开开发者工具
>   win.webContents.openDevTools()
>   // 当 window 被关闭，这个事件会被触发。
>   win.on('closed', () => {
>     // 取消引用 window 对象，如果你的应用支持多窗口的话，
>     // 通常会把多个 window 对象存放在一个数组里面，
>     // 与此同时，你应该删除相应的元素。
>     win = null
>   })
> }
> // Electron 会在初始化后并准备
> // 创建浏览器窗口时，调用这个函数。
> // 部分 API 在 ready 事件触发后才能使用。
> app.on('ready', createWindow)
> // 当全部窗口关闭时退出。
> app.on('window-all-closed', () => {
>   // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
>   // 否则绝大部分应用及其菜单栏会保持激活。
>   if (process.platform !== 'darwin') {
>     app.quit()
>   }
> })
> app.on('activate', () => {
>   // 在macOS上，当单击dock图标并且没有其他窗口打开时，
>   // 通常在应用程序中重新创建一个窗口。
>   if (win === null) {
>     createWindow()
>   }
> })
> // 在这个文件中，你可以续写应用剩下主进程代码。
> // 也可以拆分成几个文件，然后用 require 导入。

5. 创建页面文件index.html, 该文件即为4中加载的html文件


## 工程启动方法
1. 在工程目录下打开cmd
2. 输入electron . 或者 npm run start
