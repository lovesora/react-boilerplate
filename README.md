# react-boilerplate
The boilerplate of react tech with using react, react-router, redux, webpack, material-ui

# How to use?
**step 1**

`yarn install`

**step 2**

`yarn run start:dev`

# How to release?
**Step 1**

`yarn install`

**Step 2**

```js
// src/redux/store/index.js

// export default () => createStore(Reducers, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default () => createStore(Reducers, initialState);
```

**Step 3**

`yarn run start:prod`

# node api测试使用方式
node版本需要>7.6

node更新方式
```bash
# 清除node.js的cache：
$ sudo npm cache clean -f

# 安装 n 工具，这个工具是专门用来管理node.js版本的
$ sudo npm install -g n

# 安装最新版本的node.js
$ sudo n stable

# 安装最新版
$ sudo n latest

# 查看已安装版本
$ n

# 版本切换
$ sudo n x.x.x
```

# 目录结构
```
-root
  |-src                         //源文件目录
    |-components                //组件
      |-component-name          //组件名
        |-xx.js                 //react控制器组件
    |-dist                      //打包发布目录
    |-redux                     //redux状态管理目录
      |-action                  //action creator目录
        |-ac-xx.js              //action creator文件
      |-constant                //redux常量目录
        |-action-types.js       //action类型
      |-reducer                 //reducer目录
        |-xx.js                 //reducer文件
        |-index.js              //reducer合并文件
      |-store                   //store管理目录
        |-index.js              //store创建文件
        |-initial-state.js      //state初始化数据文件
    |-router                    //前端路由目录
      |-routes                  //路由列表文件
      |-xxx.route.js            //具体路由页面文件
    |-server                    //后端api目录
      |-node-api                //数据模拟目录
        |-configs               //koa配置目录
        |-controllers           //控制器目录，模拟的路由和数据就是写在这个文件
          |-xx.controller.js    //控制器文件(如果只是测试api的话一般只在这个文件夹下修改或添加controller)
        |-app.js                //koa入口
        |-package.json          //node依赖文件
        |-yarn.lock             //yarn lock文件
      |-fetch                   //ajax请求文件夹
        |-xxx.fetch.js          //ajax请求文件
      |-restful-api             //前端api访问配置
  |-.eslintrc                   //eslint配置文件
  |-.gitignore                  //git忽略配置文件
  |-LICENSE                     //开源协议
  |-package.json                //node依赖配置文件
  |-README.md                   //说明文件
  |-webpack.config.js           //webpack配置文件
  |-webpack.dev.js              //webpack开发配置
  |-webpack.prod.js             //webpack发布配置
  |-yarn.lock                   //yarn lock文件
```

# 版本更新
## v1.0
### 设计思想
* 一切皆组件
  * 视图组件
  * 数据组件
  * 服务组件
  * 逻辑组件

  ----------------

  * 每个页面当作是一个**Route**组件
  * 页面内部根据**可复用性、逻辑**划分子组件
  * 独立性较强的组件之间通过`redux`传递数据
  * 设定**全局**可复用组件
* 路由管理
  * 路由转换之间的动画效果

    `ReactCSSTransitionGroup`
  
* 状态管理
* webpack2包管理
  * react、es6编译
  * sass编译
  * js文件合并、压缩、丑化
  * css文件提取
  * 图片、字体加载
  * 生成html、去除缓存
  * 本地热刷新
  * 局域网访问

## v2.0
### 设计思想
* 常量管理
  * 统一常量设置
* 路由管理
  * 定义相对路径
* API请求管理(`srv` + `FnName`)
