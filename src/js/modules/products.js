import axios from 'axios'

export default {
  namespaced: true,
  state: () => ({
    products: [
      { id: 1, name: 'Product A', price: 10.99 },
      { id: 2, name: 'Product B', price: 9.99 },
      { id: 3, name: 'Product C', price: 12.99 }
    ]
  }),
  mutations: {
    ADDPRODUCT(state, product) {
      state.products.push({
        id: product.id,
        name: product.name,
        price: product.price
      })
    },
    REMOVEPRODUCT(state, id) {
      state.products = state.products.filter(p => p.id !== id)
    },
    SETPRODUCTS(state, products) {
      state.products = products
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      commit('app/SETLOADING', true, { root: true });
      commit('app/CLEARERROR', null, { root: true });
      
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=3');
        const products = response.data.map(item => ({
          id: item.id,
          name: `Product ${String.fromCharCode(64 + item.id)}`,
          price: (10 + Math.random() * 10).toFixed(2)
        }));
        commit('SETPRODUCTS', products);
        return products; // 明確返回結果
      } catch (error) {
        commit('app/SETERROR', '獲取產品列表失敗', { root: true });
        throw error; // 確保錯誤能被 catch 捕獲
      } finally {
        commit('app/SETLOADING', false, { root: true });
      }
    },
    async addNewProduct({ commit, state }, productData) {
      const newId = Math.max(...state.products.map(p => p.id), 0) + 1
      const newProduct = {
        id: newId,
        name: productData.name,
        price: productData.price
      }
      commit('ADDPRODUCT', newProduct)
      return newProduct
    }
  },
  getters: {
    filterProductsPrice: state => (price) => {
      return state.products.filter(product => product.price < price)
    },
    filterProductsPriceCount: (state, getters) => (price) => {
      return getters.filterProductsPrice(price).length
    },
    getAllProductsInfo: state => {
      return state.products.map(product => ({
        id: product.id,
        name: product.name,
        price: product.price
      }))
    },
    firstProduct: state => {
      return state.products.length > 0 ? state.products[0] : null
    }
  }
}