<template lang='pug'>
  svg(
    :width='width'
    :height='height'
    aria-hidden='true' 
    focusable='false'
    role='img'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 576 512'
  )
    path(
      :fill='fill'
      :d='path'
    )
</template>

<script>
  import icons from '../../data/icons.json';

  export default {
    props: {
      width: {
        type: [Number, String],
        default: 18
      },
      height: {
        type: [Number, String],
        default: 18
      },
      name: String,
      fill: {
        type: String,
        default: '#000000'
      }
    },
    computed: {
      path() {
        return icons[this.name];
      }
    }
  }
</script>
