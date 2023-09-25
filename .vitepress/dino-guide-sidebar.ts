// Copyright 2023 dinosdev.cn.
// SPDX-License-Identifier: Apache-2.0

import type { DefaultTheme } from "vitepress/types/default-theme";

export const dinoGuideSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: "开始",
    items: [
      { text: "简介", link: "/guide/" },
      { text: "快速开始", link: "/guide/getting-started" },
      { text: "我们的开发理念", link: "/guide/concept" },
      { text: "Asset Handling", link: "/guide/assets" },
      { text: "Markdown Extensions", link: "/guide/markdown" },
      { text: "Using Vue in Markdown", link: "/guide/using-vue" },
      { text: "Deploying", link: "/guide/deploy" },
    ],
  },
  {
    text: "Advanced",
    items: [
      { text: "Frontmatter", link: "/guide/frontmatter" },
      { text: "Theming", link: "/guide/theming" },
      { text: "API Reference", link: "/guide/api" },
      {
        text: "Differences from Vuepress",
        link: "/guide/differences-from-vuepress",
      },
    ],
  },
];
