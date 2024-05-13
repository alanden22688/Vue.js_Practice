<template>
    <h1>{{ title }}</h1>
    <div>    
        <p>輸入要增加的數字: <input type="text" v-model.number="amount" /></p>
        <!-- 透過特殊變數$event表示傳入event，方便方法使用 -->
        <p><input type="button" value="點我增加" v-on:click="plus(amount,$event)" />: {{ count }}</p>
    </div>
</template>

<script>
export default {
    name: 'Demo8Component',
    data() {
        return {
            title: 'v-on與Event物件',
            count: 0,
            amount: 0
        }
    },
    methods: {
        plus(amount, event) {            
            // 判斷amount是否為數字
            if (typeof amount === 'number') {
                this.count += amount;
            } else {
                console.log('請輸入有效的數字');
            }
            // 印出Event物件資訊
            console.log(event);
        }
    }
}
</script>

