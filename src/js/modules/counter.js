export default {
    namespaced: true,
    state: () => ({
      count: 1
    }),
    mutations: {
      INCREMENT(state) {
        state.count++
      },
      DECREMENT(state) {
        state.count--
      }
    },
    getters: {
      doubleCount: state => state.count * 2
    }
  }