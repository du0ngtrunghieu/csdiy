<script setup>
import Giscus from '@giscus/vue'
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'

const { isDark } = useData()
const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #doc-after>
      <div id="giscus">
        <Giscus id="comments" repo="mancuoj/csdiy" repoId="R_kgDOIcH4QA" category="Announcements"
          categoryId="DIC_kwDOIcH4QM4CSljH" mapping="pathname" strict="1" reactionsEnabled="1" emitMetadata="0"
          inputPosition="top" lang="zh-CN" loading="lazy" :theme="[isDark ? 'transparent_dark' : 'light_tritanopia']" />
      </div>
    </template>
  </Layout>
</template>

<style scoped>
#giscus {
  margin-top: 3.2rem;
}
</style>