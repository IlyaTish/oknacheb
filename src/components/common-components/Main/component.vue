<template lang='pug'>
  section.main
    .main__cont(@click='showPopup({ name: "commonPopup" })')
      .main-head
        img.main-head__img(src='@/assets/images/main/main-bg.svg')

      .main__col-1
        swiper.main-swiper(
          ref='mainSwiper'
          :options='swiperOptions'
        )
          swiper-slide
            img.main__img(src='@/assets/images/main/img-01.jpg')
          swiper-slide
            img.main__img(src='@/assets/images/main/img-02.jpg')
          swiper-slide
            img.main__img(src='@/assets/images/main/img-03.jpg')
          swiper-slide
            img.main__img(src='@/assets/images/main/img-04.jpg')
          swiper-slide
            img.main__img(src='@/assets/images/main/img-05.jpg')

      .main__col-2
        .main-phone
          span.main-phone__txt-s ежедневно с <span class='white'>8:00</span> до <span class='white'>20:00</span>
          span.phone {{ this.$CONSTANTS.phone }}
          span.main-phone__txt-m заказ по телефону

        .main-info
          h2.main-info__title Компания <b>ЛЕГОС</b><br> предлагает<br> продукт экстра-класса: <br>окна из профиля <b>VEKA</b><br>в Чебоксарах
          p.main-info__p -VEKA существует только в&nbsp;оригинале, в&nbsp;отличие от&nbsp;онкурентов у&nbsp;нее нет аналогов, подделок, клонов и&nbsp;имитаций
          p.main-info__p -VEKA&nbsp;&mdash; это только профили класса&nbsp;А, соответствующие RAL. В&nbsp;отличие от&nbsp;конкурентов, VEKA не&nbsp;выпускает профилей эконом-класса

    .payments(v-if='handlers.payments')
      img(src='@/assets/images/main/payments.png')
</template>

<script>
  import Mixins from '@/assets/scripts/mixins'

  export default {
    mixins: [Mixins],
    props: {
      handlers: Object
    },
    data() {
      return {
        swiperOptions: {
          direction: 'horizontal',
          loop: true,
          allowTouchMove: false,
          autoplay: {
            delay: 4000
          }
        }
      }
    }
  }
</script>

<style src='./style.stylus' lang='stylus' scoped></style>
