<template>
    <h1>{{ title }}</h1>
    <!-- 取得被按下的按鍵 -->
    <p>按下的按鍵為：{{pressKey}}</p>
    <!-- 可用keyup或keydown取得 -->
    <input type="text" v-on:keyup="press" placeholder="請在這裡按下按鍵" />
</template>

<script>
export default {
    name: 'Demo10Component',
    data() {
        return {
            title: '透過event取得鍵盤輸入',
            pressKey: ''
        }
    },
    methods: {
        press(event) {
            // 取得按下的按鍵並顯示
            this.pressKey = event.key;
            // 清空輸入框
            event.target.value = '';
        }
    }
}
</script>