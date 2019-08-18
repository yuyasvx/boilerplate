<template>
  <div id="app">
    <window-frame :option="option" title="electron-and-vue">
      <router-view />
    </window-frame>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import WindowFrame from '@/renderer/components/WindowFrame.vue'

@Component({
  components: {
    WindowFrame
  }
})
export default class About extends Vue {
  option = {
    touchBarSupport: false,
    os: 'mac',
    titleBarStyle: 'default'
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: subpixel-antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
