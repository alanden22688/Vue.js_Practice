import { createStore } from 'vuex'
import app from './app'
import counter from './counter'
import products from './products'

export default createStore({
  state: () => ({
    // 這裡可以放一些全局的狀態
  }),
  modules: {
    counter,
    products,
    app
  }
})