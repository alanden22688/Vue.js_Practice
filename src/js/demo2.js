import { createApp } from 'vue'

import Demo7Component from '../components/demo/demo7.vue'
import Demo8Component from '../components/demo/demo8.vue'
import Demo9Component from '../components/demo/demo9.vue'
import Demo10Component from '../components/demo/demo10.vue'
import Demo11Component from '../components/demo/demo11.vue'
import Demo12Component from '../components/demo/demo12.vue'
import Demo13Component from '../components/demo/demo13.vue'

const demoInstance7 = createApp(Demo7Component);
demoInstance7.mount('#demo7');

const demoInstance8 = createApp(Demo8Component);
demoInstance8.mount('#demo8');

const demoInstance9 = createApp(Demo9Component);
demoInstance9.mount('#demo9');

const demoInstance10 = createApp(Demo10Component);
demoInstance10.mount('#demo10');

const demoInstance11 = createApp(Demo11Component);
demoInstance11.mount('#demo11');

const demoInstance12 = createApp(Demo12Component);
demoInstance12.mount('#demo12');

const demoInstance13 = createApp(Demo13Component);
demoInstance13.mount('#demo13');