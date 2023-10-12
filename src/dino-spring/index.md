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
Spring Boot是非常优秀的Java应用开发框架，以简化和加速开发为目标。它采用"约定优于配置"原则，减少繁琐的设置，内嵌常见Web服务器，提供自动配置，支持微服务，拥有生产就绪特性，可外部化配置，与Spring生态系统无缝集成，提供开箱即用功能，支持自动化构建。这使得开发人员可以更轻松地构建应用程序，减少了重复工作，同时保持灵活性。Spring Boot的强大社区支持和丰富文档资源也使其成为流行的选择，降低了Java应用程序开发的难度，提高了效率，适用于各种项目和应用场景。

然而，在很多项目开发中，存在大量功能代码复用问题，Dino Spring希望从这个层面解决问题，提升业务功能的开发速度和开发质量。

## 💡 版本依赖
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
