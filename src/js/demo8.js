import { createApp } from 'vue'

import Demo22Component from '../components/demo/demo22.vue'

// 建立一個Vue物件，根組件為Demo22Component
const demoInstance22 = createApp(Demo22Component);

demoInstance22.mount('#demo22');