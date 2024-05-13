<template>
    <div>
        <h1>{{ title }}</h1>
        <input type="button" value="計數+1" v-on:click="count++"/>
        <input type="button" value="重置計數" v-on:click="count=0"/>
        <p>目前計數：{{ count }}</p>
        <div v-if="count === 0">
            <p>你還沒進行任何計數</p>
        </div>
        <div v-else-if="count > 0 && count < 5">
            <p>你已經進行1次以上的計數</p>
        </div>
        <div v-else-if="count >= 5 && count< 10">
            <p>你已經進行5次以上的計數</p>
        </div>
        <div v-else>
            <p>你已經進行10次以上的計數</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Demo15Component',
    data() {
        return {
            title: 'v-if搭配v-else-if和v-else範例',
            count: 0
        };
    }
};
</script>