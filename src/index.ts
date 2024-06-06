// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')
import { VideoPlayer } from './components'
import type { App } from 'vue'

export default {
  install: (app: App) => {
    app.component('VideoPlayer', VideoPlayer)
  }
}

export { VideoPlayer }
