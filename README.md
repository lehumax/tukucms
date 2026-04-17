<p></p>
<p></p>

<p align="center">
  <img alt="logo" src="https://tuku-cms.oss-cn-hongkong.aliyuncs.com/github/logo.png">
</p>
<h1 align="center">TUKUCMS —— 专注彩讯系统研发</h1>
<h3 align="center" >49图库系统采用uniapp+vue+php开发，支持独立部署、私彩开奖、资料自动生成或采集</h3>

<div align="center">
<a href="https://www.php.net"><img src="https://img.shields.io/badge/php-%3E=7.4-brightgreen.svg?maxAge=2592000" alt="Php Version"></a>
  <a href="https://github.com/swoole/swoole-src"><img src="https://img.shields.io/badge/swoole-%3E=4.5-brightgreen.svg?maxAge=2592000" alt="Swoole Version"></a>

</div>

<p></p>
<p></p>

![1.00](https://tuku-cms.oss-cn-hongkong.aliyuncs.com/github/banner.png)

[项目官网](https://tukucms.com) | [项目演示](https://demo.49tkym.com) | [联系我们](https://https://t.me/tukucms)

### 项目简介

> tukucms, 专注彩讯系统研发,打造一站式彩讯营销生态系统，赋能企业快速积累用户并实现精准营销，全渠道多终端覆盖。咨询飞机：@tukucms

TukuCms 是基于PHP+VUE+UNIAPP开发的一套通用的彩讯管理系统，得益于 `Swoole` 和 `Webman` 框架的优秀，TukuCms 可提供超高性能的同时，也保持着极其灵活的可扩展性。

#### 应用场景

可用于六合彩资料、六合彩开奖查询、六合实用工具、六合交流论坛等彩讯行业，通过多场景彩讯解决方案，轻松玩转彩讯营销，结合强大的后台支持，灵活的运营模式，实现彩民一站式服务体验，开辟新的流量入口，开启线上运营新局面。

#### 功能特性

六大核心助力营销能力升级：

* 数据自动化：已经实现开奖记录、六合图库、幽默猜测、开奖视频、高手论坛、资料大全等模版数据采集或生成

* 彩讯工具箱：实用的彩讯工具（跳码助手、生肖卡牌、幸运摇奖等），助力运营盘活流量，实现客户捆绑，布局全新生态

* 资料网互通：与资料网融合，实现开奖数据打通，突破数据瓶颈，实现多网站流量互通

* 多元化互动：论坛式交流体系，助力内容聚合并且融入打赏、红包、竞猜、投票等功实现用户间互动

* 渠道多终端：支持私有化独立部署，可实现苹果、安卓、H5全渠道覆盖与精准服务，运营更安全稳定

* 多年技术沉淀：多年彩讯程序研发经验，成熟资源整合机制，支持定制/仿站


#### 核心技术

* 前端技术栈: `Vue`、`Vuex`、`Arco Design of Vue`

* 后端技术栈: `PHP`、`MySQL`、`Redis`、 `Swoole`、`Webman`

### 环境部署

#### 准备工作

```
PHP >= 7.4 (推荐7.4版本)
Swoole >= 4.5
Webman >= 2.0
pcntl扩展
Composer
MySQL >= 5.7
Redis
FFmpeg
Node.js >= 10
```

#### 运行系统

##### 后端运行

```bash
# 运行PHP服务
php start.php start
```

##### 前端运行

```bash
# 安装依赖
yarn install

# 编译生成dist
yarn run build
```

##### 必要配置



* 修改 .env 中的配置数据库配置及缓存配置



### 文件结构


```
├── README.md------------------------------------------- 项目说明
├── babel.config.js------------------------------------- babel配置文件
├── config
│   ├── plugin.config.js-------------------------------- 插件配置文件
│   └── themePluginConfig.js---------------------------- 主题配置文件
├── jest.config.js
├── jsconfig.json
├── package.json
├── postcss.config.js
├── public
│   ├── favicon.ico------------------------------------- 浏览器icon
│   └── index.html-------------------------------------- Vue 入口模板
├── src
│   ├── App.vue----------------------------------------- Vue 模板入口
│   ├── api--------------------------------------------- Api ajax 等
│   ├── assets------------------------------------------ 本地静态资源
│   ├── components-------------------------------------- 业务通用组件
│   ├── core-------------------------------------------- 项目引导, 全局配置初始化，依赖包引入等
│   ├── global.less------------------------------------- 全局样式
│   ├── layouts----------------------------------------- 控制器
│   ├── main.js----------------------------------------- Vue 入口 JS
│   ├── router------------------------------------------ Vue-Router
│   ├── store------------------------------------------- Vuex
│   ├── utils------------------------------------------- 工具库
│   └── views------------------------------------------- 业务页面入口和常用模板
├── vue.config.js--------------------------------------- Vue主配置
└── webstorm.config.js---------------------------------- ide配置文件
```


### 部分演示图，持续更新

![输入图片说明](https://tuku-cms.oss-cn-hongkong.aliyuncs.com/github/h5-demo.png "demo演示.png")\
![输入图片说明](https://tuku-cms.oss-cn-hongkong.aliyuncs.com/github/pc-demo-1.jpg "demo演示.png")\
![输入图片说明](https://tuku-cms.oss-cn-hongkong.aliyuncs.com/github/pc-demo-2.jpg "demo演示.png")\
![输入图片说明](https://tuku-cms.oss-cn-hongkong.aliyuncs.com/github/pc-demo-3.jpg "demo演示.png")\
![输入图片说明](https://tuku-cms.oss-cn-hongkong.aliyuncs.com/github/pc-demo-4.jpg "demo演示.png")


