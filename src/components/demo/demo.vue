<template>
    <div>
        <p>{{ title }}</p>
        <p>{{ message }}</p>
        <p>總價: {{ totalPrice() }}</p>
        <p>總價: {{ computedPrice }}</p>
    </div>
</template>

<script>
import { h } from 'vue'

export default {
    name: 'DemoComponent', // 元件名稱
    data() {
        return {
            title: 'Vue 物件',
            message: 'Hello Vue 3!',
            price1: 100,
            price2: 450
        }
    },
    methods: {
        totalPrice(){
            return this.price1 + this.price2;
        }
    },
    // 計算屬性，值會被暫存，只有屬性被改變時，才會重新計算。
    computed: {
        computedPrice(){
            return this.price1 + this.price2;
        } 
    },
    render() {
        return h('div', {}, [
            h('p', {}, this.message),
            h('p', {}, '總價: ' + this.totalPrice()),
            h('p', {}, '總價: ' + this.computedPrice)
        ]);
    }
}
</script>