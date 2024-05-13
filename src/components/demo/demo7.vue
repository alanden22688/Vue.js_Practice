<template>
    <h1>{{ title }}</h1>
    <div>
        <!-- 直接寫運算式 -->
        <p><input type="button" value="點我增加" v-on:click="count++" />: {{ count }}</p>
        <!-- 透過方法表示 -->
        <p><input type="button" value="點我也會增加" v-on:click="plus" />: {{ count2 }}</p>
    </div>
</template>

<script>
export default {
    name: 'Demo7Component',
    data() {
        return {
            title: '事件綁定',
            count: 0,
            count2: 0
        }
    },
    methods: {
        plus() {
            this.count2 += 1
        }
    }
}
</script>   