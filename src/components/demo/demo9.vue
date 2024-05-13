<template>
    <h1>{{ title }}</h1>
    <div v-on:click="outerDiv" v-bind:class="'red-border'">
        <!-- 加上.stop，可以不觸發外面outerDiv的點擊事件。效果等同於stopPropagation() -->
        .stop: <input type="button" @click.stop="handleClick" value="點擊觸發事件" />
    </div>
    
    <div v-bind:class="'red-border'">
        <!-- 加上.prevent，可以停止DOM元素原本自帶的事件。效果等同於preventDefault() -->
        .prevent: <a href="https://www.google.com" @click.prevent="urlClick" >點擊觸發事件</a>
    </div>
    
    <!-- 當在外部元素上加上.capture，事件將從該元素開始，然後向子元素觸發 -->
    <div v-on:click.capture="outerDiv" v-bind:class="'red-border'">                
        .capture: <input type="button" @click="handleClick" value="點擊觸發事件" />
    </div>
   
    <!-- 點擊子元素時，不會觸發被設定元素的事件 -->
    <div v-on:click.self="outerDiv" v-bind:class="'red-border'">
        .self: <input type="button" @click="handleClick" value="點擊觸發事件" />
    </div>

    
    <div v-bind:class="'red-border'">
        <!-- 只會觸發一次事件 -->
        .once: <input type="button" @click.once="handleClick" value="點擊觸發事件" />
    </div>
    
    <div v-bind:class="'red-border'">
        .passive: 
        <!-- 不會停止原本自帶的事件，通常用在滾動、觸控事件上，改善效能。 -->
        <div v-on:scroll.passive="handleScroll" style="height: 200px; overflow: auto;">
            <div style="height: 500px;">滾動區域</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Demo9Component',
    data() {
        return {
            title: 'v-on事件通用修飾字'
        }
    },
    methods: {
        outerDiv() {
            console.log("Outer div 點擊");
        },
        handleClick() {
            console.log("按鈕已點擊");
        },
        urlClick() {
            console.log("超連結已點擊");
        },
        handleScroll() {
            console.log("滾動事件已觸發");
        }
    }
}
</script>

<style scoped>
.red-border {
    border: 1px solid black;
    /* 加入間隔 */
    margin: 10px;
    padding: 10px;
}
</style>