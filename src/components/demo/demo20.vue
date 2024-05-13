<template>    
    <div class="main-component">
        <h3>props的資料類型、預設值、自訂驗證</h3>
        {{ msg }} <br>
        <demo20-2-component v-bind:parentMsg="msg" v-bind:propMsg="true"/>
        <hr>
        <h3>以物件作為props傳遞</h3>
        <ul v-for="book in books" v-bind:key="book.id">
            <li>{{ book.id }}</li>
            <li><input type="text" v-model="book.title"/></li>
            <li><input type="text" v-model="book.author"/></li>
            <li><input type="text" v-model="book.publishDate"/></li>
        </ul>
        <!-- 這行程式使用 v-for 指令來遍歷books陣列，並為每個book物件建立一個demo20-3-component元件。 -->
        <demo20-3-component v-for="book in books" v-bind:key="book.id" 
            v-bind:bookInfo="book"/>
        <hr>
        <h3>遞迴元件</h3>
        <demo20-4-component v-bind:item="treeData"></demo20-4-component>
        <hr>
        <h3>自訂事件</h3>
        <p>從內部元件接收的訊息: {{ receivedText }}</p>
        <!-- 監聽handleCustomEvent方法，並將接收到的資料顯示在畫面上 -->
        <demo20-5-component v-on:customEvent="handleCustomEvent"/>    
        <hr>
        <h3>跨層級傳遞</h3>
        <input v-model="message"/> 
        <demo20-6-component/>         
    </div>
</template>

<script>
import { computed } from 'vue';
import Demo20_2Component from './demo20-2.vue'
import Demo20_3Component from './demo20-3.vue'
import Demo20_4Component from './demo20-4.vue'
import Demo20_5Component from './demo20-5.vue'
import Demo20_6Component from './demo20-6.vue'

export default {
    name: 'Demo20Component',    
    components: {
        'demo20-2-component': Demo20_2Component,
        'demo20-3-component': Demo20_3Component,
        'demo20-4-component': Demo20_4Component,
        'demo20-5-component': Demo20_5Component,
        'demo20-6-component': Demo20_6Component
    },
    data() {
        return {
            msg: '外部元件Msg',
            books: [
                {
                    id: '001',
                    title: '時間迷宮',
                    author: 'Alan',
                    publishDate: '2024-7-30'
                },
                {
                    id: '002',
                    title: '平行宇宙的秘密',
                    author: 'Alan',
                    publishDate: '2024-7-30'
                }
            ],
            // 遞迴元件用的資料
            treeData: {
                // 遞迴資料一定要有name屬性
                name: '程式設計書籍',
                chapter: [
                    {
                        id: 1,
                        name: '第一章：程式設計入門',
                        section: [
                            {
                                id: 2,
                                name: '1.1 程式設計概述',                                
                            },
                            {
                                id: 3,
                                name: '1.2 基本語法',                                
                            }
                        ]
                    },
                    {
                        id: 4,
                        name: '第二章：進階主題',
                        section: [
                            {
                                id: 5,
                                name: '2.1 資料結構',
                            },
                            {
                                id: 6,
                                name: '2.2 演算法',
                            }
                        ]
                    }
                ]
            },
            receivedText: '',
            message: '外部元件的訊息'
        }
    },
    methods: {
        // 觸發自訂事件後，會執行此方法
        handleCustomEvent(data) {
            console.log('Custom event received:', data);
            this.receivedText = data;
        }
    },
    provide() {
        return {
            // 讓孫元件可以取得外部元件改動後的message
            message: computed(() => this.message),
        };
    }
}
</script>


<style>
.main-component {
    border: 1px solid #000;
}
</style>