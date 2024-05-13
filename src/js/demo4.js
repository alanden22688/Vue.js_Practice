import { createApp } from 'vue'

import Demo18Component from '../components/demo/demo18.vue'
import Demo19Component from '../components/demo/demo19.vue'

// 生命週期
const demoInstance18 = createApp(Demo18Component);
demoInstance18.mount('#demo18');

// 畫面更新與同步
const demoInstance19 = createApp(Demo19Component);
demoInstance19.mount('#demo19');