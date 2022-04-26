<script setup lang="ts">
import { computed, defineCustomElement, h, ref } from 'vue'
import { useData, withBase } from 'vitepress'

const { site, frontmatter } = useData()

const showHero = computed(() => {
  const { image, title, subTitle, action } =
    frontmatter.value.hero
  return image || title || subTitle || action
})

const heroTitle = computed(() => {
    let title:string = frontmatter.value.hero.title || site.value.title
    if(title.indexOf('\\n') > -1) {
      title = title.replace(/\\n/g, '<br/>')
    }
    if(title.indexOf('`') > -1) {
      title = title.replace(/`([^`]*)`/g, '<span class="accent">$1</span>')
    }
    return title
})

const description = computed(
  () => frontmatter.value.hero.subTitle || site.value.description
)
const hero = ref(frontmatter.value.hero)

const hasFeatures = computed(() => {
  return hero.value.features && hero.value.features.length > 0
})

interface Feature {
  title?: string
  details?: string
}

const features = computed<Feature[]>(() => {
  return hero.value.features ? hero.value.features : []
})
</script>

<template>
 <section id="hero">
    <figure v-if="hero.image" class="figure">
      <img
        class="image"
        :src="withBase(hero.image)"
        :alt="hero.imageAlt"
      />
    </figure>
    <h1 class="hero-title" v-html="heroTitle"></h1>
    <p class="description">
      {{ description }}
    </p>
    <p class="actions">
      <a :class="action.class" :href="action.link"  v-for="action in hero.actions">
        {{ action.text }}
        <svg v-if="action.icon == 'go'"
          class="icon"
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 24 24"
        >
          <path
            d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"
          />
        </svg>
      </a>
    </p>
  </section>


  <section id="highlights" class="vt-box-container fetures" v-if="hasFeatures">
    <div class="vt-box"
            v-for="(feature, index) in features"
            :key="index">
      <h2>{{ feature.title }}</h2>
      <p>
      {{ feature.details }}
      </p>
    </div>
  </section>

</template>

<style>
html:not(.dark) .accent {
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
<style scoped>

section {
  padding: 22px 10px;
}
#hero {
  padding: 96px 32px;
  text-align: center;
}
.hero-title {
  font-size: 56px;
  font-family: 'silka','sans-serif';
  line-height: 1.4em;
  font-weight: 800;
  letter-spacing: +.06666667em;
  max-width: 960px;
  margin: 0px auto;
  -webkit-font-smoothing: antialiased;
}
.dark .hero-title {
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.description {
  max-width: 960px;
  line-height: 1.5;
  color: var(--vt-c-text-2);
  transition: color 0.5s;
  font-size: 22px;
  margin: 24px auto 40px;
}

.actions a {
  font-size: 16px;
  display: inline-block;
  background-color: var(--vt-c-bg-mute);
  padding: 8px 1em 8px 1em;
  font-weight: 500;
  border-radius: 8px;
  transition: background-color 0.5s, color 0.5s;
   margin-right: 18px;
}
.actions:last-child{
   margin-right: 0;
}
.actions .primary {
  font-weight: 600;
  background-color: var(--vt-c-green);
  color: #fff;
}
.dark .actions .primary {
  color: var(--vt-c-indigo);
}
.actions .primary:hover {
  background-color: var(--vt-c-green-dark);
  transition-duration: 0.2s;
}
.dark .actions .primary:hover {
  background-color: var(--vt-c-green-light);
}
.actions .icon {
  display: inline;
  position: relative;
  top: -1px;
  margin-left: 2px;
  fill: currentColor;
  transition: transform 0.2s;
}
.actions .plain:hover {
  transition-duration: 0.2s;
}
.actions .plain:hover .icon {
  transform: translateX(2px);
}
.actions .plain,
.actions .setup {
  color: var(--vt-c-text-code);
}
.actions .plain:hover,
.actions .setup:hover {
  background-color: var(--vt-c-gray-light-4);
  transition-duration: 0.2s;
}
.dark .actions .plain:hover,
.dark .actions .setup:hover {
  background-color: var(--vt-c-gray-dark-3);
}
#special-sponsor {
  border-top: 1px solid var(--vt-c-divider-light);
  border-bottom: 1px solid var(--vt-c-divider-light);
  padding: 12px 24px;
  text-align: center;
}
#special-sponsor span {
  color: var(--vt-c-text-2);
  font-weight: 500;
  font-size: 13px;
  vertical-align: middle;
  margin: 0 24px;
}
#special-sponsor img {
  display: inline-block;
  vertical-align: middle;
  height: 36px;
}
.dark #special-sponsor img {
  filter: grayscale(1) invert(1);
}

.fetures {
  border-top: 1px solid var(--vt-c-divider-light);
}
#highlights {
  max-width: 960px;
  margin: 0px auto;
  color: var(--vt-c-text-2);
}
#highlights h2 {
  font-weight: 600;
  font-size: 20px;
  letter-spacing: -0.4px;
  color: var(--vt-c-text-1);
  transition: color 0.5s;
  margin-bottom: 0.75em;
}
#highlights p {
  font-weight: 400;
  font-size: 15px;
}
#highlights .vt-box {
  background-color: transparent;
}
#sponsors {
  max-width: 900px;
  margin: 0px auto;
}
#sponsors h2 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 1em;
}
#sponsors .sponsor-container {
  margin-bottom: 3em;
}
@media (max-width: 960px) {
  .hero-title {
    font-size: 64px;
    letter-spacing: -0.5px;
  }
  .description {
    font-size: 18px;
    margin-bottom: 48px;
  }
}
@media (max-width: 768px) {
  .hero-title {
    font-size: 48px;
    letter-spacing: -0.5px;
  }
}
@media (max-width: 576px) {
  #hero {
    padding: 64px 32px;
  }
  .description {
    font-size: 16px;
    margin: 18px 0 30px;
  }
  #special-sponsor img {
    display: block;
    margin: 2px auto 1px;
  }
  #highlights h3 {
    margin-bottom: 0.6em;
  }
  #highlights .vt-box {
    padding: 20px 36px;
  }
  .actions a {
    margin: 0.5em 0;
  }
}
@media (max-width: 370px) {
  .hero-title {
    font-size: 36px;
  }
}
</style>
