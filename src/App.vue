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

  import BlockHeader   from '@/components/common/block-header'
  import BlockCheckout from '@/components/common/block-checkout'
  import BlockMap      from '@/components/common/block-map'
  import BlockFooter   from '@/components/common/block-footer'

  import CommonPopup from '@/components/popups/common-popup'
  import WritePopup  from '@/components/popups/write-popup'

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
