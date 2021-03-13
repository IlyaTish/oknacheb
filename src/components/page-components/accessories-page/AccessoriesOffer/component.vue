<template lang='pug'>
  section.accessories-offer
    h2.accessories-offer__title {{ offer.title }}
    span.accessories-offer__subtitle {{ offer.subtitle }}
    .accessories-offer__cont
      img.accessories-offer__img(
        :src='offer.img'
        :alt='offer.title'
      )
      p.accessories-offer__p {{ offer.txt }}
</template>

<script>
  export default {
    props: {
      offer: Object
    }
  }
</script>

<style src='./style.stylus' lang='stylus' scoped></style>
