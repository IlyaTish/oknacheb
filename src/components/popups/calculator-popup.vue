<template lang='pug'>
  .popup.calculator-popup
    .popup__cont
      button.btn-close(@click='handlers.popups.calculatorPopup = false') ×
      .calculator-popup__conf-cont
        .calculator-popup__conf-wrapper
          span.popup__title Доступные конфигурации:
          swiper(:options='swiperOptions')
            swiper-slide(
              v-for='img in configs'
              :key='img.id'
            )
              img.calculator-popup__conf-img(
                :src='img.src'
                :srcset='img.src_2x'
                :data-id='img.id'
                @click='selectConf(img)'
              )
            .swiper-button-prev(slot='button-prev')
            .swiper-button-next(slot='button-next')
            .swiper-pagination(slot='pagination')

      .calculator-popup__options-cont
        span.popup__title.popup__title--last Выбранная конструкция:
        .calculator-popup__cont
          .calculator-popup__col-1
            .calculator-popup__img-cont
              img.calculator-popup__img(
                :src='handlers.popups.data.okno.conf[0].src' 
                :srcset='handlers.popups.data.okno.conf[0].src'
              )
            .calculator-popup__options
              .input-wrapper
                span.input-title Ширина:
                input.input(
                  type='number'
                  name='Ширина'
                  placeholder='Ширина'
                )
              .input-wrapper
                span.input-title Высота:
                input.input(
                  type='number'
                  name='Высота'
                  placeholder='Высота'
                )
              .input-wrapper
                span.input-title Количество:
                input.input(
                  type='number'
                  name='Количество'
                  placeholder='Количество'
                )

          .calculator-popup__col-2
            span.popup__subtitle Дополнительные услуги:
            .calculator-popup__options
              .input-wrapper
                span.input-title Установка:
                select.input(
                  name='Установка'
                  placeholder='Установка'
                )
                  option(value='нет') нет
                  option(value='Монтаж без демонтажа') Монтаж без демонтажа
                  option(value='Монтаж и демонтаж' selected) Монтаж и демонтаж
              .input-wrapper
                span.input-title Москитка:
                select.input(
                  name='Москитка'
                  placeholder='Москитка'
                )
                  option(value='нет' selected) нет
                  option(value='требуется') требуется
              .input-wrapper
                span.input-title Подоконник:
                select.input(
                  name='Подоконник'
                  placeholder='Подоконник'
                )
                  option(value='нет' selected) нет
                  option(value='20 см') 20 см
                  option(value='30 см') 30 см
                  option(value='40 см') 40 см
                  option(value='50 см') 50 см
                  option(value='60 см') 60 см
                  option(value='70 см') 70 см
              .input-wrapper
                span.input-title Водоотлив:
                select.input(
                  name='Водоотлив'
                  placeholder='Водоотлив'
                )
                  option(value='нет' selected) нет
                  option(value='10 см') 10 см
                  option(value='15 см') 15 см
                  option(value='20 см') 20 см
                  option(value='25 см') 25 см
                  option(value='30 см') 30 см
                  option(value='40 см') 40 см
              .input-wrapper
                span.input-title Откосы:
                select.input(
                  name='Откосы'
                  placeholder='Откосы'
                )
                  option(value='нет' selected) нет
                  option(value='8-20 см') 8-20 см
                  option(value='21-35 см') 21-35 см
                  option(value='36-50 см') 36-50 см
                  option(value='51-65 см') 51-65 см

            .calculator-popup__send
              .input-wrapper
                span.input-title Телефон:
                input.input(
                  name='Телефон'
                  placeholder='Телефон'
                )
              button.btn Получить цены

    .popup-bg(@click='handlers.popups.calculatorPopup = false')
</template>

<script>
  export default {
    props: {
      handlers: Object
    },
    data() {
      return {
        configs: this.handlers.popups.data.okno.conf,
        swiperOptions: {
          direction: 'horizontal',
          slidesPerView: 'auto',
          freeMode: true,
          preventClicks: false,
          centerInsufficientSlides: true,
          watchOverflow: true,
          mousewheel: {
            forceToAxis: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
          }
        }
      }
    },
    methods: {
      selectConf(elem) {
        const thisElem = event.target,
              src      = elem.src,
              src_2x   = elem.src_2x,
              images   = document.querySelectorAll('.calculator-popup__conf-img'),
              img      = document.querySelector('.calculator-popup__img');

        images.forEach(elem => {
          elem.classList.remove('active');
          thisElem.classList.add('active')
        });

        img.setAttribute('src', src);
        img.setAttribute('srcset', src_2x);
      }
    },
    mounted() {
      const images   = document.querySelectorAll('.calculator-popup__conf-cont .swiper-slide img'),
            matchId  = this.configId,
            curId    = this.handlers.popups.data.currentId;

      [].forEach.call(images, function(elem) {
        const elemId = Number(elem.getAttribute('data-id'));
        if (elemId === curId) elem.classList.add('active')
      })
    }
  }
</script>

<style lang='stylus'>
  .popup.calculator-popup
    .popup__cont
      max-width: 680px
      padding: 0 0 30px

    .popup__title
      margin: 0 0 16px
      color: #009DEA
      font-size: 16px
      font-weight: 600
      letter-spacing: 1px

      &--last
        margin: 0 0 24px

    .popup__subtitle
      width: 100%
      display: inline-block
      margin: 0 0 20px
      color: #818181
      font-size: 16px
      font-weight: 400
      text-align: center

    .input-wrapper
      max-width: none
      display: flex
      margin: 0 auto 10px

    .input-title
      width: auto
      min-width: 70px
      margin: 0 10px 0 0
      color: #858585
      font-size: 13px
      font-weight: 400
      line-height: 30px

    .input
      padding: 5px 6px
      font-size: 14px

    .swiper-container
      margin: 0 40px
      position: unset !important

    .swiper-pagination
      top: -40px

    .swiper-slide
      width: auto !important

    .swiper-button-prev,
    .swiper-button-next
      top: calc(50% + 20px)

    .swiper-button-disabled
      opacity: 0

    .btn
      margin: 20px auto 0

  .calculator-popup
    &__conf-cont
      max-width: 100%
      padding: 40px 0 24px
      border-bottom: 1px solid #EEEEEE
      overflow: hidden
      position: relative

    &__conf-wrapper
      position: relative

    &__options-cont
      margin: 24px 0 0

    &__cont
      padding: 0 40px
      display: flex

    &__col-1, &__col-2
      width: 100%

    &__col-1
      margin: 0 40px 0 0

    &__conf-img
      width: auto
      height: 110px
      margin: 0 6px 0 0
      border: 5px solid transparent
      border-radius: 4px
      box-sizing: border-box
      cursor: pointer
      transition: .2s

      &:hover
        border: 5px solid lighten(#009DEA, 80%)

      &:last-of-type
        margin: 0

    &__conf-img.active
      border: 5px solid #009DEA

    &__img-cont
      height: 238px
      display: flex
      align-items: center
      justify-content: center

    &__img
      width: auto
      height: 150px
      margin: 0 auto

    &__send
      margin: 40px 0 0
</style>
