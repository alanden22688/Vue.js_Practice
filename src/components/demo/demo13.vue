<template>
    <h1>{{ title }}</h1>
    <!-- 使用 v-model -->
    <p>使用v-model輸入的訊息為：{{message}}</p>
    <p>使用v-model: <input v-model="message" placeholder="輸入訊息"></p> 
    <br>   
    <!-- 使用 v-bind 和 v-on:input -->
    <p>使用v-bind和v-on:input輸入的訊息為：{{messageWithoutVmodel}}</p>
    <p>使用v-bind和v-on:input: <input v-bind:value="messageWithoutVmodel" v-on:input="updateMessage" placeholder="輸入訊息"></p>    
</template>

<script>
export default {
    name: 'Demo13Component',
    data() {
        return {
            title: 'v-model拆解',
            message: '',
            messageWithoutVmodel: ''
        }
    },
    methods: {
        updateMessage(event) {
            this.messageWithoutVmodel = event.target.value;
        }
    }
}
</script>