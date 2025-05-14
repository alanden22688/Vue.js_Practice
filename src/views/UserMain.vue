<template>
    <div class="user-container">
        <div class="user-header">
            <h1>UserId: {{ userId }}</h1>
            <pre>{{ userInfo }}</pre>
        </div>

        <nav class="sub-nav">
            <!-- 巢狀路由定位 -->
            <router-link :to="{ name: 'user-posts', params: { userId }, query: { userName } }" class="nav-item">
                用户帖子
            </router-link>

        </nav>

        <div class="nested-views">
            <!-- 巢狀路由顯示 -->
            <router-view class="main-content" />
            <router-view name="sidebar" class="sidebar" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'UserView',
    props: {
        userName: {
            type: String,
            required: true
        },
        userId: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            userInfo: ''
        }
    },
    watch: {
        userId() {
            this.userInfo = this.fetchUserInfo();
        }
    },
    methods: {
        fetchUserInfo() {
            // 模擬從API獲取用戶信息
            return fetch(`https://jsonplaceholder.typicode.com/users/${this.userId}`)
                .then(response => response.json())
                .then(data => {
                    this.userInfo = data;
                })
                .catch(error => {
                    console.error('Error fetching user info:', error);
                });
        }
    },
    created() {
        this.userInfo = this.fetchUserInfo();
    },
    beforeRouteEnter() {
        console.log('UserMain 進入前');
    },
    beforeRouteUpdate(to, from) {
        if (to.params.userId !== from.params.userId) {
            console.log('ID 從', from.params.userId, '變為', to.params.userId);
        }
    },
    beforeRouteLeave() {    
        return confirm('確定要離開嗎？');
    }
}
</script>

<style scoped>
.user-container {
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.user-header {
  background: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.sub-nav {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

.nav-item {
  padding: 8px 16px;
  text-decoration: none;
  color: #2c3e50;
  border-radius: 4px;
  transition: all 0.3s;
}

.nav-item:hover, .nav-item.active {
  background: #42b983;
  color: white;
}

.nested-views {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 20px;
}

.main-content {
  grid-column: 1;
}

.sidebar {
  grid-column: 2;
  background: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
}

.additional-view {
  grid-column: 1 / -1;
  margin-top: 20px;
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 8px;
}
</style>