<template>
    <h1>{{ title }}</h1>
    <div>
        <!-- 離開焦點才更新 -->
        .lazy demo:
        <input v-model.lazy="inputValue" type="text">
        <p>{{ inputValue }}</p>

        <!-- 嘗試將輸入內容轉為數字 -->
        .number demo:
        <input v-model.number="numberValue1"> + <input v-model.number="numberValue2"> = {{ sum }}

        <!-- 去除前後空白 -->
        <p>.trim demo: <input v-model.trim="trimValue" type="text"> </p>
        <p>{{ trimValue }}</p>
    </div>
</template>

<script>
export default {
    name: 'Demo4Component',
    data() {
        return {
            title: 'v-model修飾字',
            inputValue: '離開焦點才更新',
            numberValue1: 0,
            numberValue2: 0,  
            trimValue: '  去除前後空白       '
        }
    },
    computed: {
        sum() {
            return this.numberValue1 + this.numberValue2
        }
    }
}
</script>
