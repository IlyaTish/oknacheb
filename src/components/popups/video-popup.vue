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

<style lang='stylus'>
  .video-popup
    .popup__cont
      width: 100%
      max-width: 980px
      min-height: 560px
      margin: auto
      padding: 10px
      position: relative
      background-color: #FFFFFF
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33)
      box-sizing: border-box
      transition: ease .3s
      z-index: 4
      
    .popup-bg
      background-color: rgba(0, 0, 0, .8)
</style>
