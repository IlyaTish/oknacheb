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

<style src='./style.stylus' lang='stylus' scoped></style>

<style lang='stylus'>
  section.offer-form
    .flip-card
      font-size 24px
      font-weight 100

      @media (min-width: 1000px)
        font-size 24px

    .flip-clock__slot
      font-size 10px

    .flip-card__top,
    .flip-card__bottom,
    .flip-card__back-bottom,
    .flip-card__back::before,
    .flip-card__back::after
      width 1.9em
      color #4B4B4B
      background #D8D8D8

    .flip-card__bottom,
    .flip-card__back-bottom,
    .flip-card__bottom-4digits,
    .flip-card__back-bottom-4digits
      color #666666
      background #EEEEEE
      border-top 1px solid #4B4B4B
</style>
