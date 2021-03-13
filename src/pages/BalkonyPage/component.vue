<template lang='pug'>
  .wrapper
    block-main(:handlers='handlers')

    main.main-content(:class='{ "main-content--left": handlers.alignLeft }')
      block-sidebar(:handlers='handlers')

      .main-content__col
        block-balkony-heading(:handlers='handlers')
        block-gallery-sm
        block-balkony-info
        block-balkony-restoration
        section.offer-wrapper
          block-offer(
            :offer='balkon'
            :handlers='handlers'
          )
          block-offer-form
</template>

<script>
  import Offers        from '@/data/offers-data'
  import SidebarOffers from '@/data/balkony-page/data'

  import BlockMain               from '@/components/common-components/Main/component'
  import BlockBalkonyHeading     from '@/components/page-components/balkony-page/BalkonyHeading/component'
  import BlockGallerySm          from '@/components/common-components/GallerySm/component'
  import BlockBalkonyInfo        from '@/components/page-components/balkony-page/BalkonyInfo/component'
  import BlockBalkonyRestoration from '@/components/page-components/balkony-page/BalkonyRestoration/component'
  import BlockOffer              from '@/components/common-components/Offer/component'
  import BlockOfferForm          from '@/components/common-components/OfferForm/component'
  import BlockSidebar            from '@/components/common-components/Sidebar/component'

  export default {
    props: {
      handlers: Object
    },
    components: {
      BlockMain,
      BlockBalkonyHeading,
      BlockGallerySm,
      BlockBalkonyInfo,
      BlockBalkonyRestoration,
      BlockOffer,
      BlockOfferForm,
      BlockSidebar
    },
    data() {
      return {
        balkon: Offers.BALKON
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
