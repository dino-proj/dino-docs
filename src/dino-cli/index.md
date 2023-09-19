---
layout: doc
sidebar: true
title: Dino Cli 首页
footer: true

hero:
  name: "Dino Cli"
  text: "开发辅助工具"
  tagline: "工程配置 · 代码生成"
  image:
    src: "/images/logo.png"
---
<script setup>
import { VPHomeHero } from 'vitepress/theme'
</script>

<VPHomeHero  style="padding-left:0" />

## 快速开始

安装：
```shell
npm install -g @dino-dev/cli
# OR
yarn global add @dino-dev/cli

# check install
dino --version
# @dino/cli x.x.x
```

代码生成：
```shell
dino code test-apply

# output as follow ↓↓↓
```

<img src="./imgs/code-gen.png" style="width: 100%; border-radius:8px;" />
