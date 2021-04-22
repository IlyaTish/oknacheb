<template lang='pug'>
  section.offer-form
    .flipclock-wrapper
      span.offer-form__subtitle До&nbsp;конца акции осталось:
      flip-countdown(
        :deadline='deadline'
        :showDays='false'
      )

    .offer-form__cont
      form.offer-form__form(@submit='submit')
        input(type='hidden' name='project_name' value='oknacheb.ru')
        input(type='hidden' name='admin_email'  value='ilya.tishencko676@yandex.ru')
        input(type='hidden' name='form_subject' :value='this.formSubjectValue')

        h2.offer-form__title Оставить заявку <br>по&nbsp;акции
        input.input(type='text' name='Имя' placeholder='Имя' required)
        imask-input.calculator-form__input.input(
          v-imask='mask'
          name='Телефон'
          placeholder='Телефон'
          required
        )
        input.input(type='text' name='Адрес' placeholder='Aдрес (не обязательно)')
        button.btn Заказать сейчас
      p.offer-form__p Оставьте заявку, и&nbsp;наш специалист рассчитает стоимость заказа с&nbsp;учетом всех ваших пожеланий
</template>


<script>
import Mixins from '@/assets/scripts/mixins'

import moment from 'moment'
import FlipCountdown from 'vue2-flip-countdown'

import { IMaskComponent, IMaskDirective } from 'vue-imask'


const fmt = 'YYYY-MM-DD HH:mm:ss'

export default {
  mixins: [Mixins],

  props: {
    offer: Object
  },

  components: {
    FlipCountdown,
    'imask-input': IMaskComponent
  },

  data() {
    return {
      deadlinets: moment()
        .endOf('day')
        .valueOf(),

      mask: {
        mask: '+{7} (000) 000-00-00',
        lazy: false
      }
    }
  },

  computed: {
    deadline() {
      return moment(this.deadlinets).format(fmt)
    },

    formSubjectValue() {
      return `Заявка со страницы "${this.$route.name}" (${this.offer.title})`
    }
  },

  directives: {
    imask: IMaskDirective
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
