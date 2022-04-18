<script setup lang="ts">
import { withBase, useData } from 'vitepress'
const { site, theme, localePath } = useData()
</script>

<template>
  <a class="VPNavBarTitle" :href="localePath">
    <img
      v-if="theme.logo"
      class="logo"
      :src="withBase(theme.logo)"
      alt="Logo"
    />
    <span class="text">{{ site.title }}</span>
  </a>
</template>

<style scoped>
.VPNavBarTitle {
  display: flex;
  align-items: center;
  padding-top: 1px;
  height: var(--vt-nav-height);
  transition: opacity 0.25s;
}

.VPNavBarTitle:hover {
  opacity: 0.6;
}

.logo {
  position: relative;
  height: 24px;
  vertical-align: bottom;
}


.logo + .text {
  padding-left: 6px;
}

.text {
  font-size: 16px;
  font-weight: 500;
}
</style>
