<template lang='pug'>
  section.offer(:class='offer.class')
    .offer-heading
      h1.offer-heading__title <b v-if='offer.boldHeading'>{{ offer.boldHeading }}</b> {{ offer.heading }}
      span.offer-heading__info *подробности уточняйте по&nbsp;тел.

    .offer__cont(@click='showPopup({ name: "commonPopup" })')
      span.offer__subtitle(v-if='offer.subtitle') {{ offer.subtitle }}
      .offer__row
        .offer__img-cont
          img.offer__img(:src='offer.img')

        .offer__info-cont
          h2.offer__title {{ offer.title }}
          p.offer__p {{ offer.description }}

          .offer__price-cont
            .price-left
              span от&nbsp;<span class='offer__price'>{{ offer.price }}</span>&nbsp;руб.
            .price-right
              span.offer__price-txt в&nbsp;рассрочку на&nbsp;4&nbsp;мес.
              span.offer__price-txt <span class='red'>{{ offer.price_dop }}</span>&nbsp;руб./мес.

          .offer__dop
            span.offer__dop-txt Стоимость зависит от&nbsp;размеров вашего окна
</template>

<script>
  import Mixins from '../../assets/scripts/mixins'

  export default {
    mixins: [Mixins],
    props: {
      offer:    Object,
      handlers: Object
    }
  }
</script>

<style lang='stylus'>
  .offer-wrapper
    margin: 0 0 88px

  .offer
    &__cont
      margin: 20px 0 0
      cursor: pointer

    &__row
      display: flex

    &__img-cont
      width: 100%
      max-width: 238px
      flex: 238px 0 0
      margin: 16px 40px 0 0

    &__info-cont
      width: 100%
      padding: 40px 10px 0 30px
      background: linear-gradient(0deg, #ECECEC, #F9F9F9 46%, #FFFFFF)
      box-sizing: border-box

    &__price-cont
      display: flex
      margin: 40px 0 0

    &__dop
      width: 100%
      max-width: 280px
      margin: 10px 0 0
      text-align: center
      border-top: 1.4px dotted #6D6D6D
      box-sizing: border-box

    &__img
      width: 100%
      height: auto

    &__title
      margin: 0 0 10px
      font-size: 17px
      font-weight: 600

    &__subtitle
      padding: 0 16px 
      font-size: 15px
      white-space: pre-line

    &__p
      font-size: 13px
      line-height: 15px
      white-space: pre-line

    &__price
      font-size: 32px
      white-space: nowrap

    &__price-txt
      width: 100%
      display: inline-block
      font-size: 11px

    &__dop-txt
      display: inline-block
      padding: 6px 0 10px
      color: #6D6D6D
      font-size: 9px
      line-height: 9px
      box-sizing: border-box

    .price-left
      display: flex
      align-items: baseline
      font-size: 13px

      &:after
        content: '/'
        display: inline-block
        margin: 0 4px
        color: #000000
        font-size: 35px

    .price-right
      display: flex
      flex-wrap: wrap
      align-items: baseline
      font-size: 11px

    .red
      color: #DD0A6D
      font-size: 16px

    &--balkon
      .offer__cont
        margin: 0

      .offer__img-cont
        max-width: 320px
        margin: 16px 0 0
        flex: 320px 0 0

  .offer-heading
    width: 100%
    padding: 15px 16px
    display: flex
    justify-content: space-between
    border-top: 5px solid #DEDEDE
    background: linear-gradient(0deg, #ECECEC, #F9F9F9 46%, #FFFFFF)
    box-sizing border-box

    &__title
      margin: 0
      color: #009DEA
      font-size: 18px
      font-weight: 400
      text-transform uppercase

    &__info
      color: #999999
      font-size: 11px
      top: 14px
      position relative



  @media (max-width: 991px)
    .offer-wrapper
      margin: 0 0 40px

  @media (max-width: 767px)
    .offer-heading
      text-align: center

      &__title
        width: 100%

      &__info
        display: none

    .offer
      &__row
        flex-wrap: wrap

      &__cont
        margin: 0
        background: linear-gradient(0deg, #ECECEC, #F9F9F9 46%, #FFFFFF)

      &__img-cont
        max-width: 300px
        margin: 20px auto 0

      &__info-cont
        padding: 20px 20px 10px
        background: transparent

      &__price-cont
        margin: 10px 0 0

      &__subtitle
        display: none

      &__p
        width: 100%
        margin: 10px 0 0
        padding: 0 0 10px
        white-space: initial
        border-bottom: 1.4px dotted #6D6D6D

      &__dop
        display: none

      &--balkon
        .offer__img-cont
          max-width: 300px
          flex: 300px 0 0
          margin: 20px auto 0
</style>
