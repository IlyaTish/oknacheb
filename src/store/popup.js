export default {
  state: {
    popup: {
      types: {
        commonPopup:     false,
        calculatorPopup: false,
        videoPopup:      false,
        writePopup:      false
      },
      data: {}
    }
  },

  mutations: {
    closePopup(state) {
      for (let key in state.popup.types) {
        state.popup.types[key] = false
      }
    }
  },

  actions: {},

  getters: {
    popups(state) {
      return state.popup.types
    }
  }
}