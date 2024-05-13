<template>
    <div>
        <input type="text" v-model="inputText" placeholder="請輸入文字"/>
    </div>
</template>

<script>
export default {
    name: 'Demo20_5Component',
    data() {
        return {
            inputText: ''
        };
    },
    // 監聽inputText的變化，並觸發自訂事件
    watch: {
        inputText(newVal) {
            this.$emit('customEvent', newVal);
        }
    }
};
</script>