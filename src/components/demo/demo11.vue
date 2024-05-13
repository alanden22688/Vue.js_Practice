<template>
    <h1>{{ title }}</h1>
    <!-- 顯示訊息 -->
    <p>送出的訊息為：{{msg}}</p>
    <!-- 使用.enter和.exact表示鍵盤只有單獨按下Enter時，要做sendMessage -->
    <input type="text" v-on:keydown.exact="sendMessage" placeholder="請輸入訊息並按下Enter" />
</template>

<script>
export default {
    name: 'Demo11Component',
    data() {
        return {
            title: '鍵盤修飾字範例',
            msg: ''
        }
    },
    methods: {
        sendMessage(event) {
            // 取得按下的按鍵並顯示
            this.msg = event.target.value;
            // 清空輸入框
            event.target.value = '';
        }
    }
}
</script>