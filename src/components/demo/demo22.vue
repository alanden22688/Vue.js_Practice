<template>    
    <div class="main-component">
        <h3>Slot</h3>
        <div>{{ msg }}</div>        
        <hr>
        <h4>使用slot標籤並插入內容:</h4>
        <demo22-1>{{ msg }}</demo22-1>
        <hr>
        <h4>使用slot標籤但無插入內容:</h4>
        <demo22-1></demo22-1>
        <hr>
        <h3>具名插槽</h3>
        <demo22-2>
            <template v-slot:header>
                <h4>取代預設的Header</h4>
            </template>
            <template #footer>
                <h4>取代預設的Footer</h4>
            </template>
            <div>取代預設的Body</div>
        </demo22-2>
        <hr>        
        <h3>動態切換具名插槽</h3>
        <div class="parent-container">
            <label v-for="option in options" :key="option">
                <input type="radio" :value="option" v-model="dynamic_slot_name">{{ option }}
            </label>
        </div>
        <demo22-2>
            <template v-slot:[dynamic_slot_name]>
                <h4>取代的內容</h4>
            </template>
        </demo22-2>
        <hr>
        <h3>作用域插槽(Scoped Slot)</h3>
        <div class="parent-container">
            <select v-model="lang">
                <option v-for="option in langOptions" :key="option" :value="option">{{ option.name }}</option>
            </select>
        </div>
        <!-- 傳遞lang給內部元件-->    
        <demo22-3 v-bind:lang="lang">
            <!-- 這裡的slotProps是從內部元件傳遞過來的物件，變數名稱可以自訂。 -->
            <!-- (slot為特殊機制，允許內部元件回傳資料給外部元件)-->
            <template v-slot:default="slotProps">
                <p>{{ slotProps.data }}</p>
            </template>
        </demo22-3>
    </div>
</template>

<script>
import Demo22_1Component from './demo22-1.vue';
import Demo22_2Component from './demo22-2.vue';
import Demo22_3Component from './demo22-3.vue';

export default {
    name: 'Demo22Component',   
    components: {
        'demo22-1': Demo22_1Component,
        'demo22-2': Demo22_2Component,
        'demo22-3': Demo22_3Component
    },
    data() {
        return {
            msg: '外部元件訊息!',
            options: ['header', 'footer', 'default'],
            dynamic_slot_name: 'header',   
            langOptions: [
                { name: '繁體中文', value: 'tw' }, 
                { name: 'English', value: 'en' }, 
                { name: '日本語', value: 'jp' }
            ],
            lang: 'tw'
        }
    }
}
</script>

<style>
.main-component {
    border: 1px solid hsl(0, 0%, 0%);
}
/* 使用z-index，讓radio可以顯示內容的同時，進行互動；方便觀察。 */
.parent-container{
    position: relative;
    z-index: 5;
}
</style>