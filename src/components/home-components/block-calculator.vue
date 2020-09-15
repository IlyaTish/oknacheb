<template lang='pug'>
  section.calculator
    .calculator__cont
      .calculator__col-1
        .calculator-options
          h2.calculator-options__title Выберите нужный размер:

          .calculator-options__row
            h3.calculator-options__subtitle Окна:
            swiper.calculator-swiper(
              ref='mainSwiper'
              :options='swiperOptions'
            )
              swiper-slide(
                v-for='okno in okna'
                :key='okno.id'
              )
                img.calculator-options__img(
                  :src='okno.img'
                  :srcset='okno.img_2x'
                  :data-conf='okno.conf'
                  @click='showPopup({ name: "calculatorPopup", id: okno.confId, okno })'
                )

          .calculator-options__row
            h3.calculator-options__subtitle Двери:
            swiper.calculator-swiper(
              ref='mainSwiper'
              :options='swiperOptions'
            )
              swiper-slide(
                v-for='door in doors'
                :key='door.id'
              )
                img.calculator-options__img(
                  :src='door.img'
                  :srcset='door.img_2x'
                  @click='showPopup({ name: "calculatorPopup" })'
                )

          .calculator-options__row
            h3.calculator-options__subtitle Раздвижка:
            swiper.calculator-swiper(
              ref='mainSwiper'
              :options='swiperOptions'
            )
              swiper-slide(
                v-for='razdvizhka in razdvizhki'
                :key='razdvizhka.id'
              )
                img.calculator-options__img(
                  :src='razdvizhka.img'
                  :srcset='razdvizhka.img_2x'
                  @click='showPopup({ name: "calculatorPopup" })'
                )

      .calculator__col-2
        form.calculator-form
          input.calculator-form__input.input(type='text' name='Телефон' placeholder='Телефон')
          button.btn Получить цены

          .calculator-default
            .calculator-default__row
              .calculator-default__col-1
                .calculator-default__txt-cont
                  span.calculator-default__txt Ширина: <span class='blue'>1400</span>
                .calculator-default__txt-cont
                  span.calculator-default__txt Высота: <span class='blue'>1400</span>
                .calculator-default__txt-cont
                  span.calculator-default__txt Количество: <span class='blue'>1</span>
                img.calculator-default__img(
                  src='@/assets/images/calculator/conf/okna/conf-3/okno-01.png'
                  srcset='@/assets/images/calculator/conf/okna/conf-3/okno-01@2x.png'
                )

              .calculator-default__col-2
                span.calculator-default__txt.calculator-default__txt--title Дополнительные услуги:
                .calculator-default__dop
                  span.calculator-default__txt Установка: <span class='blue'>нет</span>
                  span.calculator-default__txt Москитка: <span class='blue'>нет</span>
                  span.calculator-default__txt Подоконник: <span class='blue'>нет</span>
                  span.calculator-default__txt Водоотлив: <span class='blue'>нет</span>
                  span.calculator-default__txt Откосы: <span class='blue'>нет</span>

          a.calculator-default__edit(href='#') Изменить параметры
</template>

<script>
  import Mixins from '@/assets/scripts/mixins'
  import Conf   from '@/data/home-page/calculator-data'

  export default {
    mixins: [Mixins],
    data() {
      return {
        okna: Conf.OKNA,
        doors: Conf.DOORS,
        razdvizhki: Conf.RAZDVIZHKI,
        swiperOptions: {
          direction: 'horizontal',
          slidesPerView: 'auto',
          freeMode: true,
          preventClicks: false,
          watchOverflow: true,
          mousewheel: {
            forceToAxis: true,
          }
        }
      }
    }
  }
</script>

<style lang='stylus'>
  .calculator
    margin: 20px 0 0

    &__cont
      display: flex

    &__col-1
      width: 100%
      margin: 0 10px 0 0

    &__col-2
      width: 100%
      max-width: 320px

    .swiper-container
      margin: 0 !important

    .swiper-slide
      width: auto !important

  .calculator-options
    height: 100%
    padding: 20px
    border-top: 5px solid #DEDEDE
    background: linear-gradient(0deg, #ECECEC, #F9F9F9 46%, #FFFFFF)
    box-sizing: border-box

    &__title
      display: inline-block
      margin: 0 0 20px
      color: #009DEA
      font-size: 22px

    &__subtitle
      min-width: 110px
      font-size: 16px
      font-weight: 400
      text-align: center

    &__row
      margin: 20px 0 0
      display: flex
      align-items: center

      &:first-of-type
        margin: 0

    &__cont
      display: flex

    &__img
      height: 65px
      border-radius: 3px
      border: 4px solid transparent
      transition: .2s
      cursor: pointer

      &:hover
        border: 4px solid #009DEA

  .calculator-form
    height: 100%
    padding: 14px 20px
    box-sizing: border-box
    border-top: 5px solid #DEDEDE
    background: linear-gradient(0deg, #ECECEC, #F9F9F9 46%, #FFFFFF)

    &__input
      height: 32px

    .btn
      width: 100%
      margin: 6px 0 0

    .calculator-default
      margin: 15px 0 0
      padding: 15px 0
      border-top: 1.3px dotted #898989
      border-bottom: 1.3px dotted #898989

      &__row
        display: flex

      &__col-1
        width: 100%
        margin: 0 10px 0 0

      &__col-2
        width: 100%

      &__txt
        display: flex
        color: #999999
        font-size: 13px
        line-height: 22px

        &--title
          display: block
          margin: 0 0 37px
          color: #000000
          line-height: 16px

      &__img
        height: 110px
        margin: 5px 0 0

      &__edit
        width: 100%
        display: block
        margin: 15px 0 0
        color: #009DEA
        font-size: 14px
        text-align: center


  @media (max-width: 991px)
    .calculator
      &__col-1
        margin: 0

      &__col-2
        display: none

    .calculator-options
      &__img
        height: 74px


  @media (max-width: 767px)
    .calculator
      margin: 10px 0 0

    .calculator-options
      padding: 14px 10px

      &__title
        margin: 0 0 14px
        font-size: 18px

      &__subtitle
        min-width: 90px
        font-size: 14px


  @media (max-width: 479px)
    .calculator-options
      &__row
        flex-direction: column

      &__subtitle
        margin: 0 0 6px
        min-width: 100%
        text-align: center
</style>
