// Copyright 2023 dinosdev.cn.
// SPDX-License-Identifier: Apache-2.0

import type { DefaultTheme } from "vitepress/types/default-theme";

export const dinoVue3Sidebar: DefaultTheme.SidebarItem[] = [
  {
    text: "Dino Vue3",
    collapsed: false,
    items: [
      { text: "介绍", link: "/dino-vue3/" },
      { text: "版本说明", link: "/dino-vue3/release" },
    ],
  },
  {
    text: "工程配置",
    collapsed: false,
    items: [
      { text: "创建工程", link: "/dino-vue3/create-project" },
      { text: "vue3项目配置", link: "/dino-vue3/config-dino-vue3" },
      { text: "vue3代码生成", link: "/dino-vue3/code-dino-vue3" },
    ],
  },
  {
    text: "dino-vue3模板",
    collapsed: false,
    items: [
      { text: "模板介绍", link: "/dino-vue3/dino-vue3-tmpl" },
      { text: "CRUD模块", link: "/dino-vue3/dino-vue3-tmpl-crud" },
    ],
  },
  {
    text: "vue3-cloud微服务开发",
    collapsed: false,
    items: [
      { text: "模板介绍", link: "/dino-vue3/dino-vue3-tmpl" },
      { text: "CRUD模块", link: "/dino-vue3/dino-vue3-tmpl-crud" },
    ],
  },
];
