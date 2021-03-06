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
> const { app, BrowserWindow } = require('electron')<br>
> const path = require('path')<br>
> const url = require('url')<br>
> // 保持对window对象的全局引用，如果不这么做的话，当JavaScript对象被<br>
> // 垃圾回收的时候，window对象将会自动的关闭<br>
> let win<br>
> function createWindow () {<br>
>   // 创建浏览器窗口。<br>
>   win = new BrowserWindow({ width: 800, height: 600 })<br>
>   // 然后加载应用的 index.html。<br>
>   //win.loadFile('index.html')<br>
>   // 加载项目的index.html文件.<br>
>   win.loadURL(url.format({<br>
>     pathname: path.join(__dirname, 'src/index.html'),<br>
>     protocol: 'file:',<br>
>   // 当窗口关闭时候的事件.<br>
>     slashes: true<br>
>   }))<br>
>   // 打开开发者工具<br>
>   win.webContents.openDevTools()<br>
>   // 当 window 被关闭，这个事件会被触发。<br>
>   win.on('closed', () => {<br>
>     // 取消引用 window 对象，如果你的应用支持多窗口的话，<br>
>     // 通常会把多个 window 对象存放在一个数组里面，<br>
>     // 与此同时，你应该删除相应的元素。<br>
>     win = null<br>
>   })<br>
> }<br>
> // Electron 会在初始化后并准备<br>
> // 创建浏览器窗口时，调用这个函数。<br>
> // 部分 API 在 ready 事件触发后才能使用。<br>
> app.on('ready', createWindow)<br>
> // 当全部窗口关闭时退出。<br>
> app.on('window-all-closed', () => {<br>
>   // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，<br>
>   // 否则绝大部分应用及其菜单栏会保持激活。<br>
>   if (process.platform !== 'darwin') {<br>
>     app.quit()<br>
>   }<br>
> })<br>
> app.on('activate', () => {<br>
>   // 在macOS上，当单击dock图标并且没有其他窗口打开时，<br>
>   // 通常在应用程序中重新创建一个窗口。<br>
>   if (win === null) {<br>
>     createWindow()<br>
>   }<br>
> })<br>
> // 在这个文件中，你可以续写应用剩下主进程代码。<br>
> // 也可以拆分成几个文件，然后用 require 导入。<br>

5. 创建页面文件index.html, 该文件即为4中加载的html文件


## 工程启动方法
1. 在工程目录下打开cmd
2. 输入electron . 或者 npm run start

## 关于代码提交
每个成员创建一个自己的分支, 命名建议使用大家都熟悉的名字(比如github账号).
主分支留着用于合并, 不允许自己往主分支提交代码.
每个人提交代码后在群里@一下我.
