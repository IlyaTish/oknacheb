<template lang='pug'>
  .video-popup.popup
    .popup__cont
      button.btn-close(@click='handlers.popups.videoPopup = false') ×
      youtube(
        player-width='960'
        player-height='540'
        :video-id='handlers.popups.data.id'
      )
    .popup-bg(@click='handlers.popups.videoPopup = false')
</template>

<script>
  import Mixins from '@/assets/scripts/mixins'

  export default {
    mixins: [Mixins],
    props: {
      handlers: Object
    }
  }
</script>

<style src='./style.stylus' lang='stylus' scoped></style>
