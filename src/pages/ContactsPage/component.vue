<template lang='pug'>
  .wrapper
    block-main(:handlers='handlers')

    main.main-content
      section.offer-wrapper
        block-contacts-info(:item='Office')
        block-contacts-info(:item='Warehouse')
</template>

<script>
  import { Office, Warehouse } from '@/data/contacts-page/data'

  import BlockMain         from '@/components/common-components/Main/component'
  import BlockContactsInfo from '@/components/page-components/contacts-page/ContactsInfo/component'

  export default {
    props: {
      handlers: Object
    },
    components: {
      BlockMain,
      BlockContactsInfo
    },
    data() {
      return {
        Office: Office,
        Warehouse: Warehouse
      }
    },
    mounted() {
      this.handlers.payments = false
      this.handlers.alignLeft = true
      this.handlers.sidebar.video = true
    }
  }
</script>
