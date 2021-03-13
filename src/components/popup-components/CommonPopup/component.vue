<template lang='pug'>
  .popup.common-popup
    .popup__cont
      button.btn-close(@click='handlers.popups.commonPopup = false') ×
      .popup__img-cont
        img.popup__img(src='@/assets/images/popup/pic-01.jpg')
      form.popup-form
        span.popup__title Оставьте заявку и мы вам перезвоним
        .input-wrapper
          input.input(type='text' name='phone' placeholder='+7 (___) ___-__-__')
        button.btn Оставить заявку
    .popup-bg(@click='handlers.popups.commonPopup = false')
</template>

<script>
  export default {
    props: {
      handlers: Object
    }
  }
</script>
