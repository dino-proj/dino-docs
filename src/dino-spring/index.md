---
layout: doc
sidebar: true
title: Dino Spring 首页
footer: true

hero:
  name: "Dino Spring"
  text: "后端快开发框架"
  tagline: "基于Spring Boot 3 · 10X倍速开发"
  image:
    src: "/images/spring.io.svg"
    width: '140'
    height: '140'
---
<script setup>
import { VPHomeHero } from 'vitepress/theme'
</script>

<VPHomeHero  style="padding-left:0" />

## 🦖 介绍
Spring Boot是非常优秀的Java后端开发框架，其解决了很多重复开发的问题，能做到对各种常用组件的自动配置。其解决了基础依赖问题。

然而，在很多项目开发中，存在大量功能代码复用问题，Dino Spring希望从这个层面解决问题，提升业务功能的开发速度和开发质量。

## 💡 版本说明
- **Java JDK:** >=17
- **Spring Framework:** 6.0.11
- **Spring Boot:** 3.1.2
- **Spring Cloud:** 2022.0.3

## 🎯 开发主张

- **目标：** 提高10X倍开发速度；降低10X倍Bug量；避免复制粘贴。

- **模块化结构：** 按照模块划分而非按照Java Class类型划分，同一个功能下的Entity、VO、Service、Repository位于同一目录结构下。

- **非必要不定义接口：** 非必要情况下，不采用Interface-Implement方式，因为大部分业务功能没有定义接口的必要，无需浪费开发时间。

- **开发不写文档：** 开发不应该把精力放在写文档上，rest接口文档应在代码中完成，无需再单独写接口文档，前后端应尽量避免沟通，一切以rest接口文档为准。如果rest接口不够详尽明确，后端应修改代码，完善接口描述。

## 🚀 快速开始
方式一：使用Dino Cli工具创建工程。

[Dino Cli 创建工程](../dino-cli/create-project.md)

方式二：手动添加

java spring项目maven pom.xml配置如下：

```xml
<project>
  <parent>
    <groupId>org.dinospring</groupId>
    <artifactId>dino-spring-boot-starter-parent</artifactId>
    <version>3.0.0</version>
  </parent>
  <groupId>[your group id]</groupId>
  <artifactId>[your artifact id]</artifactId>

  <dependencies>
    <dependency>
      <groupId>org.dinospring</groupId>
      <artifactId>dino-spring-core</artifactId>
      <version>${dino-spring.version}</version>
    </dependency>
  <dependencies>
</project>
```
