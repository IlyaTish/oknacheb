<template lang='pug'>
  .wrapper
    block-main(:handlers='handlers')

    main.main-content(:class='{ "main-content--left": handlers.alignLeft }')
      block-sidebar(:handlers='handlers')

      .main-content__col
        block-okna-heading
        block-gallery-sm
        block-okna-stages
        section.offer-wrapper
          block-offer(
            :offer='okno'
            :handlers='handlers'
          )
          block-offer-form
</template>

<script>
  import Offers from '../../data/offers-data'
  import SidebarOffers from '@/data/okna-page/sidebar-data'

  import BlockMain        from '@/components/common/block-main'
  import BlockOknaHeading from '@/components/okna-components/block-okna-heading'
  import BlockGallerySm   from '@/components/common/block-gallery-sm'
  import BlockOknaStages  from '@/components/okna-components/block-okna-stages'
  import BlockOffer       from '@/components/common/block-offer'
  import BlockOfferForm   from '@/components/common/block-offer-form'
  import BlockSidebar     from '@/components/common/block-sidebar'

  export default {
    props: {
      handlers: Object
    },
    components: {
      BlockMain,
      BlockOknaHeading,
      BlockGallerySm,
      BlockOknaStages,
      BlockOffer,
      BlockOfferForm,
      BlockSidebar
    },
    data() {
      return {
        okno: Offers.OKNO
      }
    },
    mounted() {
      this.handlers.payments = false;
      this.handlers.alignLeft = true;
      this.handlers.sidebar.offers = SidebarOffers.OFFERS;
      this.handlers.sidebar.video = false;
    }
  }
</script>
