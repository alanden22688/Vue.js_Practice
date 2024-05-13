import { createApp } from 'vue'

import Demo18Component from '../components/demo/demo18.vue'
import Demo5Component from '../components/demo/demo5.vue'

// 建立一個Vue物件
const vueInstance = createApp({});

// 全域元件(以之前的Demo示範)
vueInstance.component('demo18-component', Demo18Component);
vueInstance.component('demo5-component', Demo5Component);

// 掛載到appDemo
vueInstance.mount('#appDemo');