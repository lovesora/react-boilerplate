# react-boilerplate
The boilerplate of react tech with using react, react-router, redux, webpack, material-ui

# How to use?
**step 1**

`yarn install`

**step 2**

`yarn run start:dev`

# node api测试使用方式
node版本需要>7.6

更新方式
```bash
#清除node.js的cache：
$ sudo npm cache clean -f

#安装 n 工具，这个工具是专门用来管理node.js版本的，别怀疑这个工具的名字，是他是他就是他，他的名字就是 "n"
$ sudo npm install -g n

#安装最新版本的node.js
$ sudo n stable

#安装最新版
$ sudo n latest
```

# 目录结构
```
-root
  |-src                         //源文件目录
    |-components                //组件
      |-component-name          //组件名
        |-xx.controller.js      //react控制器组件
        |-xx.view.js            //react视图组件
    |-public                    //打包发布目录
    |-redux                     //redux状态管理目录
      |-actions                 //action creator目录
        |-ac_xx.js              //action creator文件
      |-constants               //redux常量目录
        |-action_types.js       //action类型
      |-reducers                //reducer目录
        |-xx.js                 //reducer文件
        |-index.js              //reducer合并文件
      |-store                   //store管理目录
        |-index.js              //store创建文件
        |-initial_state.js      //state初始化数据文件
    |-router                    //前端路由目录
    |-server                    //后端api目录
      |-node-api                //数据模拟目录
        |-configs               //koa配置目录
        |-controllers           //控制器目录，模拟的路由和数据就是写在这个文件
          |-xx.controller.js    //控制器文件
        |-app.js                //koa入口
        |-package.json          //node依赖文件
        |-yarn.lock             //yarn lock文件
      |-restful-api             //前端api访问配置
  |-.eslintrc                   //eslint配置文件
  |-.gitignore                  //git忽略配置文件
  |-LICENSE                     //开源协议
  |-package.json                //node依赖配置文件
  |-README.md                   //说明文件
  |-webpack.config.js           //webpack配置文件
  |-webpack.dev.js              //webpack开发配置
  |-webpack.prod.js             //webpack发布配置
  |-yarn.lock                   //yarn lock文件
```