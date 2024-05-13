import { createApp } from 'vue'

import Demo14Component from '../components/demo/demo14.vue'
import Demo15Component from '../components/demo/demo15.vue'
import Demo16Component from '../components/demo/demo16.vue'
import Demo17Component from '../components/demo/demo17.vue'

const demoInstance14 = createApp(Demo14Component);
demoInstance14.mount('#demo14');

const demoInstance15 = createApp(Demo15Component);
demoInstance15.mount('#demo15');

const demoInstance16 = createApp(Demo16Component);
demoInstance16.mount('#demo16');

const demoInstance17 = createApp(Demo17Component);
demoInstance17.mount('#demo17');