<template lang='pug'>
  .wrapper
    block-main(:handlers='handlers')

    main.main-content
      .main-content__col
</template>

<script>
  import BlockMain from '@/components/common-components/Main/component'

  export default {
    props: {
      handlers: Object
    },
    components: {
      BlockMain
    },
    data() {
      return {
        okno: Offers.OKNO
      }
    },
    mounted() {
      this.handlers.payments = false
    }
  }
</script>
