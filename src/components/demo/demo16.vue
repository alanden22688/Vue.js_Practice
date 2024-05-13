<template>
    <div>
        <h1>{{ title }}</h1>
        <input type="radio" value="username" v-model="loginType">使用者名稱
        <input type="radio" value="email" v-model="loginType">電子郵件<br>

        <template v-if="loginType === 'username'">
            <label>使用者名稱：</label>
            <input type="text" placeholder="請輸入使用者名稱">
        </template>

        <template v-else-if="loginType === 'email'">
            <label>電子郵件：</label>
            <input type="email" placeholder="請輸入電子郵件">
        </template>
    </div>
</template>

<script>
export default {
    name: 'Demo16Component',
    data() {
        return {
            title: '<template>中使用v-if',
            loginType: 'username'
        };
    }
};
</script>