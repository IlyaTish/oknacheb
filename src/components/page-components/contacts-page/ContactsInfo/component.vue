<template lang='pug'>
  section.contacts-info(:class='{ "contacts-info--temp-2": item.temp_2 }')
    h2.contacts-info__title {{ item.title }}
    span.contacts-info__subtitle {{ item.subtitle }}
    .contacts-info__wrapper
      .contacts-info__map
        yandex-map(
          :controls='options.controls'
          :coords='item.map.coords'
          :zoom='17'
          :scroll-zoom='false'
        )
          ymap-marker(
            marker-type='placemark'
            :marker-id='item.id' 
            :coords='item.map.markerCoord'
            :icon='this.markerIcon'
          )
      img.contacts-info__img.contacts-info__img--1(
        :src='item.img_01',
        :alt='item.title'
      )
      img.contacts-info__img.contacts-info__img--2(
        :src='item.img_02',
        :alt='item.title'
      )
</template>


<script>
  import { yandexMap, ymapMarker } from 'vue-yandex-maps'

  export default {
    props: {
      item: Object
    },
    components: {
      yandexMap,
      ymapMarker
    },
    data() {
      return {
        markerIcon: {
          layout:      'default#imageWithContent',
          imageHref:   '/static/map-balloon.png',
          imageSize:   [36, 50],
          imageOffset: [0, 0]
        },
        options: {
          controls: ['zoomControl', 'fullscreenControl'],
        }
      }
    }
  }
</script>


<style src='./style.stylus' lang='stylus' scoped></style>

<style lang='stylus'>
  .contacts-info
    .ymaps-2-1-78-copyright,
    .ymaps-2-1-78-gototech
      display none !important
    
    .ymaps-2-1-78-map-copyrights-promo
      right: 10px
      left: unset !important

    .ymap-container
      div[id]
        width 100% !important
        height 100% !important

    .ymaps-2-1-78-map
      width 100% !important

    .ymaps-2-1-78-inner-panes
      left 0
</style>
