<template lang='pug'>
  .wrapper
    block-main(:handlers='handlers')
    block-banner(:handlers='handlers')
    block-calculator

    main.main-content(:class='{ "main-content--left": handlers.alignLeft }')
      .main-content__col
        section.offer-wrapper
          block-offer(
            :offer='okno'
            :handlers='handlers'
          )
          block-offer-form
        block-gallery-sm
        section.offer-wrapper
          block-offer(
            :offer='balkon'
            :handlers='handlers'
          )
          block-offer-form
        block-work

      block-sidebar(:handlers='handlers')

    block-gallery
    block-about
    block-guarantee
    block-reviews(:handlers='handlers')
    block-thanks

    transition(name='popup')
      calculator-popup(
        :handlers='handlers'
        v-if='this.handlers.popups.calculatorPopup'
      )

      video-popup(
        :handlers='handlers'
        v-if='this.handlers.popups.videoPopup'
      )
</template>

<script>
  import Mixins from '../../assets/scripts/mixins'
  import Offers from '../../data/offers-data'

  import BlockMain       from '@/components/common/block-main'
  import BlockBanner     from '@/components/home-components/block-banner'
  import BlockCalculator from '@/components/home-components/block-calculator'
  import BlockOffer      from '@/components/common/block-offer'
  import BlockOfferForm  from '@/components/common/block-offer-form'
  import BlockGallerySm  from '@/components/common/block-gallery-sm'
  import BlockWork       from '@/components/home-components/block-work'
  import BlockSidebar    from '@/components/common/block-sidebar'
  import BlockGallery    from '@/components/home-components/block-gallery'
  import BlockAbout      from '@/components/home-components/block-about'
  import BlockGuarantee  from '@/components/home-components/block-guarantee'
  import BlockReviews    from '@/components/home-components/block-reviews'
  import BlockThanks     from '@/components/home-components/block-thanks'

  import CalculatorPopup from '@/components/popups/calculator-popup'
  import VideoPopup      from '@/components/popups/video-popup'

  export default {
    mixins: [Mixins],
    props: {
      handlers: Object
    },
    components: {
      BlockMain,
      BlockBanner,
      BlockCalculator,
      BlockOffer,
      BlockOfferForm,
      BlockGallerySm,
      BlockWork,
      BlockGallery,
      BlockSidebar,
      BlockAbout,
      BlockGuarantee,
      BlockReviews,
      BlockThanks,
      CalculatorPopup,
      VideoPopup
    },
    data() {
      return {
        okno: Offers.OKNO,
        balkon: Offers.BALKON
      }
    },
    mounted() {
      this.handlers.payments = true;
      this.handlers.alignLeft = false;
      this.handlers.sidebar.offers = false;
      this.handlers.sidebar.video = true;
    }
  }
</script>
