<template lang='pug'>
  section.gallery
    span.gallery__title Работы <b>&laquo;вживую&raquo;</b>
    .gallery__cont
      swiper.gallery-swiper.swiper(:options='swiperOptions')
        swiper-slide
          img.gallery__img(src='@/assets/images/gallery-sm/pic-01.jpg', alt='Окна установленные компанией ЛЕГОС')
        swiper-slide
          img.gallery__img(src='@/assets/images/gallery-sm/pic-02.jpg', alt='Окна установленные компанией ЛЕГОС')
        swiper-slide
          img.gallery__img(src='@/assets/images/gallery-sm/pic-03.jpg', alt='Окна установленные компанией ЛЕГОС')
        swiper-slide
          img.gallery__img(src='@/assets/images/gallery-sm/pic-04.jpg', alt='Окна установленные компанией ЛЕГОС')
        swiper-slide
          img.gallery__img(src='@/assets/images/gallery-sm/pic-05.jpg', alt='Окна установленные компанией ЛЕГОС')
        .swiper-button-prev(slot='button-prev')
        .swiper-button-next(slot='button-next')
</template>

<script>
  export default {
    data () {
      return {
        swiperOptions: {
          direction: 'horizontal',
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 5,
          autoplay: true,
          grabCursor: true,
          mousewheel: {
            forceToAxis: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          breakpoints: {
            479: {
              autoplay: true,
              slidesPerView: 'auto',
              slidesPerGroup: 3,
              loopedSlides: 3,
              speed: 600
            }
          }
        }
      }
    }
  }
</script>

<style lang='stylus'>
  .gallery
    width: 100%
    margin: 10px 0 20px
    padding: 16px 0
    background: #FFFFFF
    box-sizing: border-box

    &__title
      display: inline-block
      margin: 0 0 20px
      padding: 0 30px
      color: #000000
      font-size: 17px
      text-decoration: underline
      outline: none

    &__cont
      position: relative

    &__img
      width: 100%
      height: 128px

  .gallery-swiper
    margin: 0 30px
    position: unset !important

    .swiper-button-prev
      left: 0

    .swiper-button-next
      right: 0

    .swiper-slide
      max-width: 180px


  @media (max-width: 991px)
    .gallery
      margin: 0
      padding: 10px 0 0
      background #F5F5F5

  @media (max-width: 479px)
    .gallery
      &__title
        width: 100%
        margin: 0 0 10px
        padding: 0
        text-align: center

      &__img
        height: auto

    .gallery-swiper
      .swiper-slide
        max-width: 100%
</style>
