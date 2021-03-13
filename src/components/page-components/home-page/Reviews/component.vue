<template lang='pug'>
  section.reviews
    .reviews__cont
      .reviews__col-1
        h2.reviews__title Качественная работа&nbsp;&mdash; высокая репутация
        p.reviews__p С&nbsp;2011 года мы&nbsp;учавствуем в&nbsp;общественных проектах и&nbsp;телепередачах. Выполняя разнообразные по&nbsp;сложности заказы, мы&nbsp;беремся реализовывать любые дизайнерские решения и&nbsp;желания прогрессивных семей Чувашии.
        .reviews__info
          span.reviews__info-title Отзывы о&nbsp;нас
          .reviews__rate-cont
            common-icon.reviews__rate(width='18' height='18' name='star')
            common-icon.reviews__rate(width='18' height='18' name='star')
            common-icon.reviews__rate(width='18' height='18' name='star')
            common-icon.reviews__rate(width='18' height='18' name='star')
            common-icon.reviews__rate(width='18' height='18' name='star')
          .reviews__social.vk-icon
            common-icon.reviews__social-icon(width='20' height='20' name='vk' fill='#FFFFFF')
          .reviews__social.youtube-icon
            common-icon.reviews__social-icon(width='20' height='20' name='youtube' fill='#FF0102')

      .reviews__col-2
        span.reviews__subtitle Более 1000 рукописных отзывов о&nbsp;нашей работе
        img.reviews__img(src='@/assets/images/reviews/reviews.png' alt='Отзывы о компании ЛЕГОС')

    .video-reviews
      h3.video-reviews__title Отзывы о&nbsp;компании ОКНА ЛЕГОС Чебоксары&nbsp;›
      .video-reviews__cont
        swiper.video-reviews-swiper(:options='swiperOptions')
          swiper-slide(
            v-for='review in reviews'
            :key='review.title'
          )
            .video-review(@click='showPopup({ name: "videoPopup", id: ""+ review.videoId +"" })')
              .video-review__img-cont
                img.video-review__img(:src='review.img' :srcset='review.img_2x' :alt='review.alt')
              span.video-review__tag Видео-отзыв
              h4.video-review__title {{ review.title }}
              .video-review__metabox
                span.video-review__meta {{ review.date }}
          .swiper-button-prev(slot='button-prev')
          .swiper-button-next(slot='button-next')
</template>

<script>
  import Mixins from '@/assets/scripts/mixins'
  import Reviews    from '@/data/video-reviews-data'
  import CommonIcon from '@/assets/icons/common-icon'

  export default {
    mixins: [Mixins],
    props: {
      handlers: Object
    },
    components: {
      CommonIcon
    },
    data() {
      return {
        reviews: Reviews.REVIEWS,
        swiperOptions: {
          direction: 'horizontal',
          freeMode: false,
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 10,
          mousewheel: {
            forceToAxis: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          breakpoints: {
            479: {
              freeMode: true,
              slidesPerView: 'auto',
              spaceBetween: 30
            }
          }
        }
      }
    }
  }
</script>

<style src='./style.stylus' lang='stylus' scoped></style>
