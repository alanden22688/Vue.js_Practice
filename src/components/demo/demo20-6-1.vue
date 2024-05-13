<template>
    <div class="sub-component2">
        <h3>內部元件(孫)</h3>
        <div>{{ message }}</div>
    </div>
</template>

<script>
export default {
    name: 'Demo20_6_1Component',
    // 取得跨層級資料
    inject: ['message']
};
</script>

<style>
.sub-component2 {
    border: 1px solid #000;
    background-color: lightgray;
}
</style>