import axios from 'axios'
import store from '@/store/index'


export default {
  data() {
    return {
      width: 0
    }
  },

  methods: {
    updateWidth() {
      this.width = window.innerWidth
    },

    closePopup() {
      store.commit('closePopup');
    },

    showPopup(data) {
      const popupsStore = store.getters.popups,
            thisPopup   = data.name;

      if (data) popupsStore.data = data;

      if (thisPopup in popupsStore)
        popupsStore[`${thisPopup}`] = true;

      if (thisPopup === 'calculatorPopup') {
        const curId = this.$set(
          popupsStore.data,
          'currentId',
          data.obj[0].confId
        )
      }
    },

    submit: async e => {
      e.preventDefault()

      /* formData */
      const currentForm = e.target,
            formData    = new FormData(currentForm);

      /* AJAX request */
      await axios({
        method: 'post',
        url: 'static/mail.php',
        data: formData,
        config: {
          headers: { 'Content-Type': 'multipart/form-data' }
        }
      })

      /* handle success */
      .then(response => {
        console.log('Success');

        const formSuccess = document.createElement('div');

        formSuccess.className = 'form-success show';

        formSuccess.innerHTML = `
          <span class="form-success__title">Спасибо за заявку!</span>
          <p class="form-success__txt">Мы свяжемся с вами в ближайшее время</p>
        `;

        currentForm.appendChild(formSuccess);

        setTimeout(() => {
          store.commit('closePopup');

          formSuccess.classList.remove('show');
          formSuccess.classList.add('hide');

          currentForm.addEventListener('transitionend', () => {
            currentForm.removeChild(formSuccess);
            currentForm.reset()
          })
        }, 4000)
      })

      /* handle error */
      .catch(response => { console.log(response) })
    }
  },

  mounted() {
    this.width = window.innerWidth
    window.addEventListener('resize', this.updateWidth)
  }
}
