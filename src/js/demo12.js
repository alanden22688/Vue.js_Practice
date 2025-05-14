import { createApp } from 'vue'
import Demo26Component from '../components/demo/demo26.vue'
import router from './route/router';


const demoInstance26 = createApp(Demo26Component);

demoInstance26.use(router).mount('#demo26');