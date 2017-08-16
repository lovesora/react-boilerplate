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
// src/config/redux.config.js

{
  dev: false
}
```

**Step 3**

`yarn run start:prod`

# 目录结构
```
-root
  |-src                         // 源文件目录
    |-app                       // 业务具体代码所在文件夹
      |-module-name             // 模块名
        |-xxx.view.js           // 页面视图（仅将redux中的state映射为ui）
        |-xxx.controller.js     // 页面控制器（调用fetch、dts等，操作redux，更新state）
    |-asset                     // 资源文件夹
      |-resouces-name           // 资源名（png, jpeg, flv等）
        |-module-name           // 模块(业务逻辑模块名)
          |-xxx.ext             // 具体资源
      |-index.js                // 资源索引
    |-component                 // 可复用组件
      |-component-name          // 组件名
        |-xx.js                 // react控制器组件
    |-config                    // 配置文件夹
      |-redux.config.js         // redux配置文件
      |-router.config.js        // 路由配置文件（前端路由访问地址）
      |-server.config.js        // 服务器访问地址
      |-color.config.js         // 颜色配置文件
    |-constant                  // 常量文件夹
      |-text                    // 文本常量
        |-zh.constant.js        // 中文
        |-en.constant.js        // 英文
    |-dist                      // 打包发布目录
    |-redux                     // redux状态管理目录
      |-action                  // action creator目录
        |-ac-xx.js              // action creator文件
      |-constant                // redux常量目录
        |-action-types.js       // action类型
      |-reducer                 // reducer目录
        |-xx.js                 // reducer文件
        |-index.js              // reducer合并文件
      |-store                   // store管理目录
        |-index.js              // store创建文件
        |-initial-state.js      // state初始化数据文件
    |-router                    // 前端路由目录
      |-routes                  // 路由列表文件
      |-xxx.route.js            // 具体路由页面文件
    |-server                    // 后端api目录
      |-dts                     // 数据转换文件夹
        |-module-name           // 模块名
          |-xxx.dts.js          // 具体数据转换文件
      |-fetch                   // ajax请求文件夹
        |-fetch.js              // 前端api统一访问接口
        |-module-name           // 模块名
          |-xxx.fetch.js        // ajax请求文件
    |-styles                    // 全局样式文件夹
      |-_accelerate.scss        // 启用GPU加速
      |-_loading.scss           // loading效果
      |-_normalize.scss         // 格式化
      |-_react-router-animation.scss  // react-router页面转换
      |-_responsible.scss       // 响应式
      |-_tools.scss             // 工具
      |-_variables.scss         // 变量
      |-style.scss              // 样式入口
  |-.eslintrc                   // eslint配置文件
  |-.gitignore                  // git忽略配置文件
  |-LICENSE                     // 开源协议
  |-package.json                // node依赖配置文件
  |-README.md                   // 说明文件
  |-webpack.config.js           // webpack配置文件
  |-webpack.dev.js              // webpack开发配置
  |-webpack.prod.js             // webpack发布配置
  |-yarn.lock                   // yarn lock文件
```

# 版本更新
## v2.1
### 设计思想
* 数据独立
  * 显示->View
  * 从服务器获取->Fetch
  * 数据转换->DTS
  * 数据交互->Controller

* 配置APP
  * 配置前端router
  * 配置api请求
  * 配置redux模式（调试，非调试）

* 路由管理
  * 定义相对路径
  * 路由转换之间的动画效果

    `ReactCSSTransitionGroup`

  * 路由不再承担view层功能

* 组件化
  * 路由(Route)
  * 视图(View)
  * 控制器(Controller)
  * 数据组件(Fetch)
  * 数据转化组件(DTS)
  * 逻辑组件(Controller)

  ----------------

  * 每个页面当作是一个**Route**组件
  * 页面内部根据**可复用性、逻辑**划分子组件
  * 独立性较强的组件之间通过`redux`传递数据
  * 设定**全局**可复用组件

* 常量管理
  * 统一常量设置

* API请求管理(`srv` + `FnName`)

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
  * 请求转发

### 开发流程
* interface
  * 定义前后端交互接口
* mock
  * 定义mock数据
* fetch
  * 获取接口数据
* state
  * 根据业务逻辑设计state
* view
  * 设计显示state的视图
* action-type
  * 设计触法数据转换的action类型
* action-creator
  * 定义触发数据转换的数据源和action
* reducer
  * 定义state更新模式
* DTS
  * fetch -> action 转换层
* Controller
  * 控制器，控制view事件
* UI
  * 优化UI
* UE
  * 优化UE
* Test
  * 功能测试