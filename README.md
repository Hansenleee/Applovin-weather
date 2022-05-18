## Applovin-Weather

> 项目通过 github pages 部署，地址 [请点击查看在线 web](https://hansenleee.github.io/Applovin-weather/#/Applovin-weather)，代码仓库在 - https://github.com/Hansenleee/Applovin-weather/tree/master

该项目是一个简易的天气预报 web 项目，分为首页和详情页

## 项目介绍

项目是通过 `create-react-app` 构建的（通过 `eject` 将 `webpack` 配置暴露出来了）

```
|——src
|——————components              // 全局通用组件
|——————constants               // 全局通用常量
|——————pages                   // 页面
|——————services                // 接口请求统一封装，实现各种缓存逻辑
|——————utils                   // 工具库
```

## 离线缓存
项目通过 `SW` 进行离线缓存，缓存相关的代码放在 `/public/register.js` `/public/sw.js` 中，接口的缓存通过 `storage` 来实现

## 依赖
- 项目中涉及到的图片依赖了 `alioss` （小文件通过 base64）  
- 获取天气的接口依赖了高德 `API`  

## 其他
- 未来 24 h 的 API 暂时没有找到（找到的是需要付费的），因此是通过 `mock` 来实现的