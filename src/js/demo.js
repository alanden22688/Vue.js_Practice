// 從Node.js(node_modules)引入Vue 3的createApp
import { createApp } from 'vue'

// 從.vue檔引入DemoComponent
import DemoComponent from '../components/demo/demo.vue'
import Demo2Component from '../components/demo/demo2.vue'
import Demo3Component from '../components/demo/demo3.vue'
import Demo4Component from '../components/demo/demo4.vue'
import Demo5Component from '../components/demo/demo5.vue'
import Demo6Component from '../components/demo/demo6.vue'

// 建立Vue 3的物件並掛載
const demoInstance = createApp(DemoComponent);
demoInstance.mount('#demo');

const demoInstance2 = createApp(Demo2Component);
demoInstance2.mount('#demo2');

const demoInstance3 = createApp(Demo3Component);
demoInstance3.mount('#demo3');

const demoInstance4 = createApp(Demo4Component);
demoInstance4.mount('#demo4');

const demoInstance5 = createApp(Demo5Component);
demoInstance5.mount('#demo5');

const demoInstance6 = createApp(Demo6Component);
demoInstance6.mount('#demo6');