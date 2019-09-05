<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { ipcRenderer } from 'electron'
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/renderer/components/HelloWorld.vue' // @ is an alias to /src
import ExampleStore from '@/renderer/store/ExampleStore'

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  get count() {
    return ExampleStore.count
  }

  increment() {
    return ExampleStore.increment(1)
  }

  mounted() {
    ipcRenderer.on('pong', () => {
      // event: Electron.Event, data: unknown
      // console.log(data)
    })
    ipcRenderer.send('ping', 'ping')
  }
}
</script>
