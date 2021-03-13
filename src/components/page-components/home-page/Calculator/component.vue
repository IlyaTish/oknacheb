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
  import Conf   from '@/data/home-page/data'

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

<style src='./style.stylus' lang='stylus' scoped></style>
