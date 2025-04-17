export default {
    namespaced: true,
    state: () => ({
      name: 'state name',
      email: 'test123@gmail.com',
      loading: false,
      error: null
    }),
    mutations: {
      SETLOADING(state, isLoading) {
        state.loading = isLoading
      },
      SETERROR(state, error) {
        state.error = error
      },
      CLEARERROR(state) {
        state.error = null
      }
    }
  }