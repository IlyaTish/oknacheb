<template lang='pug'>
  footer.footer
    .footer__cont
      .footer-info
        p.footer-info__p ежедневно с&nbsp;8:00 до&nbsp;20:00
        a.footer-info__phone(:href='"tel:" + this.$CONSTANTS.phone_raw')
          common-icon.footer-info__icon(width='30' height='30' name='phone-round' fill='#5B5B5B')
          | {{ this.$CONSTANTS.phone }}
        span.footer-info__subtitle заказ по&nbsp;телефону
        p.footer-comp-info ЛЕГОС&trade; ИП&nbsp;Паутов&nbsp;В.&nbsp;В. <br>ОГРНИП 319213000008859 <br>ул. К.&nbsp;Воробьевых, 20, <br>офис 512&nbsp;ДОМ МОД, 5&nbsp;этаж <br><br>E-mail: <a href='mailto:oknacheb21@mail.ru' class='blue'>oknacheb21@mail.ru</a>

      .footer__col
        nav.footer-nav
          ul.footer-nav__list
            li.footer-nav__item
              a.footer-nav__link Главная
            li.footer-nav__item
              a.footer-nav__link Монтаж окон
            li.footer-nav__item
              a.footer-nav__link Монтаж балконов
            li.footer-nav__item
              a.footer-nav__link Выбираем профиль
            li.footer-nav__item
              a.footer-nav__link Галлерея
            li.footer-nav__item
              a.footer-nav__link Аксессуары
            li.footer-nav__item
              a.footer-nav__link Контакты

        .footer-bottom
          p.footer-bottom__p Окна в&nbsp;Чебоксарах <br>Пластиковые окна в&nbsp;Чебоксарах <br>Балконные рамы в&nbsp;Чебоксарах <br>Пластиковые окна в&nbsp;Чебоксарах
          button.btn(@click='showPopup({ name: "writePopup" })') Письмо директору

        .footer__row
          .footer-social
            a.footer-social__item.vk(href='https://vk.com/okna_cheb' target='_blank')
              common-icon.vk-icon(width='20' height='20' name='vk' fill='#FFFFFF')
            .footer-social__item.mastercard-visa
              img(src='@/assets/images/footer/payments.png' alt='Платежные системы Mastercard, Visa')

    .grass
</template>

<script>
  import Mixins from '@/assets/scripts/mixins'
  import CommonIcon from '../../assets/icons/common-icon'

  export default {
    mixins: [Mixins],
    components: {
      CommonIcon
    },
    data() {
      return {
      }
    }
  }
</script>

<style lang='stylus'>
  .footer
    margin: 20px 0 0
    padding: 0 0 60px
    position: relative
    background: url('../../assets/images/footer/bg.jpg') no-repeat
    background-size: 100% 100%

    &__cont
      display: flex
      justify-content: space-between

    &__col
      padding: 0 20px
      box-sizing: border-box

    .grass
      width: 100%
      height: 40px
      left: 0
      bottom: 0
      position: absolute
      background: url('../../assets/images/footer/grass.png') no-repeat
      background-size: 100% 100%
      z-index: 2

  .footer-info
    width: 100%
    max-width: 240px
    padding: 15px 0 0 40px
    text-align: right

    &__p
      margin: 0
      color: #5B5B5B
      font-size: 13px
      font-style: italic

    &__icon
      margin: 0 8px 0 0

    &__phone
      display: flex
      align-items: center
      justify-content: flex-end
      color: #5B5B5B
      font-size: 24px
      font-weight: 600
      font-style: italic
      text-align: right
      text-decoration: none

    &__subtitle
      width: 100%
      display: inline-block
      color: #5B5B5B
      font-style: italic

  .footer-comp-info
    margin: 30px 0 0
    color: #000000
    font-size: 13px

    .blue
      color: #00A0E3

  .footer-nav
    margin: 10px 0 0

    &__list
      margin: 0
      padding: 0
      display: flex
      flex-wrap: wrap
      justify-content: flex-end

    &__item
      margin: 0 0 10px 14px
      list-style: none

    &__link
      padding: 0 0 5px
      color: #005380
      font-size: 10px
      font-weight: 600
      text-transform: uppercase
      border-bottom: 1px solid #005380
      transition: .2s
      cursor: pointer

      &:hover
        color: lighten(#005380, 20%)
        border-bottom: 1px solid lighten(#005380, 20%)

  .footer-bottom
    margin: 20px 0 0
    padding: 0 0 0 14px
    display: flex
    align-items: flex-start
    justify-content: space-between

    &__p
      margin: 0
      color: #009DEA
      font-size: 12px
      line-height: 20px

    .btn
      padding: 6px 10px
      font-size: 11px

  .footer-social
    margin: 20px 0 0
    padding: 0 0 0 14px
    display: flex
    align-items: center

    &__item.vk
      width: 30px
      height: 30px
      margin: 0 6px 0 0
      display: flex
      align-items: center
      justify-content: center
      background: #0C7EC5
      border-radius: 100%
      text-decoration: none
      transition: .2s
      cursor: pointer

      &:hover
        background: darken(#0C7EC5, 20%)

    &__item.mastercard-visa
      max-width: 130px


  @media (max-width: 993px)
    .footer-bottom
      justify-content: flex-end

      &__p
        display: none

    .footer-social
      justify-content: flex-end

  @media (max-width: 769px)
    .footer-nav
      &__item
        margin: 0 0 6px 14px

      &__link
        padding: 0 0 2px

    .footer-info
      max-width: 200px
      padding: 15px 0 0 20px

      &__p
        font-size: 12px

      &__icon
        width: 24px
        height: 24px
        margin: 0 4px 0 0

      &__phone
        font-size: 20px
        line-height: 20px

      &__subtitle
        font-size: 14px

    .footer-comp-info
      margin: 44px 0 0
      font-size: 12px

  @media (max-width: 581px)
    .footer
      padding: 20px 20px 60px

      &__col
        width: 100%
        max-width: 100%
        padding: 0
        display: flex
        flex-wrap: wrap
        align-items: flex-start
        justify-content: flex-end

      &__row
        margin-top: auto

    .footer-info
      max-width: 100%
      padding: 0
      text-align: left

      &__icon
        display: none

      &__phone
        justify-content: flex-start
        text-align: left

    .footer-comp-info
      margin: 16px 0 0
      text-align: left

    .footer-nav
      display: none

    .footer-bottom
      margin: 0
      padding: 0
      display: block

    .footer-social
      margin: 0
      padding: 0
      justify-content flex-end

  @media (max-width: 481px)
    .footer
      padding: 20px

      .grass
        display: none

    .footer-social
      &__item.vk
        width: 22px
        height: 22px

        .vk-icon
          width: 14px
          height: 14px

      &__item.mastercard-visa
        max-width: 88px

  @media (max-width: 390px)
    .footer
      &__col
        margin: 20px 0 0
        flex-direction: column
        justify-content: center

      &__row
        display: block
        margin: 0 auto

    .footer__cont
      flex-direction: column

    .footer-info
      &__p
        text-align: center

      &__phone
        justify-content: center
        text-align: center

      &__subtitle
        text-align: center

    .footer-comp-info
      text-align: center

    .footer-bottom
      margin: 0 auto

    .footer-social
      margin: 10px 0 0
</style>
