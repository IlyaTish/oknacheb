export default {
  state: {
    popups: {
      commonPopup: false,
      calculatorPopup: false,
      videoPopup: false,
      writePopup: false,
      data: {}
    }
  },
  mutations: {},
  actions: {},
  getters: {
    popups(state) {
      return state.popups
    }
  }
}