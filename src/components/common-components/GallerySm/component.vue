<template lang='pug'>
  section.gallery-sm
    swiper.gallery-sm-swiper.swiper(:options='swiperOptions')
      swiper-slide
        img.gallery-sm__img.swiper-lazy(
          :data-src='require("@/assets/images/gallery-sm/pic-01.jpg")',
          alt='Окна установленные компанией ЛЕГОС'
        )
        .swiper-lazy-preloader

      swiper-slide
        img.gallery-sm__img.swiper-lazy(
          :data-src='require("@/assets/images/gallery-sm/pic-02.jpg")',
          alt='Окна установленные компанией ЛЕГОС'
        )
        .swiper-lazy-preloader

      swiper-slide
        img.gallery-sm__img.swiper-lazy(
          :data-src='require("@/assets/images/gallery-sm/pic-03.jpg")',
          alt='Окна установленные компанией ЛЕГОС'
        )
        .swiper-lazy-preloader

      swiper-slide
        img.gallery-sm__img.swiper-lazy(
          :data-src='require("@/assets/images/gallery-sm/pic-04.jpg")',
          alt='Окна установленные компанией ЛЕГОС'
        )
        .swiper-lazy-preloader

      swiper-slide
        img.gallery-sm__img.swiper-lazy(
          :data-src='require("@/assets/images/gallery-sm/pic-05.jpg")',
          alt='Окна установленные компанией ЛЕГОС'
        )
        .swiper-lazy-preloader

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
          lazy: true,
          preloadImages: false,
          watchSlidesVisibility: true,
          watchOverflow: true,
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

<style src='./style.stylus' lang='stylus' scoped></style>
