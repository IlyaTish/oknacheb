<template lang='pug'>
  section.map
    .map__cont
      #ya-karto.ya-karto
        yandex-map(
          :coords='coords'
          :zoom='17'
          :scroll-zoom='false'
        )
          ymap-marker(
            marker-id='1' 
            marker-type="placemark"
            :coords='markerCoord'
            :icon='markerIcon'
            :balloon='balloon'
          )

      .map-form
        .map-form__cont
          .map-phone
            a.map-phone__icon-cont(:href='"tel:" + this.$CONSTANTS.phone_raw')
              common-icon.map-phone__icon(width='40' height='40' name='phone')
            .map-phone__txt-cont
              h3.map-phone__title Остались вопросы?
              span.map-phone__subtitle Если возникли вопросы&nbsp;&mdash; позвоните нам. <br>Мы&nbsp;ответим на&nbsp;все ваши вопросы!
          .map-form__form
            h2.map-form__title Заказать звонок
            input.input(type='text' name='Имя' placeholder='имя')
            input.input(type='text' name='Телефон' placeholder='+7 (___)-___-__-__')
            button.btn Оставить заявку
</template>

<script>
  import Mixins     from '../../assets/scripts/mixins'
  import CommonIcon from '../../assets/icons/common-icon'

  import { yandexMap, ymapMarker } from 'vue-yandex-maps'

  export default {
    mixins: [Mixins],
    components: {
      CommonIcon,
      yandexMap,
      ymapMarker
    },
    data() {
      return {
        phone:       this.$CONSTANTS.phone_raw,
        info:        this.$CONSTANTS,
        offices:     this.$CONSTANTS.offices,
        coords:      this.$CONSTANTS.center_coords,
        markerCoord: this.$CONSTANTS.offices.marker_1.coords,
        markerIcon: {
          layout:      'default#imageWithContent',
          imageHref:   '/static/map-balloon.png',
          imageSize:   [36, 50],
          imageOffset: [0, 0]
        },
        balloon: {
          header: this.$CONSTANTS.offices.marker_1.name,
          body: this.$CONSTANTS.offices.marker_1.address
        }
      }
    },
    mounted() {
      if (this.width <= 1201) {
        let coord_y = 56.144018996577906 + 0.0003,
            coord_x = 47.24758471163939 + 0.0002;

        this.coords = [
          coord_y,
          coord_x
        ]
      }
    }
  }
</script>

<style lang='stylus'>
  .map
    margin: 20px 0 0

    &__cont
      position: relative

  .ya-karto
    width: 100%
    height: 460px

  .ymap-container
    width: 100%
    height: 100%

  .map-form
    width: 600px
    height: 170px
    padding: 0 20px 20px
    left: 48px
    bottom: 44px
    position: absolute
    background: rgba(0,0,0,.44)
    box-sizing: border-box

    &__cont
      height: 100%
      display: flex
      align-items: center
      justify-content: space-between

    &__form
      max-width: 210px
      flex: 210px 0 0

    &__title
      width: 100%
      margin: 0 0 6px
      color: #FFFFFF
      font-size: 24px
      font-weight: 600
      text-align: center
      text-shadow: -1px 2px 2px #00000094

    .input
      max-width: 180px
      margin: 0 auto 4px
      display: block

    .btn
      width: 100%
      padding: 7px 10px

  .map-phone
    display: flex
    align-items: center

    &__icon-cont
      width: 70px
      height: 70px
      display: flex
      align-items: center
      justify-content: center
      border-radius: 10px
      background: #F8D500

    &__txt-cont
      padding: 5px
      background: rgba(0,0,0,.4);

    &__title
      margin: 0 0 4px
      color: #FFFFFF
      font-size: 17px
      font-weight: 400

    &__subtitle
      display: inline-block
      color: #FFFFFF
      font-size: 12px


  @media (max-width: 1201px)
    .map-form
      display: none

    .ya-karto
      height 340px

  @media (max-width: 769px)
    .ya-karto
      height 300px

  @media (max-width: 481px)
    .ya-karto
      height 220px
</style>
