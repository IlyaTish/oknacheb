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
  import SidebarOffers from '@/data/balkony-page/sidebar-data'

  import BlockMain               from '@/components/common/block-main'
  import BlockBalkonyHeading     from '@/components/balkony-components/block-balkony-heading'
  import BlockGallerySm          from '@/components/common/block-gallery-sm'
  import BlockBalkonyInfo        from '@/components/balkony-components/block-balkony-info'
  import BlockBalkonyRestoration from '@/components/balkony-components/block-balkony-restoration'
  import BlockOffer              from '@/components/common/block-offer'
  import BlockOfferForm          from '@/components/common/block-offer-form'
  import BlockSidebar            from '@/components/common/block-sidebar'

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
      this.handlers.payments = false;
      this.handlers.alignLeft = true;
      this.handlers.sidebar.offers = SidebarOffers.OFFERS;
      this.handlers.sidebar.video = true;
    }
  }
</script>
