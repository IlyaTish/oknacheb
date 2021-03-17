<template lang='pug'>
  section.accessories-offer
    h2.accessories-offer__title {{ offer.title }}
    span.accessories-offer__subtitle {{ offer.subtitle }}
    .accessories-offer__cont
      image-item.accessories-offer__img(
        :source='offer.img'
        :alt='offer.title'
      )
      p.accessories-offer__p {{ offer.txt }}
</template>

<script>
  import ImageItem from '@/components/common-components/ImageItem/component'

  export default {
    props: {
      offer: Object
    },
    components: {
      ImageItem
    }
  }
</script>

<style src='./style.stylus' lang='stylus' scoped></style>
