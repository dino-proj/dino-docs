// Copyright 2023 dinosdev.cn.
// SPDX-License-Identifier: Apache-2.0

import type { DefaultTheme } from "vitepress/types/default-theme";

export const dinoSpringSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: "Dino Spring",
    collapsed: false,
    items: [
      { text: "介绍", link: "/dino-spring/" },
      { text: "版本说明", link: "/dino-spring/release" },
    ],
  },
  {
    text: "工程配置",
    collapsed: false,
    items: [
      { text: "创建工程", link: "/dino-spring/create-project" },
      { text: "spring项目配置", link: "/dino-spring/config-dino-spring" },
      { text: "spring代码生成", link: "/dino-spring/code-dino-spring" },
    ],
  },
  {
    text: "dino-spring模板",
    collapsed: false,
    items: [
      { text: "模板介绍", link: "/dino-spring/dino-spring-tmpl" },
      { text: "CRUD模块", link: "/dino-spring/dino-spring-tmpl-crud" },
    ],
  },
  {
    text: "spring-cloud微服务开发",
    collapsed: false,
    items: [
      { text: "模板介绍", link: "/dino-spring/dino-vue3-tmpl" },
      { text: "CRUD模块", link: "/dino-spring/dino-vue3-tmpl-crud" },
    ],
  },
];
