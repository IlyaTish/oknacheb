<template lang='pug'>
  section.gallery-sm
    swiper.gallery-sm-swiper.swiper(:options='swiperOptions')
      swiper-slide
        img.gallery-sm__img(src='@/assets/images/gallery-sm/pic-01.jpg', alt='Окна установленные компанией ЛЕГОС')
      swiper-slide
        img.gallery-sm__img(src='@/assets/images/gallery-sm/pic-02.jpg', alt='Окна установленные компанией ЛЕГОС')
      swiper-slide
        img.gallery-sm__img(src='@/assets/images/gallery-sm/pic-03.jpg', alt='Окна установленные компанией ЛЕГОС')
      swiper-slide
        img.gallery-sm__img(src='@/assets/images/gallery-sm/pic-04.jpg', alt='Окна установленные компанией ЛЕГОС')
      swiper-slide
        img.gallery-sm__img(src='@/assets/images/gallery-sm/pic-05.jpg', alt='Окна установленные компанией ЛЕГОС')
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
  .gallery-sm
    width: 100%
    margin: 0 0 20px
    padding: 32px 0
    position: relative
    background: #F5F5F5
    box-sizing: border-box

    &__img
      width: 100%
      height: 135px

  .gallery-sm-swiper
    margin: 0 22px
    position: unset !important

    .swiper-button-prev
      left: 0

    .swiper-button-next
      right: 0

    .swiper-slide
      max-width: 203px


  @media (max-width: 479px)
    .gallery-sm
      padding: 30px 0

      &__img
        height: auto

    .gallery-sm-swiper
      margin: 0 30px

      .swiper-slide
        max-width: 100%

      .swiper-button-prev
        left: 4px

      .swiper-button-next
        right: 4px
</style>
