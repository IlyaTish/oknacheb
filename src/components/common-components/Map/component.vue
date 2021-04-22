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

          form.map-form__form(@submit='submit')
            input(type='hidden' name='project_name' value='oknacheb.ru')
            input(type='hidden' name='admin_email'  value='ilya.tishencko676@yandex.ru')
            input(type='hidden' name='form_subject' value='Заявка с главной страницы (на карте)')

            h2.map-form__title Заказать звонок
            input.input(type='text' name='Имя' placeholder='Имя')
            imask-input.input(
              v-imask='mask'
              name='Телефон'
              placeholder='+7 (___)-___-__-__'
              required
            )
            button.btn Оставить заявку
</template>


<script>
  import Mixins     from '@/assets/scripts/mixins'
  import CommonIcon from '@/assets/icons/common-icon'

  import { yandexMap, ymapMarker }          from 'vue-yandex-maps'
  import { IMaskComponent, IMaskDirective } from 'vue-imask'


  export default {
    mixins: [Mixins],

    components: {
      CommonIcon,
      yandexMap,
      ymapMarker,
      'imask-input': IMaskComponent
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
        },

        mask: {
          mask: '+{7} (000) 000-00-00',
          lazy: false
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
    },

    directives: {
      imask: IMaskDirective
    }
  }
</script>


<style src='./style.stylus' lang='stylus' scoped></style>

<style lang='stylus'>
.map-form
  .form-success
    height intrinsic
    height -moz-max-content
    height -webkit-max-content
    padding 10px 4px
    top calc(-74%)
    background rgba(0, 0, 0, .60)

    &__title
      margin 0 0 8px
      color #FFFFFF
      font-size 16px
      font-weight 600
      text-shadow -1px 2px 2px #00000094

    &__txt
      color #EAEAEA
      font-size 14px
      text-shadow -1px 2px 2px #00000094
</style>
