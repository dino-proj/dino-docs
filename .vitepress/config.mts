import { defineConfig } from "vitepress";
import type { DefaultTheme } from "vitepress/types/default-theme";
import markdownitTaskLists from "markdown-it-task-lists";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/",
  srcDir: "src",
  cacheDir: "./node_modules/.vitepress",
  title: "Dinodev.cn",
  description: "Dino开发框架使用文档，基于Spring Boot3 & Vue3",
  lang: "zh-CN",
  lastUpdated: true,

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
              { text: "Dino Spring Cloud", link: "/dino-spring-cloud/" },
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
      "/guide/": getGuideSidebar(),
      "/config/": getConfigSidebar(),
      "/dino-cli/": getCliSidebar(),
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

function getGuideSidebar(): DefaultTheme.SidebarItem[] {
  return [
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
}

function getConfigSidebar() {
  return [
    {
      text: "App Config",
      items: [{ text: "Basics", link: "/config/basics" }],
    },
    {
      text: "Theme Config",
      items: [
        { text: "Homepage", link: "/config/homepage" },
        { text: "Algolia Search", link: "/config/algolia-search" },
        { text: "Carbon Ads", link: "/config/carbon-ads" },
      ],
    },
  ];
}

function getCliSidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "快速开始",
      collapsed: false,
      items: [
        { text: "Home", link: "/dino-cli/" },
        { text: "介绍", link: "/dino-cli/guid" },
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
}
