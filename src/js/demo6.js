import { createApp } from 'vue'

import Demo20Component from '../components/demo/demo20.vue'

// 建立一個Vue物件，根組件為Demo20Component
const demoInstance20 = createApp(Demo20Component);

demoInstance20.mount('#demo20');