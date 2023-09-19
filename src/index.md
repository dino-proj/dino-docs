---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
footer: true
sidebar: false
title: 首页

hero:
  name: "Dinodev.cn"
  text: "一个开源免费的\n前后端快速开发框架"
  tagline: "基于Spring Boot 3 & Vue3"
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
    details: 完备实现增删改查接口，只需声明业务模块字段属性，即可生成前后端代码。
  - title: Java 17
    icon: ☕️
    details: 后端基于Java17版本，充分利用17版本的特性。
  - title: Spring Boot 3
    icon: 
      src: '/images/spring.io.svg'
      width: '24'
      height: '24'
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Vue.js 3
    icon:
      src: '/images/vuejs.svg'
      width: '24'
      height: '24'
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: 前后端分离
    icon: 💔
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: 多租户
    icon: 🏡
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Spring单体服务
    icon: ☝🏻
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Spring Cloud微服务
    icon: ☁️
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: 声明式
    icon: 📃
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<div class="VPFeatures VPHomeFeatures vp-doc"><div data-v-f5090ebe="" class="container">
<h2 id="modules"> 内置业务模块 <a class="header-anchor" href="#modules" aria-label="Permalink to &quot;modules&quot;">&ZeroWidthSpace;</a></h2>
</div></div>

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/dino-proj.png',
    name: 'Cody Lu',
    title: 'Creator',
    desc: '本项目发起人',
    links: [
      { icon: 'github', link: 'https://github.com/dino-proj' },
      { icon: 'twitter', link: 'https://twitter.com/tuuboo_bob' }
    ]
  },{
    avatar: 'https://github.com/liujiehaobang.png',
    name: 'Jack Liu',
    title: 'Developer',
    desc: '杰出的贡献者',
    links: [
      { icon: 'github', link: 'https://github.com/liujiehaobang' },
      { icon: 'twitter', link: 'https://twitter.com/tuuboo_bob' }
    ]
  },
]
</script>
<div class="VPFeatures VPHomeFeatures vp-doc"><div data-v-f5090ebe="" class="container">
<h2 id="contributor"> 开发贡献者 <a class="header-anchor" href="#contributor" aria-label="Permalink to &quot;Contributor&quot;">&ZeroWidthSpace;</a></h2>
</div></div>

<VPTeamMembers size="medium" :members="members" />
