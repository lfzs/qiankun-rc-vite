import { createApp } from 'vue'
import { registerMicroApps, start } from 'qiankun'
import App from './App.vue'

createApp(App).mount('#root')

registerMicroApps([
  {
    name: 'micro-a',
    container: document.querySelector('#container'),
    activeRule: 'micro-a',
    entry: 'http://localhost:7002/index.html',
  },
  {
    name: 'micro-b',
    container: document.querySelector('#container'),
    activeRule: 'micro-b',
    entry: 'http://localhost:7003/index.html',
  },
])

start()
