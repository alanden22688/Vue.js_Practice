<template>
    <div>
        <h1>{{ title }}</h1>
        <!-- 使用子元件(後續)，方便建立/銷毀元件，觀察生命週期-->              
        <demo18-2-component v-if="showComponent" 
                           v-on:lifecycleEvent="updateLifecycle" />
        <!-- 切換按鈕，用來銷毀/建立元件 -->
        <div>
            <button v-on:click="toggleComponent">{{ buttonText }}</button>
        </div>
        <!-- 顯示生命週期訊息 -->
        <p v-html="lifecycle"></p> 
    </div>
</template>

<script>
import Demo18_2Component from './demo18-2.vue'

export default {
    name: 'Demo18Component',
    // 表示元件Demo18Component使用子元件Demo18_2Component，此處為區域元件
    components: {
        'demo18-2-component': Demo18_2Component
    },
    data() {
        return {
            title: '生命週期順序',
            lifecycle: '',
            showComponent: true,
            buttonText: '銷毀元件'
        }
    },
    methods: {
        // 切換元件狀態
        toggleComponent() {
            this.showComponent = !this.showComponent;
            this.buttonText = this.showComponent ? '銷毀元件' : '創建元件';
            // 如果建立新元件，則清空前一次的生命週期訊息
            if(this.showComponent) {
                this.lifecycle = '';
            }
        },
        // 更新生命週期訊息
        updateLifecycle(lifecycleName, inputValue) {
            this.lifecycle += `${lifecycleName}: ${inputValue} <br>`;
        }
    }
};
</script>