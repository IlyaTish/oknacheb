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
  import CommonIcon from '@/assets/icons/common-icon'

  export default {
    mixins: [Mixins],

    components: {
      CommonIcon
    }
  }
</script>

<style src='./style.stylus' lang='stylus' scoped></style>
