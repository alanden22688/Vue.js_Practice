<template>
    <div>
        <p>{{ title }}</p>

        <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link><br>

            <!-- 動態路由範例 -->
            Users: <br>
            <router-link v-for="user in users" :key="user.id" :to="{name: 'user', params: { userId : user.id }, query: { userName: user.name }}">
                {{ user.name }} <br>
            </router-link>
        </nav>

        <!--- 這裡是路由的顯示區域，當路由改變時，會顯示對應的元件 -->
        <router-view></router-view> <!-- 對應default -->
        <div class="footer-container">
            <router-view name="footer"></router-view> <!-- 對應footer(具名View) -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'Demo26Component', // 元件名稱
    data() {
        return {
            title: 'Vue Router',
            users: []
        }
    },
    methods: {
        fetchUserArray() {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(res => res.json())
                .then(data => {
                    // 只保留 id 和 name
                    this.users = data.map(user => ({
                        id: user.id,
                        name: user.name
                    }));
                })
                .catch(err => console.error('Error fetching user list:', err));
        }
    },
    created() {
        this.fetchUserArray();
    },
}
</script>

<style>
#demo26 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main-content {
  flex: 1; /* 主要內容區域會自動伸展填滿剩餘空間 */
  padding-bottom: 20px; /* 為頁尾留出空間 */
}

.footer-container {
  /* 頁尾樣式 */
  background: #f5f5f5;
  padding: 20px;
  margin-top: auto; /* 確保頁尾保持在底部 */
}

nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}

</style>