import { createApp } from 'vue'
import App from '@/App.vue'
import PlaygroundIndex from '@/views/playground/PlaygroundIndex.vue'

import '@/assets/css/tailwind.css'
import '@/assets/css/font.css'
import 'animate.css'
import { setup } from '@/utils/bootstrap'

setup({
  onProduction: () => createApp(App).mount('#app'),
  onDevelopment: () => createApp(PlaygroundIndex).mount('#app')
})
