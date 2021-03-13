<template lang='pug'>
  section.offer(:class='offer.class')
    .offer-heading
      h1.offer-heading__title <b v-if='offer.boldHeading'>{{ offer.boldHeading }}</b> {{ offer.heading }}
      span.offer-heading__info *подробности уточняйте по&nbsp;тел.

    .offer__cont(@click='showPopup({ name: "commonPopup" })')
      span.offer__subtitle(v-if='offer.subtitle') {{ offer.subtitle }}
      .offer__row
        .offer__img-cont
          img.offer__img(:src='offer.img')

        .offer__info-cont
          h2.offer__title {{ offer.title }}
          p.offer__p {{ offer.description }}

          .offer__price-cont
            .price-left
              span от&nbsp;<span class='offer__price'>{{ offer.price }}</span>&nbsp;руб.
            .price-right
              span.offer__price-txt в&nbsp;рассрочку на&nbsp;4&nbsp;мес.
              span.offer__price-txt <span class='red'>{{ offer.price_dop }}</span>&nbsp;руб./мес.

          .offer__dop
            span.offer__dop-txt Стоимость зависит от&nbsp;размеров вашего окна
</template>

<script>
  import Mixins from '@/assets/scripts/mixins'

  export default {
    mixins: [Mixins],
    props: {
      offer:    Object,
      handlers: Object
    }
  }
</script>

<style src='./style.stylus' lang='stylus' scoped></style>
