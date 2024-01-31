---
layout: doc
sidebar: true
title: Dino Vue3 文档
footer: true

hero:
  name: "Dino Vue3"
  text: "前端快速开发框架"
  tagline: "基于Vue3框架开发 · 10X倍速开发"
  image:
    src: "/images/vuejs.svg"
    width: '140'
    height: '140'
---
<script setup>
import { VPHomeHero } from 'vitepress/theme'
</script>

<VPHomeHero  style="padding-left:0" />

## 🦖 Dino Vue3介绍
Dino-vue3是基于Vue3开发的前端框架，和Dino-spring框架配合，实现更高效的功能开发。

[GitHub代码](https://github.com/dino-proj/dino-vue3)

## 🎯 开发主张

- **目标：** 提高10倍开发速度；降低10倍Bug量；避免复制粘贴。

- **模块化结构：** 按照模块划分, 约定大于配置。

## ✨ Features
  - 基于Vue3开发.
  - 使用TypeScript编写.
  - 使用Axios作为API请求组件.
  - 使用Pinia作为状态管理组件.
  - 使用VueRouter作为路由管理组件.
  - 使用web-storage-cache作为登录信息管理.
  - 支持租户信息状态管理，api支持租户信息填充
  - 支持GET、POST、UPLOAD接口定义，可以将所有接口统一管理，接口支持TypeScript类型定义
  - 内置Pagable、Sortable、Response、PageResponse类型，帮助更好定义类型化API接口
  - 支持Crud接口快速定义，一行代码定义完整增删改查
  - 集成了waves、drag、clipdoard常用指令
  - 用户登录认证，及refresh token登录方式.
  - 实现基于角色的权限认证，支持用v-auth指令实现按钮级权限控制.
  - 实现了可以基于字符串配置的Form表单验证方式，类似[vueformulate](https://vueformulate.com/).
  - 内置常见数据格式化能力，可以基于字符串配置格式化样式
  - 支持Crud页面配置化生成，内置TableSchema、EditSchema、ViewSchema、SearchSchema，可以通过声明式快速定义增删改查页面
  - 支持表单生成，基于JSON schema可以快速生成表单，或通过服务端定义表单(开发中).
  - 支持Vue组件插件系统，可以自定义插件，基于JSON Schema快速实现页面或Waget生成，或者通过服务端定义界面(开发中).
  - 此Vue3不涉及前端框架，可以配合其他基于Vue3的框架使用，如[dino-ui-element-plus](https://gitee.com/dino-proj/dino-ui-element-plus).

