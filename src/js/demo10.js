import { createApp } from 'vue'
import Demo24Component from '../components/demo/demo24.vue'
// 匯入store
import store from './modules/store'

const demoInstance24 = createApp(Demo24Component);

demoInstance24.use(store)

demoInstance24.mount('#demo24');