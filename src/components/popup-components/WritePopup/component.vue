<template lang='pug'>
  .popup.write-popup
    .popup__cont
      button.btn-close(@click='closePopup()') ×

      form.popup-form(@submit='submit')
        span.popup__title Написать письмо
        .input-wrapper
          input.input(type='text' name='name' placeholder='Имя')
        .input-wrapper
          textarea.textarea(name='message' placeholder='Ваше сообщение')
        button.btn Отправить

    .popup-bg(@click='closePopup()')
</template>

<script>
  import Mixins from '@/assets/scripts/mixins'

  export default {
    mixins: [Mixins],
    props: {
      handlers: Object
    }
  }
</script>

<style src='./style.stylus' lang='stylus' scoped></style>
