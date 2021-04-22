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
          block-offer-form(:offer='okno')

        block-gallery-sm

        section.offer-wrapper
          block-offer(
            :offer='balkon'
            :handlers='handlers'
          )
          block-offer-form(:offer='balkon')

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
  import Mixins from '@/assets/scripts/mixins'
  import Offers from '@/data/offers-data'

  import BlockMain       from '@/components/common-components/Main/component'
  import BlockBanner     from '@/components/page-components/home-page/Banner/component'
  import BlockCalculator from '@/components/page-components/home-page/Calculator/component'
  import BlockOffer      from '@/components/common-components/Offer/component'
  import BlockOfferForm  from '@/components/common-components/OfferForm/component'
  import BlockGallerySm  from '@/components/common-components/GallerySm/component'
  import BlockWork       from '@/components/page-components/home-page/Work/component'
  import BlockSidebar    from '@/components/common-components/Sidebar/component'
  import BlockGallery    from '@/components/page-components/home-page/Gallery/component'
  import BlockAbout      from '@/components/page-components/home-page/About/component'
  import BlockGuarantee  from '@/components/page-components/home-page/Guarantee/component'
  import BlockReviews    from '@/components/page-components/home-page/Reviews/component'
  import BlockThanks     from '@/components/page-components/home-page/Thanks/component'

  import CalculatorPopup from '@/components/popup-components/CalculatorPopup/component'
  import VideoPopup      from '@/components/popup-components/VideoPopup/component'


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
      this.handlers.payments = true
      this.handlers.alignLeft = false
      this.handlers.sidebar.offers = false
      this.handlers.sidebar.video = true
    }
  }
</script>
