<template lang='pug'>
  .wrapper
    block-main(:handlers='handlers')

    main.main-content
      block-veka
</template>

<script>
  import BlockMain from '@/components/common-components/Main/component'
  import BlockVeka from '@/components/page-components/profil-page/Veka/component'

  export default {
    props: {
      handlers: Object
    },
    components: {
      BlockMain,
      BlockVeka
    },
    mounted() {
      this.handlers.payments = false
    }
  }
</script>
