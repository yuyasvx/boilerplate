<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Meta } from '@/renderer/lib/vue-meta-decorator'

@Component
export default class About extends Vue {
  @Meta
  metaInfo() {
    return {
      title: 'electron-and-vue タイトルが長すぎる　タイトルが長すぎる　タイトルが長すぎる　タイトルが長すぎる'
    }
  }
}
</script>

<style scoped>
h1 {
  margin: 0;
  padding: 20px 0;
}
</style>
