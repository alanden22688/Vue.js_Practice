<template>
    <h1>{{ title }}</h1>
    <div>
        <!-- 使用v-model雙向綁定，方便更新資料 -->
        <p>編輯用輸入框(v-model雙向綁定): <span><input v-model="rawContent" type="text"></span></p>
        
        <!-- v-text內容，只顯示純文字內容 -->
        <p>v-text內容: <span v-text="rawContent"></span></p>
       
        <!-- v-html內容，可包含HTML標籤 -->
        <p>v-html內容: <span v-html="rawContent"></span></p>
        
        <!-- v-once，只顯示最初的內容，之後不再更新-->
        <p>v-once內容: <span v-once>{{ rawContent }}</span></p>
        
        <!-- v-pre，用於顯示原始字串 -->
        <p>v-pre內容: <span v-pre>{{ rawContent }}</span></p>
    </div>
</template>

<script>
export default {
    name: 'Demo5Component',
    data() {
        return {
            title: '模板綁定',
            rawContent: "<h2>模板綁定 Demo</h2>",
        }
    }
};
</script>
