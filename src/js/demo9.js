import { createApp } from 'vue'

import Demo23Component from '../components/demo/demo23.vue'

// 建立一個Vue物件，根組件為Demo23Component
const demoInstance23 = createApp(Demo23Component);

demoInstance23.mount('#demo23');