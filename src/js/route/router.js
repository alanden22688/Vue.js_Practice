import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue' 
import UserMain from '@/views/UserMain.vue'
import UserFooter from '@/views/UserFooter.vue'
import UserPosts from '@/views/UserPosts.vue'
import UserSidebar from '@/views/UserSidebar.vue'

// 路由設定基本都在createRouter完成
const router = createRouter({
  // 路由模式: 使用 HTML5 的 history 模式
  history: createWebHistory('/demo12.html/'), // 路由的基本路徑，這裡是demo12.html的路徑
  
  // 路由設定
  routes: [
    {
      path: '/',              // 路徑
      name: 'home',           // 路由名稱
      component: HomeView,     // 對應的組件
      alias: ['/home', '/index']  // 別名，當訪問/home和/index時也會顯示HomeView組件
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'), // 使用非同步載入元件，當訪問/about時才會加載AboutView組件
      beforeEnter: (to, from) => {
        console.log(`[路由日誌] 從 ${from.path} 定位到 ${to.path}`)
      }
    },
    {
      path: '/users/:userId', // 動態路由參數
      name: 'user',        // 路由名稱 
      props: (route) => ({
        userId: route.params.userId,
        userName: route.query.userName // 從查詢參數獲取用戶名稱
      }),
      // 具名Views
      components: {
        default: UserMain, // 預設元件
        footer: UserFooter // 當<router-view>有name屬性且名稱為footer時，顯示對應的元件。
      },
      // 巢狀路由
      children: [
        {
          path: 'posts',
          props: (route) => ({
            userId: route.params.userId,
            userName: route.query.userName // 從查詢參數獲取用戶名稱
          }),
          name: 'user-posts',
          // 巢狀具名View
          components: {
            default: UserPosts,
            sidebar: UserSidebar
          },
        },
      ]
    },
  ]
})

router.beforeEach((to, from) => {
  console.log(`[路由日誌] 從 ${from.path} 定位到 ${to.path}`)
});

router.afterEach((to, from, failure) => {
  console.log(`[路由日誌] 定位到 ${to.path} 完成`)
  if (failure) {
    console.error(`[路由日誌] 定位到 ${to.path} 失敗: ${failure}`)
  }
});

export default router