import { defineConfig } from "vitepress";
import markdownitTaskLists from "markdown-it-task-lists";

import { dinoCliSidebar } from "./dino-cli-sidebar";
import { dinoSpringSidebar } from "./dino-spring-sidebar";
import { dinoVue3Sidebar } from "./dino-vue3-sidebar";
import { dinoGuideSidebar } from "./dino-guide-sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/",
  srcDir: "src",
  cacheDir: "./node_modules/.vitepress",
  title: "Dinodev.cn",
  description: "Dino开发框架使用文档，基于Spring Boot3 & Vue3",
  lang: "zh-CN",
  lastUpdated: true,

  head: [
    ["link", { rel: "icon", href: "/images/logo.svg" }],
    ["meta", { name: "author", content: "Dinodev.cn" }],
  ],

  markdown: {
    config: (md) => {
      md.use(markdownitTaskLists);
    },
    theme: {
      light: "github-light",
      dark: "github-dark",
    },
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/images/logo.svg",
    darkModeSwitchLabel: "切换为深色模式",

    nav: [
      {
        text: "文档",
        activeMatch: `^/(guide|dino-spring/guide|dino-vue3/guide|examples|dino-cli/guide)/`,
        items: [
          {
            text: "开始",
            items: [
              { text: "快速开始", link: "/guide/" },
              { text: "Dino CLI工具", link: "/dino-cli/" },
              { text: "示例教程", link: "/examples/" },
              { text: "Code Snippets", link: "/snippets/" },
            ],
          },
          {
            text: "教程",
            items: [
              { text: "Dino Spring", link: "/dino-spring/guide" },
              { text: "Dino Vue3", link: "/dino-vue3/guide" },
            ],
          },
        ],
      },
      {
        text: "Dino Spring",
        link: "/dino-spring/",
        activeMatch: "^/dino-spring/",
      },
      {
        text: "Dino Vue3",
        link: "/dino-vue3/",
        activeMatch: "^/dino-vue3/",
      },
      {
        text: "Dino Dev Cloud",
        link: "https://dinodev.cloud",
      },
    ],

    sidebar: {
      "/guide/": dinoGuideSidebar,
      "/dino-cli/": dinoCliSidebar,
      "/dino-spring/": dinoSpringSidebar,
      "/dino-vue3/": dinoVue3Sidebar,
    },

    footer: {
      message: "Released under the Apache-2.0 License.",
      copyright: "Copyright © 2022-present Dinodev.cn",
    },

    socialLinks: [{ icon: "github", link: "https://github.com/dino-proj" }],

    editLink: {
      pattern: "https://github.com/dino-proj/dino-docs/edit/master/src/:path",
    },

    algolia: {
      appId: "JBA7HX148U",
      apiKey: "1f524b1ac8351068f0bd4b2ad138df43",
      indexName: "dino-dev",
      placeholder: "搜索文档",
    },
  },

  sitemap: {
    hostname: "https://dinodev.cn",
  },
});
