<template lang='pug'>
  .wrapper
    block-main(:handlers='handlers')

    main.main-content(:class='{ "main-content--left": handlers.alignLeft }')
      block-sidebar(:handlers='handlers')

      .main-content__col
        .offer-wrapper
          block-accessories-offer(
            v-for='offer in offers'
            :offer='offer'
            :key='offer.title'
          )
</template>

<script>
  import SidebarOffers from '@/data/balkony-page/data'
  import Offers        from '@/data/accessories-page/data'

  import BlockMain             from '@/components/common-components/Main/component'
  import BlockSidebar          from '@/components/common-components/Sidebar/component'
  import BlockAccessoriesOffer from '@/components/page-components/accessories-page/AccessoriesOffer/component'

  export default {
    props: {
      handlers: Object
    },
    components: {
      BlockMain,
      BlockSidebar,
      BlockAccessoriesOffer
    },
    data() {
      return {
        offers: Offers.OFFERS
      }
    },
    mounted() {
      this.handlers.payments = false
      this.handlers.alignLeft = true
      this.handlers.sidebar.offers = SidebarOffers.OFFERS
      this.handlers.sidebar.video = true
    }
  }
</script>
