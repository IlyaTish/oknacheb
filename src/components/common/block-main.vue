<template lang='pug'>
  section.main
    .main__cont(@click='showPopup({ name: "commonPopup" })')
      .main-head
        img.main-head__img(src='@/assets/images/main/main-bg.svg')

      .main__col-1
        swiper.main-swiper(
          ref='mainSwiper'
          :options='swiperOptions'
        )
          swiper-slide
            img.main__img(src='@/assets/images/main/img-01.jpg')
          swiper-slide
            img.main__img(src='@/assets/images/main/img-02.jpg')
          swiper-slide
            img.main__img(src='@/assets/images/main/img-03.jpg')
          swiper-slide
            img.main__img(src='@/assets/images/main/img-04.jpg')
          swiper-slide
            img.main__img(src='@/assets/images/main/img-05.jpg')

      .main__col-2
        .main-phone
          span.main-phone__txt-s ежедневно с <span class='white'>8:00</span> до <span class='white'>20:00</span>
          span.phone {{ this.$CONSTANTS.phone }}
          span.main-phone__txt-m заказ по телефону

        .main-info
          h2.main-info__title Компания <b>ЛЕГОС</b><br> предлагает<br> продукт экстра-класса: <br>окна из профиля <b>VEKA</b><br>в Чебоксарах
          p.main-info__p -VEKA существует только в&nbsp;оригинале, в&nbsp;отличие от&nbsp;онкурентов у&nbsp;нее нет аналогов, подделок, клонов и&nbsp;имитаций
          p.main-info__p -VEKA&nbsp;&mdash; это только профили класса&nbsp;А, соответствующие RAL. В&nbsp;отличие от&nbsp;конкурентов, VEKA не&nbsp;выпускает профилей эконом-класса

    .payments(v-if='handlers.payments')
      img(src='@/assets/images/main/payments.png')
</template>

<script>
  import Mixins from '../../assets/scripts/mixins'

  export default {
    mixins: [Mixins],
    props: {
      handlers: Object
    },
    data() {
      return {
        swiperOptions: {
          direction: 'horizontal',
          loop: true,
          allowTouchMove: false,
          autoplay: {
            delay: 4000
          }
        }
      }
    }
  }
</script>

<style lang='stylus'>
  .main
    margin: 5px 0 0

    &__cont
      width: 100%
      display flex
      position: relative
      overflow: hidden
      cursor: pointer

    &__col-1
      width: 100%

    &__col-2
      width: 100%
      max-width: 286px
      display: flex;
      flex-direction: column

    &__img
      height: 418px

    .payments
      display: block
      height: 36px
      padding: 10px 0
      text-align: right

      img
        height: 100%
        margin: 0 0 0 auto

  .main-head
    width: 100%
    min-width: 400px
    top: 0
    left: 0
    position: absolute
    z-index: 2

    &__img
      width: 100%

  .main-phone
    padding: 10px
    text-align: right
    position relative
    box-sizing: border-box
    z-index: 2

    &__txt-s
      display: inline-block
      color: #75C5F0
      font-size: 11px
      font-style: italic

    .phone
      display inline-block
      color: #FFFFFF
      font-size: 26px
      font-weight: 600
      font-style: italic
      text-decoration: none

    &__txt-m
      display: inline-block
      color: #75C5F0
      font-size: 16px
      font-style: italic

  .main-swiper
    width: 100%
    max-height: 418px
    margin: 0
    position relative
    z-index: 1

    .swiper-slide
      width: 100% !important

  .main-info
    height: 100%
    padding: 80px 20px 0
    background-color: #EEEEEE
    background-image: url('../../assets/images/main/main-info-bg.png')
    background-size: cover
    background-repeat: no-repeat

    &__title
      margin: 0
      padding: 0 0 10px
      font-size: 16px
      font-weight: 400
      line-height: 20px
      border-bottom: 1.3px dotted #A9A9A9

    &__p
      margin: 10px 0 0
      font-size: 12px
      color: #009DEA
      line-height: 15px


  @media (max-width: 1199px)
    .main
      &__col-2
        max-width: 200px

      &__img
        height: auto

    .main-phone
      display: none

    .main-info
      padding: 170px 20px 0

      &__title
        font-size: 14px
        line-height: 16px

      &__p
        font-size: 10px
        line-height: 12px


    @media (max-width: 920px)
      .main
        &__col-2
          display: none

      .main-swiper
        max-height: none


    @media (max-width: 767px)
      .main
        .payments
          display: none
</style>
