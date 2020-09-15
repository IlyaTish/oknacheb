<template lang='pug'>
  section.offer-form
    .flipclock-wrapper
      span.offer-form__subtitle До&nbsp;конца акции осталось:
      flip-countdown(
        :deadline='deadline'
        :showDays='false'
      )

    .offer-form__cont
      form.offer-form__form
        h2.offer-form__title Оставить заявку <br>по&nbsp;акции
        input.input(type='text' name='Имя' placeholder='имя' required)
        input.input(type='text' name='Телефон' placeholder='Телефон' required)
        input.input(type='text' name='Адрес' placeholder='адрес (не обязательно)' required)
        button.btn Заказать сейчас
      p.offer-form__p Оставьте заявку, и&nbsp;наш специалист рассчитает стоимость заказа с&nbsp;учетом всех ваших пожеланий
</template>

<script>
import FlipCountdown from 'vue2-flip-countdown'
import moment from 'moment'

const fmt = 'YYYY-MM-DD HH:mm:ss'

export default {
  components: {
    FlipCountdown
  },
  data() {
    return {
      deadlinets: moment()
        .endOf('day')
        .valueOf()
    }
  },
  computed: {
    deadline: function () {
      return moment(this.deadlinets).format(fmt);
    }
  }
}
</script>

<style lang='stylus'>
  .offer-form
    margin: 30px 0 0
    display: grid
    grid-template-columns: 1fr 2fr

    &__cont
      display: flex

    &__form
      width: 100%
      text-align: center

    &__title
      display: inline-block
      margin: 0 0 10px
      color: #000000
      font-size: 16px
      font-weight: 400
      text-transform: uppercase

    &__subtitle
      font-size: 13px
      font-weight: 600

    &__p
      width: 100%
      max-width: 160px
      margin: 44px 10px 0
      font-size: 11px
      line-height: 13px

    .input
      margin: 0 0 10px

      &:last-of-type
        margin: 0

    .btn
      margin: 20px auto 0
      padding: 7px 20px
      font-size: 12px

    .flipclock-wrapper
      text-align: center

      .offer-form__subtitle
        display: inline-block
        margin: 0 0 10px

    .flip-card[data-v-41c58df0]
      font-size: 24px
      font-weight: 100

      @media (min-width: 1000px)
        font-size: 24px

    .flip-clock__slot[data-v-41c58df0]
      font-size: 10px

    .flip-clock__piece
      position: relative

      &:before
        content: ':'
        display: inline-block
        top: 3px
        right: -8px
        position: absolute
        color: #000000
        font-size: 24px

      &:last-of-type
        &:before
          display: none

    .flip-card__top[data-v-41c58df0],
    .flip-card__bottom[data-v-41c58df0],
    .flip-card__back-bottom[data-v-41c58df0],
    .flip-card__back[data-v-41c58df0]::before,
    .flip-card__back[data-v-41c58df0]::after
      width: 1.9em
      color: #4B4B4B
      background: #D8D8D8

    .flip-card__bottom[data-v-41c58df0],
    .flip-card__back-bottom[data-v-41c58df0],
    .flip-card__bottom-4digits[data-v-41c58df0],
    .flip-card__back-bottom-4digits[data-v-41c58df0]
      color: #666666
      background: #EEEEEE
      border-top: 1px solid #4B4B4B


  @media (max-width: 767px)
    .offer-form
      grid-template-columns: 1fr

      &__form
        max-width: 400px
        margin: 0 auto

      .flipclock-wrapper
        display: none

      &__title
        width: 100%

        br
          display: none

      &__p
        display: none

      .input
        margin: 0 0 6px

      .btn
        width: 100%
        max-width: 300px
        margin: 12px auto 0
        padding: 11px 20px
        background: linear-gradient(0deg,#f8a200,#ffd710);
</style>
