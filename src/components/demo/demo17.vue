<template>
    <div>
        <h1>{{ title }}</h1>
        <h2>陣列資料</h2>
        <ul>
            <!-- 取得陣列的索引值，當作key值 -->
            <li v-for="(data, index) in array" v-bind:key="index">{{ data }}</li>
        </ul>
        <h2>物件資料</h2>
        <ul>
            <!-- 使用物件本身的id，當作key值-->
            <li v-for="item in items" v-bind:key="item.id">{{ item.name }}</li>
        </ul>
        <h2>重複特定次數</h2>
        <ul>
            <!-- 重複特定次數的元素 -->
            <li v-for="count in 10" v-bind:key="count">這是第 {{ count }} 次重複的元素</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Demo17Component',
    data() {
        return {
            title: 'v-for迴圈',
            // 陣列資料
            array: ['SQL', 'Java', 'C#', 'Kotlin', 'Vue', 'React', 'Docker'],
            // 物件資料
            items: [
                { id: 1, name: '項目1' },
                { id: 2, name: '項目2' },
                { id: 3, name: '項目3' }
            ]
        }
    }
};
</script>
