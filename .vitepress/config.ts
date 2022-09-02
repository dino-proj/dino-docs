import { defineConfigWithTheme } from 'vitepress'

import { DinoDocsThemeConfig } from './theme'
import { SidebarGroup } from './theme/config'
import baseConfig from './theme/config/baseConfig'

export default defineConfigWithTheme<DinoDocsThemeConfig>({
  extends: baseConfig,
  base: "/",
  srcDir: "src",
  title: "Dinodev.cn",
  lang: "zh-CN",
  description: "dino-spring框架使用文档",
  lastUpdated: true,

  markdown: {
    config: (md) => {
      md.use(require("markdown-it-task-lists"));
    },
  },

  themeConfig: {
    logo: "/images/logo.png",
    appearance: true,

    socialLinks: [
      { icon: "github", link: "https://github.com/dino-proj" },
      { icon: "gitee", link: "https://gitee.com/dino-proj" },
    ],

    editLink: {
      repo: "dino-proj/dino-docs",
      branch: "master",
      text: "Edit this page on GitHub",
    },

    algolia: {
      appId: "JBA7HX148U",
      apiKey: "1f524b1ac8351068f0bd4b2ad138df43",
      indexName: "dino-dev",
    },

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
            ],
          },
          {
            text: "教程",
            items: [
              { text: "Dino Spring", link: "/dino-spring/guide" },
              { text: "Dino Spring Cloud", link: "/dino-spring/guide" },
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
      license: {
        text: "Apache-2.0 License",
        link: "https://opensource.org/licenses/Apache-2.0",
      },
      copyright: `Copyright © 2021-${new Date().getFullYear()} dinodev.cn`,
      beian: "京ICP备16008166号-7",
    },
  },

  vite: {
    server: {
      host: true,
      fs: {
        // for when developing with locally linked theme
        allow: ["../.."],
      },
    },
    resolve: {
      alias: { "@theme": "/.vitepress/theme" },
    },
    build: {
      minify: "terser",
      chunkSizeWarningLimit: Infinity,
    },
    json: {
      stringify: true,
    },
  },

  shouldPreload: (link) => {
    // make algolia chunk prefetch instead of preload
    return !link.includes("Algolia");
  },
});

function getGuideSidebar() {
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

function getCliSidebar(): SidebarGroup[] {
  return [
    {
      text: "快速开始",
      items: [
        { text: "Home", link: "/dino-cli/index" },
        { text: "介绍", link: "/dino-cli/guid" },
        { text: "安装", link: "/dino-cli/install" },
      ],
    },
    {
      text: "基础",
      items: [
        { text: "创建工程", link: "/dino-cli/create-project" },
        { text: "spring项目配置", link: "/dino-cli/config-dino-spring" },
        { text: "spring代码生成", link: "/dino-cli/code-dino-spring" },
      ],
    },
    {
      text: "dino-spring模板",
      items: [
        { text: "模板介绍", link: "/dino-cli/dino-spring-tmpl" },
        { text: "CRUD模块", link: "/dino-cli/dino-spring-tmpl-crud" },
      ],
    },
    {
      text: "dino-vue3模板",
      items: [
        { text: "模板介绍", link: "/dino-cli/dino-vue3-tmpl" },
        { text: "CRUD模块", link: "/dino-cli/dino-vue3-tmpl-crud" },
      ],
    },
  ];
}
