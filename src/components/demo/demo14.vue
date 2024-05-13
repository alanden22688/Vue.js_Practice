<template>
    <h1>{{ title }}</h1>

    <!-- 比較 v-if 和 v-show -->
    <div>
        <p>需要開啟開發者工具，觀察差別。</p>
        <input type="checkbox" v-model="isShow" /> isShow: {{ isShow }}        
        <div v-if="isShow">
            <h2>這是使用 v-if 控制的元素</h2>
        </div>

        <div v-show="isShow">
            <h2>這是使用 v-show 控制的元素</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Demo14Component',
    data() {
        return {
            title: '比較 v-if 和 v-show',
            isShow: true
        };
    },
};
</script>