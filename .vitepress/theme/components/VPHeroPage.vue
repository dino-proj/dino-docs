<script lang="ts" setup>
import { useData } from "vitepress";
import VPFooter from "./VPFooter.vue";

import Hero from "./Hero.vue";

const { frontmatter } = useData();

frontmatter.value.aside = false;
</script>

<template>
  <div class="VPHeroPage">
    <div class="container">
      <div class="content">
        <!-- A slot for customizing the entire homepage easily -->
        <main class="home" aria-labelledby="main-title">
          <Hero />
          <slot name="hero" />
        </main>
        <main>
          <Content class="vt-doc" :class="pageClass" />
        </main>
      </div>
    </div>
  </div>
  <slot name="footer-before" />
  <VPFooter />
  <slot name="footer-after" />
</template>

<style scoped>
.VPHeroPage {
  padding: 0 24px 96px;
}

.vt-doc {
  margin-bottom: 54px;
}
.vt-doc /deep/ h2 {
  margin-top: 0px;
}
.content {
  margin: 0 auto;
  max-width: 688px;
  position: relative;
}

.vt-icon {
  width: 18px;
  height: 18px;
  color: var(--vt-c-brand);
  display: inline-block;
  margin-right: 8px;
  position: relative;
  top: -1px;
}

@media (min-width: 768px) {
  .VPHeroPage {
    padding: 0 32px 96px;
  }
}

@media (min-width: 960px) {
  .VPHeroPage {
    padding: 0 64px 96px;
  }
}

@media (min-width: 1280px) {
  .VPHeroPage {
    padding: 0 0 96px 64px;
  }
  .VPHeroPage:not(.has-sidebar.has-aside) {
    padding-left: calc((100vw - 960px) / 2);
  }
  .VPHeroPage.has-aside:not(.has-sidebar) {
    padding-left: calc((100vw - 960px - 320px) / 2);
  }
  .container {
    display: flex;
  }
  .content {
    min-width: 620px;
    margin: 0;
    order: 1;
  }
  .VPHeroPage:not(.has-aside) .content {
    min-width: 960px;
  }
}

@media (min-width: 1440px) {
  .VPHeroPage {
    padding: 0 0 96px 96px;
  }
  .aside {
    padding-left: 96px;
  }
}
</style>
