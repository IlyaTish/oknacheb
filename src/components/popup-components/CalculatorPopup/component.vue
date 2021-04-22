<template lang='pug'>
  .popup.calculator-popup
    .popup__cont
      button.btn-close(@click='handlers.popups.calculatorPopup = false') ×

      .calculator-popup__conf-cont
        .calculator-popup__conf-wrapper
          span.popup__title Доступные конфигурации:
          .calculator-popup-swiper
            swiper(:options='swiperOptions')
              swiper-slide(
                v-for='config in configs'
                :key='config.id'
              )
                img.calculator-popup__conf-img(
                  :src='config.src'
                  :srcset='config.src_2x'
                  :data-id='config.id'
                  :data-width='config.width'
                  :data-height='config.height'
                  :alt='config.name'
                  @click='selectConf(config)'
                )
              .swiper-button-prev(slot='button-prev')
              .swiper-button-next(slot='button-next')
              .swiper-pagination(slot='pagination')

      .calculator-popup__options-cont
        span.popup__title.popup__title--last Выбранная конструкция:

        form.calculator-popup__cont(@submit='submit')
          input(type='hidden' name='project_name' value='oknacheb.ru')
          input(type='hidden' name='admin_email' value='ilya.tishencko676@yandex.ru')
          input(type='hidden' name='form_subject' value='Заявка с главной страницы (калькулятор)')
          input(type='hidden' name='Тип изделия' ref='productType')

          .calculator-popup__col-1
            .calculator-popup__img-cont
              img.calculator-popup__img(
                :src='handlers.popups.data.obj[0].conf[this.currentConfig.id - 1].src' 
                :srcset='handlers.popups.data.obj[0].conf[this.currentConfig.id - 1].src'
                ref='mainImg'
              )

            .calculator-popup__options
              .input-wrapper
                span.input-title Ширина:
                input.input(
                  type='number'
                  name='Ширина'
                  placeholder='Ширина'
                  ref='widthInput'
                )

              .input-wrapper
                span.input-title Высота:
                input.input(
                  type='number'
                  name='Высота'
                  placeholder='Высота'
                  ref='heightInput'
                )

              .input-wrapper
                span.input-title Количество:
                input.input(
                  type='number'
                  name='Количество'
                  placeholder='Количество'
                  value='1'
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

              .input-wrapper(v-if='handlers.popups.data.confName === "okna"')
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

              .input-wrapper(v-if='handlers.popups.data.confName === "okna"')
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
                imask-input.input(
                  v-imask='mask'
                  name='Телефон'
                  placeholder='Телефон'
                  required
                )

              button.btn Получить цены

    .popup-bg(@click='handlers.popups.calculatorPopup = false')
</template>

<script>
  import Mixins from '@/assets/scripts/mixins'
  import { IMaskComponent, IMaskDirective } from 'vue-imask'

  export default {
    mixins: [Mixins],

    props: {
      handlers: Object
    },

    components: {
      'imask-input': IMaskComponent
    },

    data() {
      return {
        configs: this.handlers.popups.data.obj[0].conf,

        currentConfig: {
          id: this.handlers.popups.data.obj[0].confId,
          width: this.handlers.popups.data.obj[0].width,
          height: this.handlers.popups.data.obj[0].height,
          name: this.handlers.popups.data.obj[0].name
        },

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
        },

        mask: {
          mask: '+{7} (000) 000-00-00',
          lazy: false
        }
      }
    },

    methods: {
      selectConf(config) {
        const thisElem = event.target,
              src      = config.src,
              src_2x   = config.src_2x,
              images   = document.querySelectorAll('.calculator-popup__conf-img'),
              img      = this.$refs.mainImg,

              widthInput       = this.$refs.widthInput,
              heightInput      = this.$refs.heightInput,
              productTypeInput = this.$refs.productType;

        // Set inputs value by data attributes parameters

        widthInput.value       = Number(thisElem.getAttribute('data-width'));
        heightInput.value      = Number(thisElem.getAttribute('data-height'));
        productTypeInput.value = thisElem.getAttribute('alt');

        images.forEach(img => {
          img.classList.remove('active')
          thisElem.classList.add('active')
        });

        img.setAttribute('src', src)
        img.setAttribute('srcset', src_2x)
      }
    },

    mounted() {
      const swiperImages = document.querySelectorAll('.calculator-popup__conf-cont .swiper-slide img'),

            widthInput       = this.$refs.widthInput,
            heightInput      = this.$refs.heightInput,
            productTypeInput = this.$refs.productType;

      widthInput.value       = this.currentConfig.width;
      heightInput.value      = this.currentConfig.height;
      productTypeInput.value = this.currentConfig.name;

      // Set active class to image with matched id in swiper-container

      [].forEach.call(swiperImages, img => {
        const imgId = Number(img.getAttribute('data-id'))
        if (imgId === this.currentConfig.id) img.classList.add('active')
      })
    },

    directives: {
      imask: IMaskDirective
    }
  }
</script>

<style src='./style.stylus' lang='stylus' scoped></style>
