<template lang='pug'>
  figure.image__wrapper(v-lazyload='')
    image-spinner.image__spinner
    img.image__item(
      :data-url='source'
      alt='random image'
    )
</template>

<script>
import ImageSpinner from '@/components/common-components/ImageSpinner/component'

export default {
  name: 'ImageItem',
  components: {
    ImageSpinner
  },
  props: {
    source: {
      type: String,
      required: true
    }
  }
}
</script>

<style src='./style.stylus' lang='stylus' scoped></style>
