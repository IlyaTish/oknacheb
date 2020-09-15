<template lang='pug'>
  .popup.write-popup
    .popup__cont
      button.btn-close(@click='handlers.popups.writePopup = false') ×
      form.popup-form
        span.popup__title Написать письмо
        .input-wrapper
          input.input(type='text' name='name' placeholder='Имя')
        .input-wrapper
          textarea.textarea(name='message' placeholder='Ваше сообщение')
        button.btn Отправить
    .popup-bg(@click='handlers.popups.writePopup = false')
</template>

<script>
  export default {
    props: {
      handlers: Object
    }
  }
</script>

<style lang='stylus'>
  .write-popup.popup
    padding: 10px 10px 30px

    .popup__cont
      max-width: 360px

    .popup-form
      margin: 0
      padding: 0
      background: none

    .input-wrapper
      margin: 0 auto 10px

    .textarea
      height: 100px
</style>
