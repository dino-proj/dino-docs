import { defineConfigWithTheme } from 'vitepress'

import { DinoDocsThemeConfig } from './theme'

export default defineConfigWithTheme<DinoDocsThemeConfig>({
  base: "/",
  srcDir: "src",
  title: "Dinodev.cn",
  lang: "zh-CN",
  description: "dino-spring框架使用文档",
  lastUpdated: true,

  themeConfig: {
    logo: "/images/logo.png",
    appearance: true,

    socialLinks: [
      { icon: "github", link: "https://github.com/tuuboo/dino-spring" },
    ],

    editLink: {
      repo: "tuuboo/dino-docs",
      text: "Edit this page on GitHub",
    },

    algolia: {
      appId: "JBA7HX148U",
      apiKey: "1f524b1ac8351068f0bd4b2ad138df43",
      indexName: "dino-dev",
    },

    nav: [
      { text: "Guide", link: "/", activeMatch: "^/$|^/guide/" },
      {
        text: "Config Reference",
        link: "/config/basics",
        activeMatch: "^/config/",
      },
      {
        text: "Release Notes",
        link: "https://github.com/vuejs/vitepress/releases",
      },
    ],

    sidebar: {
      "/guide/": getGuideSidebar(),
      "/config/": getConfigSidebar(),
      "/": getGuideSidebar(),
    },
    footer: {
      license: {
        text: "Apache-2.0 License",
        link: "https://opensource.org/licenses/Apache-2.0",
      },
      copyright: `Copyright © 2021-${new Date().getFullYear()} dinodev.cn`,
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
      text: "Introduction",
      items: [
        { text: "What is VitePress?", link: "/" },
        { text: "Getting Started", link: "/guide/getting-started" },
        { text: "Configuration", link: "/guide/configuration" },
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
