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
  console.log('micro-b bootstraped')
}

async function mount(props) {
  console.log('micro-b mount', props)
  render(props)
}
async function unmount() {
  console.log('micro-b unmount')
  instance.unmount()
  instance._container.innerHTML = ''
  instance = null
}


window['micro-b'] = {
  bootstrap,
  mount,
  unmount,
}
