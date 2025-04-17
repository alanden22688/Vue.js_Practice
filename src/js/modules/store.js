import { createStore } from 'vuex'
import axios from 'axios'

// 建立store
const store = createStore({
  state: {
    count: 1,
    name: 'state name',
    email: 'test123@gmail.com',
    products: [
      { id: 1, name: 'Product A', price: 10.99 },
      { id: 2, name: 'Product B', price: 9.99 },
      { id: 3, name: 'Product C', price: 12.99 }
    ],
    loading: false,
    error: null
  },  
  getters: {
    doubleCount: state => state.count * 2,
    // 篩選產品價格
    filterProductsPrice: state => (price) =>{ 
      return state.products.filter(product => product.price < price)
    },
    // 篩選產品價格數量
    // 將getters作為第二個參數傳入時，可以使用其他getters的方法
    filterProductsPriceCount: (state,getters) => (price) =>{
      return getters.filterProductsPrice(price).length;
    },
    // 取得所有產品資訊
    getAllProductsInfo: state => {
      if (state.products.length === 0) {
        return [];
      } else {
        return state.products.map(product => {
          return {
            id: product.id,
            name: product.name,
            price: product.price
          }
        })
      }
    },
    isLoading: state => state.loading,
    getError: state => state.error
  },
  mutations: {
    INCREMENT(state) {
      state.count++
    },
    DECREMENT(state) {
      state.count--
    },
    // 增加產品
    ADDPRODUCT(state, product) {
      state.products.push({
        id: product.id,
        name: product.name,
        price: product.price
      });  
    },
    // 移除產品
    REMOVEPRODUCT(state, payload) {
      console.log('removeProduct mutation');
      console.log('payload:', payload); // 檢查傳入的參數結構
      
      let id;
      // 直接取得 id，避免多層解構
      if (typeof payload.id === 'object' && payload.id.id !== undefined) {
        id = parseInt(payload.id.id); // 處理 { id: { id: 1 } } 的情況
      } else {
        id = parseInt(payload.id); // 處理 { id: 1 } 的情況
      }
      
      console.log('id:', id);
      
      const index = state.products.findIndex(product => product.id === id);
      console.log('index:', index);
      
      if (index !== -1) {
        console.log('找到產品，準備刪除');
        state.products.splice(index, 1); // 正確刪除 1 個元素
        console.log('刪除完成');
      }
    },
    // 設置 loading 狀態
    SETLOADING(state, isLoading) {
      state.loading = isLoading
    },
    // 設置錯誤狀態
    SETERROR(state, error) {
      state.error = error
    },
    // 清除錯誤狀態
    CLEARERROR(state) {
      state.error = null
    },
    // 設置產品列表(會把原有的產品列表覆蓋掉)
    SETPRODUCTS(state, products) {
      state.products = products
    }
  },
  actions: {
    // 從 API 獲取產品列表
    async fetchProducts({ commit }) {
      commit('SETLOADING', true)
      commit('CLEARERROR')
      try {
        // 使用 JSONPlaceholder 模擬 API
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=3')
        // 將 API 數據轉換為我們的產品格式
        const products = response.data.map(item => ({
          id: item.id,
          name: `Product ${String.fromCharCode(64 + item.id)}`, // A, B, C...
          price: (10 + Math.random() * 10).toFixed(2)
        }))
        // 覆蓋產品列表
        commit('SETPRODUCTS', products)
      } catch (error) {
        commit('SETERROR', '獲取產品列表失敗')
        console.error('API 錯誤:', error)
      } finally {
        commit('SETLOADING', false)
      }
    },

    // 添加新產品 (模擬 API 提交)
    async addNewProduct({ commit }, productData) {
      commit('SETLOADING', true)
      commit('CLEARERROR')
      try {
        // 模擬 API 延遲
        await new Promise(resolve => setTimeout(resolve, 800))
        // 生成 ID (實際專案中應由後端生成)
        const newId = Math.max(...store.state.products.map(p => p.id), 0) + 1
        const newProduct = {
          id: newId,
          name: productData.name,
          price: productData.price
        }
        commit('ADDPRODUCT', newProduct)
        return newProduct // 返回新增的產品以便後續處理
      } catch (error) {
        commit('SETERROR', '添加產品失敗')
        throw error // 重新拋出錯誤以便組件處理
      } finally {
        commit('SETLOADING', false)
      }
    },

    // 刪除產品 (模擬 API 操作)
    async removeProduct({ commit }, productId) {
      commit('SETLOADING', true)
      try {
        await new Promise(resolve => setTimeout(resolve, 500))
        commit('REMOVEPRODUCT', productId)
        return true // 表示刪除成功
      } catch (error) {
        commit('SETERROR', '刪除產品失敗')
        return false
      } finally {
        commit('SETLOADING', false)
      }
    },
  }
})

export default store;