<template lang="pug">
  #app
    .container
      block-header
      router-view(:handlers='handlers')
      block-checkout
      block-map
      block-footer(:handlers='handlers')

      transition(name='popup')
        common-popup(
          :handlers='handlers'
          v-if='this.handlers.popups.commonPopup'
        )

        write-popup(
          :handlers='handlers'
          v-if='this.handlers.popups.writePopup'
        )
</template>

<script>
  import Mixins from '@/assets/scripts/mixins'

  import BlockHeader   from '@/components/common-components/Header/component'
  import BlockCheckout from '@/components/common-components/Checkout/component'
  import BlockMap      from '@/components/common-components/Map/component'
  import BlockFooter   from '@/components/common-components/Footer/component'

  import CommonPopup from '@/components/popup-components/CommonPopup/component'
  import WritePopup  from '@/components/popup-components/WritePopup/component'

  export default {
    name: 'App',
    mixins: [Mixins],
    components: {
      BlockHeader,
      BlockCheckout,
      BlockMap,
      BlockFooter,
      CommonPopup,
      WritePopup
    },
    data() {
      return {
        handlers: {
          payments: '',
          alignLeft: '',
          sidebar: {
            offers: '',
            video: ''
          },
          popups: this.$store.getters.popups,
        }
      }
    }
  }
</script>
