<template lang='pug'>
  .popup.common-popup
    .popup__cont
      button.btn-close(@click='closePopup()') ×

      .popup__img-cont
        img.popup__img(src='@/assets/images/popup/pic-01.jpg')

      form.popup-form(@submit='submit')
        input(type='hidden' name='project_name' value='oknacheb.ru')
        input(type='hidden' name='admin_email' value='ilya.tishencko676@yandex.ru')
        input(type='hidden' name='form_subject' value='Заявка с popup-окна (основное)')

        span.popup__title Оставьте заявку и мы вам перезвоним

        .input-wrapper
          imask-input.input(
            v-imask='mask'
            name='Телефон'
            placeholder='+7 (___) ___-__-__'
            required
          )

        button.btn Оставить заявку
    .popup-bg(@click='closePopup()')
</template>


<script>
  import Mixins from '@/assets/scripts/mixins'
  import { IMaskComponent, IMaskDirective } from 'vue-imask'

  export default {
    mixins: [Mixins],

    props: {
      handlers: Object
    },

    components: {
      'imask-input': IMaskComponent
    },

    data() {
      return {
        mask: {
          mask: '+{7} (000) 000-00-00',
          lazy: false
        }
      }
    },

    directives: {
      imask: IMaskDirective
    }
  }
</script>
