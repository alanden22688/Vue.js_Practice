import { createApp } from 'vue'

import Demo21Component from '../components/demo/demo21.vue'
import { defineAsyncComponent } from 'vue';

// 建立一個Vue物件，根組件為Demo21Component
const demoInstance21 = createApp(Demo21Component);

// 臨時註冊元件
// 將tab-home註冊為非同步元件
demoInstance21.component('tab-home', defineAsyncComponent(() => Promise.resolve({
    name: 'tab-home',
    template: `
        <div><input type="text" v-model="message"></div>
    `,
    data() {
        return {
            message: 'Home component'
        }
    },
    created() {
        this.$emit('lifecycleEvent', `${this.$options.name} Created.`);
    },
    mounted() {
        this.$emit('lifecycleEvent', `${this.$options.name} Mounted.`);
    },
    unmounted() {
        this.$emit('lifecycleEvent', `${this.$options.name} Unmounted.`);
    },
    activated() {
        this.$emit('lifecycleEvent', `${this.$options.name} Activated.`);
    },
    deactivated() {
        this.$emit('lifecycleEvent', `${this.$options.name} Deactivated.`);
    }
})));

// 假設tab-home是vue檔案，且需要非同步載入
// demoInstance21.component('tab-home', defineAsyncComponent(() => import('../components/tabs/TabHome.vue')));

demoInstance21.component('tab-posts', {
    name: 'tab-posts',
    template: `
        <div><input type="text" v-model="message"></div>
    `,
    data() {     
        return {
            message: 'Posts component'
        }
    },
    created() {
        this.$emit('lifecycleEvent', `${this.$options.name} Created.`);
    },
    mounted() {
        this.$emit('lifecycleEvent', `${this.$options.name} Mounted.`);
    },
    unmounted() {
        this.$emit('lifecycleEvent', `${this.$options.name} Unmounted.`);
    },
    activated() {
        this.$emit('lifecycleEvent', `${this.$options.name} Activated.`);
    },
    deactivated() {
        this.$emit('lifecycleEvent', `${this.$options.name} Deactivated.`);
    }
});


demoInstance21.component('tab-archive', {
    name: 'tab-archive',
    template: `
        <div><input type="text" v-model="message"></div>
    `,
    data() {
        return {
            message: 'Archive component'
        }
    },
    created() {
        this.$emit('lifecycleEvent', `${this.$options.name} Created.`);
    },
    mounted() {
        this.$emit('lifecycleEvent', `${this.$options.name} Mounted.`);
    },
    unmounted() {
        this.$emit('lifecycleEvent', `${this.$options.name} Unmounted.`);
    },
    activated() {
        this.$emit('lifecycleEvent', `${this.$options.name} Activated.`);
    },
    deactivated() {
        this.$emit('lifecycleEvent', `${this.$options.name} Deactivated.`);
    }
});

demoInstance21.mount('#demo21');