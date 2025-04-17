import { createApp } from 'vue'
import Demo25Component from '../components/demo/demo25.vue'
// 匯入store
import store from './modules/mainStore'

const demoInstance25 = createApp(Demo25Component);

demoInstance25.use(store)

demoInstance25.mount('#demo25');