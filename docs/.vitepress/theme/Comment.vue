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
      <div style="margin-top: 2rem;">
        <Giscus id="comments" repo="mancuoj/csdiy" repoId="R_kgDOIcH4QA" category="Announcements"
          categoryId="DIC_kwDOIcH4QM4CSljH" mapping="pathname" strict="1" reactionsEnabled="1"
          emitMetadata="0" inputPosition="top" lang="zh-CN" loading="lazy"
          :theme="[isDark ? 'dark_tritanopia' : 'light_tritanopia']" />
      </div>
    </template>
  </Layout>
</template>