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
  import Mixins from '../../assets/scripts/mixins'
  import Reviews    from '../../data/video-reviews-data'
  import CommonIcon from '../../assets/icons/common-icon'

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

<style lang='stylus'>
  .reviews
    margin: 40px 0 0
    border-top: 5px solid #DEDEDE
    background: linear-gradient(0deg, #ECECEC, #F9F9F9 90%, #FFFFFF)

    &__cont
      padding: 20px 30px 0
      display: flex
      justify-content: space-between
      background: url('../../assets/images/reviews/bg.png') no-repeat
      background-position: 100% 0
      background-size: contain

    &__title
      margin: 0
      color: #000000
      font-size: 20px
      text-transform: uppercase

    &__subtitle
      display: inline-block
      margin: 6px 0 0 auto
      color: #4f4f4f
      font-size: 15px

    &__p
      max-width: 456px
      margin: 10px 0 0 10px
      color: #4F4F4F
      font-size: 15px

    &__img
      max-width: 322px
      margin: 10px 0 0 auto

    &__info
      margin: 15px 0 0 10px
      display: flex
      align-items: center

    &__info-title
      margin: 0 10px 0 0
      color: #4F4F4F
      font-size: 20px
      text-decoration: underline

    &__rate-cont
      margin: 0 10px 0 0
      display: flex
      align-items: center

    &__rate
      margin: 0 4px 0 0

      &:last-of-type
        margin: 0

    &__social
      width: 30px
      height: 30px
      margin: 0 6px 0 0
      display: flex
      align-items: center
      justify-content: center
      border-radius: 5px
      outline: none
      transition: .2s
      cursor: pointer

      &:last-of-type
        margin: 0

    .vk-icon
      background: #0C7EC5

      &:hover
        background: lighten(#0C7EC5, 10%)

    .youtube-icon
      background: #FFFFFF

      &:hover
        background: darken(#FFFFFF, 8%)

  .video-reviews
    padding: 30px
    position: relative

    &__title
      width: 100%
      display: flex
      align-items: center
      margin: 0 0 14px
      color: #000000
      font-size: 16px
      font-weight: 400
      white-space: nowrap

      &:after
        content: ''
        width: 100%
        height: 1px
        display: inline-block
        margin: 0 0 0 10px
        top: 1px
        position: relative
        background: #000000

    .swiper-container
      position: unset !important

    .swiper-slide
      max-width: 160px

    .swiper-button-prev
      left: 4px

    .swiper-button-next
      right: 4px

  .video-review
    text-decoration: none
    cursor: pointer

    &__tag
      margin: 8px 0 10px
      display: inline-block
      color: #999999
      font-size: 11px
      font-weight: 400
      text-transform: uppercase

    &__title
      margin: 0 0 14px
      color: #000000
      font-size: 12px
      font-weight: 600

    &__metabox
      display: flex
      flex-wrap: wrap

    &__meta
      color: #999999
      font-size: 12px


  @media (max-width: 991px)
    .reviews
      margin: 0
      border: none
      background: #F5F5F5

      &__cont
        display: none

    .video-reviews
      padding: 14px 30px 16px

  @media (max-width: 579px)
    .video-reviews
      &__title
        &:after
          display: none

  @media (max-width: 479px)
    .video-reviews
      &__title
        display: none

      .swiper-slide
        max-width: 100%

    .video-review
      &__img
        width: 100%

      &__tag
        margin: 14px 0 10px
        font-size: 12px

      &__title
        font-size: 14px
</style>
