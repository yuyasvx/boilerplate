<template>
  <div class="ds-base" :class="decideTheme()">
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class DashiBase extends Vue {
  @Prop({ required: false, default: () => null })
  private theme: string | null = null

  private decideTheme() {
    return ['--theme-hoge']
  }
}
</script>

<style scoped></style>
