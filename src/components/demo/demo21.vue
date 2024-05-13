<template>    
    <div class="main-component">
        <h3>v-bind:is與動態元件</h3>
        <input type="button"
            v-for="tab in tabs"
            v-bind:key="tab"
            v-bind:class="{ active: currentTab === tab }"
            v-on:click="currentTab = tab" 
            v-bind:value="tab" />      
            
            <!-- 用 v-if 來判斷元件顯示與隱藏 -->
            <!-- 
            <tab-home v-if="currentTab === 'Home'"></tab-home>
            <tab-posts v-if="currentTab === 'Posts'"></tab-posts>
            <tab-archive v-if="currentTab === 'Archive'"></tab-archive> 
            -->

            <!-- 用 v-bind:is 來動態載入元件 -->
            <component v-bind:is="currentTabComponent"></component>
            <hr>
            <h3>keep-alive保持元件狀態</h3>
            <input type="button"
                v-for="tab in tabs"
                v-bind:key="tab"
                v-bind:class="{ active: currentTab === tab }"
                v-on:click="currentTab = tab" 
                v-bind:value="tab" /> 
            <keep-alive>
                <component v-bind:is="currentTabComponent"></component>
            </keep-alive>
            <!-- 使用include -->
            <h4>使用include</h4>            
            <keep-alive include="tab-home,tab-posts">
                <component v-bind:is="currentTabComponent"></component>
            </keep-alive>
            <!-- 使用exclude -->
            <h4>使用exclude</h4>
            <!-- 使用正規表達式或陣列時，需要加上v-bind:綁定 -->
            <keep-alive v-bind:exclude="/tab-(home|posts)/">
                <component v-bind:is="currentTabComponent"></component>
            </keep-alive>
            <!-- 使用max -->
            <h4>使用max</h4>
            <keep-alive max="2">
                <component v-bind:is="currentTabComponent"></component>
            </keep-alive>
            <hr>
            <h4>特殊生命週期:actived和deactived</h4>
            <input type="button"
                v-for="tab in tabs"
                v-bind:key="tab"
                v-bind:class="{ active: currentTab === tab }"
                v-on:click="currentTab = tab" 
                v-bind:value="tab" /> 
            <keep-alive>
                <component v-bind:is="currentTabComponent" v-on:lifecycleEvent="updateLifecycle"></component>
            </keep-alive>
            <!-- 顯示生命週期訊息 -->
            <p v-html="lifecycle"></p> 
    </div>
</template>

<script>
export default {
    name: 'Demo21Component',   
    data() {
        return {
            tabs: ['Home', 'Posts', 'Archive'],
            currentTab: 'Home',
            lifecycle: ''
        }
    },
    computed: {
        currentTabComponent() {
            return 'tab-' + this.currentTab.toLowerCase();
        }
    },
    watch: {
        currentTab() {
            this.lifecycle = ''; // 清空生命周期信息
        }
    },
    methods: {
        updateLifecycle(lifecycleName) {
            this.lifecycle += `${lifecycleName} <br>`;
        }
    }
}
</script>


<style>
.main-component {
    border: 1px solid #000;
}
</style>