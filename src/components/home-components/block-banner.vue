<template lang='pug'>
  .banner(@click='showPopup({ name: "commonPopup" })')
    img.banner__img(
      src='@/assets/images/banner/banner.jpg'
      alt='Акция на окна и балконы Легос'
    )
</template>

<script>
  import Mixins from '../../assets/scripts/mixins'

  export default {
    mixins: [Mixins],
    props: {
      handlers: Object
    }
  }
</script>

<style lang='stylus'>
  .banner
    cursor: pointer

    &__img
      width: 100%


    @media (max-width: 767px)
      margin: 10px 0 0
</style>
