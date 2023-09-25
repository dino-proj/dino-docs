// Copyright 2023 dinosdev.cn.
// SPDX-License-Identifier: Apache-2.0

import type { DefaultTheme } from "vitepress/types/default-theme";

export const dinoCliSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: "Dino Cli",
    collapsed: false,
    items: [
      { text: "介绍", link: "/dino-cli/" },
      { text: "安装", link: "/dino-cli/install" },
    ],
  },
  {
    text: "基础",
    collapsed: false,
    items: [
      { text: "创建工程", link: "/dino-cli/create-project" },
      { text: "spring项目配置", link: "/dino-cli/config-dino-spring" },
      { text: "spring代码生成", link: "/dino-cli/code-dino-spring" },
    ],
  },
  {
    text: "dino-spring模板",
    collapsed: false,
    items: [
      { text: "模板介绍", link: "/dino-cli/dino-spring-tmpl" },
      { text: "CRUD模块", link: "/dino-cli/dino-spring-tmpl-crud" },
    ],
  },
  {
    text: "dino-vue3模板",
    collapsed: false,
    items: [
      { text: "模板介绍", link: "/dino-cli/dino-vue3-tmpl" },
      { text: "CRUD模块", link: "/dino-cli/dino-vue3-tmpl-crud" },
    ],
  },
];
