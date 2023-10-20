import { createApp } from 'vue'
import App from './App.vue'

let instance = null
const render = (props = {}) => {
  instance = createApp(App)
  instance.mount(props.container ? props.container.querySelector('#app') : '#app')
}

if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

async function bootstrap() {
  console.log('micro-a bootstraped')
}

async function mount(props) {
  console.log('micro-a mount', props)
  render(props)
}
async function unmount() {
  console.log('micro-a unmount')
  instance.unmount()
  instance._container.innerHTML = ''
  instance = null
}


window['micro-a'] = {
  bootstrap,
  mount,
  unmount,
}
