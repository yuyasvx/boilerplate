<template>
  <div class="vue-window-frame">
    <div v-if="option.titleBarStyle !== 'hidden'" class="vue-window-frame__title-bar" :style="createStyle()">
      <div class="vue-window-frame__title-bar--head" :style="titleBarHeadStyle" />
      <div class="vue-window-frame__title-bar--content" :style="titleBarContentStyle">
        <span ref="titleBarContent">{{ title }}</span>
      </div>
      <div class="vue-window-frame__title-bar--tail" />
      <div class="vue-window-frame__title-bar--caption" />
    </div>
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

export interface WindowFrameOption {
  touchBarSupport: boolean
  os: 'mac' | 'win'
  titleBarStyle: 'default' | 'hidden' | 'hiddenInset'
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isElement = (item: any): item is Element => item instanceof Element

@Component
export default class WindowFrame extends Vue {
  public static TRAFFIC_LIGHTS_WIDTH = 68

  @Prop({
    default() {
      return { touchBarSupport: true, os: 'mac', titleBarStyle: 'default' }
    }
  })
  private option!: WindowFrameOption

  @Prop({ default: '', required: false })
  private title!: string

  titleBarContentBound: ClientRect | DOMRect | undefined

  titleBarHeadStyle: object | undefined = { width: `${WindowFrame.TRAFFIC_LIGHTS_WIDTH}px` }

  get titleBarContentStyle() {
    let style = {}
    if (this.titleBarContentBound == null) {
      return style
    }
    if (this.titleBarContentBound.left >= WindowFrame.TRAFFIC_LIGHTS_WIDTH) {
      style = { textAlign: 'center', textIndent: '0px' }
    } else {
      style = { textAlign: 'left', textIndent: `${WindowFrame.TRAFFIC_LIGHTS_WIDTH}px` }
    }
    return style
  }

  createStyle() {
    let style = {}
    if (this.option.titleBarStyle === 'default') {
      style = { ...style, height: '21px', lineHeight: '22px' }
    } else if (this.option.titleBarStyle === 'hiddenInset') {
      style = { ...style, height: '39px', lineHeight: '40px' }
    }
    return style
  }

  mounted() {
    let elm: Element | undefined
    if (isElement(this.$refs.titleBarContent)) {
      elm = this.$refs.titleBarContent
      this.titleBarContentBound = elm.getBoundingClientRect()
    }
    window.addEventListener('resize', () => {
      this.titleBarContentBound = elm != null ? elm.getBoundingClientRect() : this.titleBarContentBound
      // console.log(this.titleBarContentBound)
    })
  }

  beforeDestroy() {
    // document.removeEventListener()
  }
}
</script>

<style lang="scss"></style>

<style scoped>
.vue-window-frame {
  font-family: BlinkMacSystemFont, sans-serif;
  position: relative;
  font-size: 13px;
  text-align: unset;
}
.vue-window-frame__title-bar {
  -webkit-app-region: drag;
  -webkit-user-select: none;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #dfdfdf;
  border-bottom: 1px solid #b9b9b9;
  color: #333333;
  width: 100%;
}
.vue-window-frame__title-bar--content {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.vue-window-frame__title-bar--head {
  background: #000;
  height: 100%;
  position: absolute;
}
</style>
