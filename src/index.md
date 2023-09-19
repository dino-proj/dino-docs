---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
footer: true
sidebar: false
title: 首页

hero:
  name: "Dinodev.cn"
  text: "一个开源免费的\n前后端快速开发框架"
  tagline: "基于Spring Boot 3 & Vue3，<span style='color:#e20000'>1分钟</span>开发一个功能"
  image:
    src: "/images/logo.png"
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/
    - theme: alt
      text: Dino Spring
      link: /dino-spring/
    - theme: alt
      text: Dino Vue3
      link: /dino-vue3/

features:
  - title: 10X开发效率
    icon: 🚀
    details: 完备实现增删改查接口，只需声明业务模块字段属性，即可生成前后端代码，1分钟开发一个功能。
  - title: Java 17
    icon: ☕️
    details: 后端基于Java17版本，充分利用17版本的特性。
  - title: Spring Boot 3
    icon: 
      src: '/images/spring.io.svg'
      width: '24'
      height: '24'
    details: 后端框架基于Spring Boot 3，完整使用Spring生态，支持GraalVM
  - title: Vue.js 3
    icon:
      src: '/images/vuejs.svg'
      width: '24'
      height: '24'
    details: 前端基于TypeScript和Vue3，完整使用Vue生态。
  - title: 前后端分离
    icon: 💔
    details: 前后端分离，前后端接口保持一致，只需要关注业务构建。
  - title: 声明式开发
    icon: 📝
    details: 声明式开发，通过注解即可完成字段检查、数据绑定、权限检查。
  - title: 完备的API文档
    icon: 📖
    details: 后端服务基于SpringDoc实现接口文档和接口测试，开发更便捷。
  - title: 支持多租户
    icon: 🏡
    details: 支持开发多租户应用，支持表/行级别租户划分。
  - title: 支持微服务
    icon: 🌟
    details: 支持单体/微服务应用，内置服务注册、配置管理。
  - title: 灵活的权限控制
    icon: ☁️
    details: 灵活的权限验证、支持基于角色、用户类型、资源的权限验证。
  - title: 高性能便捷数据库访问
    icon: 🏃🏻‍♂️
    details: 基于原生JDBC实现数据高效访问，丰富的内置数据接口，开发速度更快。
  - title: 内置丰富模块
    icon: 🎉
    details: 登录注册、字典、短信、对象存储、IM、钱包、日志、审计等。
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/dino-proj.png',
    name: 'Cody Lu',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/dino-proj' },
      { icon: 'twitter', link: 'https://twitter.com/tuuboo_bob' }
    ]
  },{
    avatar: 'https://github.com/liujiehaobang.png',
    name: 'Jack Liu',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/liujiehaobang' },
      { icon: 'twitter', link: 'https://twitter.com/tuuboo_bob' }
    ]
  },
]
</script>


<div class="HomeContent vp-doc"><div class="container">
<h2 id="modules"> 内置业务模块 <a class="header-anchor" href="#modules" aria-label="Permalink to &quot;modules&quot;">&ZeroWidthSpace;</a></h2>

<h2 id="contributor"> 开发贡献者 <a class="header-anchor" href="#contributor" aria-label="Permalink to &quot;Contributor&quot;">&ZeroWidthSpace;</a></h2>
</div></div>


<VPTeamMembers size="medium" :members="members" />
