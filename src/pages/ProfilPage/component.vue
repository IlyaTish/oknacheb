<template lang='pug'>
  .wrapper
    block-main(:handlers='handlers')

    main.main-content
      .profil-page-wrapper
        .switch
          .switch__item(@click='switchType = "veka"')
            img.switch__img(src='@/assets/images/profil-page/veka-switch.png')
          .switch__item(@click='switchType = "salamander"')
            img.switch__img(src='@/assets/images/profil-page/salamander-switch.png')
          .switch__item(@click='switchType = "brusbox"')
            img.switch__img(src='@/assets/images/profil-page/brusbox-switch.jpeg')

        template(v-if='switchType === "veka"')
          block-veka
        template(v-if='switchType === "salamander"')
          block-salamander
        template(v-if='switchType === "brusbox"')
          block-brusbox
</template>


<script>
  import BlockMain from '@/components/common-components/Main/component'
  import BlockVeka from '@/components/page-components/profil-page/Veka/component'
  import BlockSalamander from '@/components/page-components/profil-page/Salamander/component'
  import BlockBrusbox from '@/components/page-components/profil-page/Brusbox/component'

  export default {
    props: {
      handlers: Object
    },

    data() {
      return {
        switchType: 'veka'
      }
    },

    components: {
      BlockMain,
      BlockVeka,
      BlockSalamander,
      BlockBrusbox
    },

    mounted() {
      this.handlers.payments = false
    }
  }
</script>


<style lang='stylus' scoped>
  .profil-page-wrapper
    width 100%

  .switch
    width 250px
    padding 5px 10px
    top 0
    left 0
    position absolute
    background linear-gradient(90deg, #8CBD31 1%, #C7D22E)
    box-sizing border-box
    z-index 3

    &__item
      width 100%
      margin 5px 0
      display flex
      align-items center
      justify-content center
      background #FFFFFF
      cursor pointer

  
  @media (max-width 993px)
    .switch
      width 100%
      display flex
      position relative
      margin: 0 0 40px

      &__item
        border 1px solid #CCCCCC


  @media (max-width 590px)
    .switch
      display block

      &__item
        .switch__img
          max-width 250px
</style>
