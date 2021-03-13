<template lang='pug'>
  section.map
    .map__cont
      #ya-karto.ya-karto
        yandex-map(
          :coords='coords'
          :zoom='17'
          :controls='["zoomControl", "fullscreenControl"]'
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
  import Mixins     from '@/assets/scripts/mixins'
  import CommonIcon from '@/assets/icons/common-icon'

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

<style src='./style.stylus' lang='stylus' scoped></style>
