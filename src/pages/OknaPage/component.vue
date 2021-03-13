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
  import Offers        from '@/data/offers-data'
  import SidebarOffers from '@/data/okna-page/sidebar-data'

  import BlockMain        from '@/components/common-components/Main/component'
  import BlockOknaHeading from '@/components/page-components/okna-page/OknaHeading/component'
  import BlockGallerySm   from '@/components/common-components/GallerySm/component'
  import BlockOknaStages  from '@/components/page-components/okna-page/OknaStages/component'
  import BlockOffer       from '@/components/common-components/Offer/component'
  import BlockOfferForm   from '@/components/common-components/OfferForm/component'
  import BlockSidebar     from '@/components/common-components/Sidebar/component'

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
