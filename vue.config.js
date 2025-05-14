// 表示引入@vue/cli-service
const { defineConfig } = require('@vue/cli-service') 
// 影響Vue CLI如何建構專案
module.exports = defineConfig({
  // 是否轉譯成ES5，提供給舊版瀏覽器使用，可用陣列指定需要轉譯的套件
  transpileDependencies: true,
  // 設定多頁面的應用程式，視專案需求而定。
  pages: {
    // key: 定義的頁面名稱
    index: {
      // entry: 進入點
      entry: 'src/main.js',
      // template: 最終生成HTML的檔案
      template: 'public/index.html',
      // filename: 輸出的檔案名稱
      filename: 'index.html',
      // title: 標題
      title: 'Index Page',
    },
    // Vue物件和指令的Demo
    demo: {
      entry: 'src/js/demo.js',
      template: 'public/demo.html',
      filename: 'demo.html',
      title: 'Vue物件和指令的Demo',
    },
    // Vue事件處理Demo
    demo2: {
      entry: 'src/js/demo2.js',
      template: 'public/demo2.html',
      filename: 'demo2.html',
      title: 'Vue事件處理Demo',
    },
    // Vue條件判斷Demo
    demo3: {
      entry: 'src/js/demo3.js',
      template: 'public/demo3.html',
      filename: 'demo3.html',
      title: 'Vue條件判斷Demo',
    },
    // 生命週期Demo
    demo4: {
      entry: 'src/js/demo4.js',
      template: 'public/demo4.html',
      filename: 'demo4.html',
      title: '生命週期Demo',
    },
    // 元件宣告與註冊
    demo5: {
      entry: 'src/js/demo5.js',
      template: 'public/demo5.html',
      filename: 'demo5.html',
      title: '元件宣告與註冊',
    },
    // 元件之間的溝通傳遞
    demo6: {
      entry: 'src/js/demo6.js',
      template: 'public/demo6.html',
      filename: 'demo6.html',
      title: '元件之間的溝通傳遞',
    },
    // 動態元件管理
    demo7: {
      entry: 'src/js/demo7.js',
      template: 'public/demo7.html',
      filename: 'demo7.html',
      title: '動態元件管理',
    },
    // 編譯作用域與Slot
    demo8: {
      entry: 'src/js/demo8.js',
      template: 'public/demo8.html',
      filename: 'demo8.html',
      title: '編譯作用域與Slot',
    },
    // 與後端互動
    demo9: {
      entry: 'src/js/demo9.js',
      template: 'public/demo9.html',
      filename: 'demo9.html',
      title: '與後端互動',
    },
    // Vuex狀態管理
    demo10: {
      entry: 'src/js/demo10.js',
      template: 'public/demo10.html',
      filename: 'demo10.html',
      title: 'Vuex狀態管理',
    },
    // Vuex狀態管理(模組拆分)
    demo11: {
      entry: 'src/js/demo11.js',
      template: 'public/demo11.html',
      filename: 'demo11.html',
      title: 'Vuex狀態管理(模組拆分)',
    },
    // Vue Router
    demo12: {
      entry: 'src/js/demo12.js',
      template: 'public/demo12.html',
      filename: 'demo12.html',
      title: 'Vue Router',
    }
  },
  // 是否啟用Vue的runtimeCompiler，預設為false
  runtimeCompiler: true
})