<template>
    <div class="sub-component-3">
        <!-- 呼叫此內部元件，顯示傳遞給 props 的物件的 name 屬性 -->
        <p>{{ item.name }}</p>
        <!-- 遞迴結束條件：當 item.chapter 存在且長度大於 0 時，繼續遞迴 -->
        <ul v-if="item.chapter && item.chapter.length">
            <li v-for="child in item.chapter" :key="child.id">
                <demo20-4-component :item="child"></demo20-4-component>
            </li>
        </ul>
        <!-- 遞迴結束條件：當 item.section 存在且長度大於 0 時，繼續遞迴 -->
        <ul v-if="item.section && item.section.length">
            <li v-for="child in item.section" :key="child.id">
                <demo20-4-component :item="child"></demo20-4-component>
            </li>
        </ul>
    </div>
</template> 

<script>
export default {
    name: 'demo20-4-component',
    props: {
        item: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>
.sub-component-3 {
    background-color: darkgray;
    border: 1px solid orange;
}
</style>
