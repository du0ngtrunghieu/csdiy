<script setup>
import Giscus from '@giscus/vue'
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #doc-after>
      <div style="margin-top: 2rem;" >
        <Giscus id="comments" repo="mancuoj/discussions" repoId="R_kgDOIcaOPg" category="Announcements"
          categoryId="DIC_kwDOIcaOPs4CSlbm" mapping="url" term="畅所欲言吧 😆" strict="0" reactionsEnabled="0"
          emitMetadata="0" inputPosition="top" theme="preferred_color_scheme" lang="zh-CN" loading="lazy" />
      </div>
    </template>
  </Layout>
</template>