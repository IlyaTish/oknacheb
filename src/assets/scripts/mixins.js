export default {
  data() {
    return {
      width: 0
    }
  },
  methods: {
    updateWidth() {
      this.width = window.innerWidth;
    },
    showPopup(data) {
      const popupsStore = this.$store.getters.popups,
            thisPopup   = data.name;
    
      if (data) popupsStore.data = data;
      if (thisPopup in popupsStore) popupsStore[''+ thisPopup +''] = true;

      if (thisPopup === 'calculatorPopup') {
        const curId = this.$set(popupsStore.data, 'currentId', data.okno.confId)
        console.log(curId);
        console.log(data);
      }
    }
  },
  mounted() {
    this.width = window.innerWidth;
    window.addEventListener('resize', this.updateWidth);
  }
}
