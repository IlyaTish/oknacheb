<template lang='pug'>
  section.balkony-info
    h2.balkony-info__title Мы&nbsp;используем усиленные козырьки
    span.balkony-info__subtitle Все наши балконные рамы оборудуются усиленными верхними козырьками
    .balkony-info__cont
      image-item.balkony-info__img(
        :source='require("@/assets/images/balkony-page/balkony-info/photo.jpg")'
        alt='Усиленные козырьки балконов ЛЕГОС'
      )
      p.balkony-info__p Под усиленными верхними козырьками мы&nbsp;подразумеваем широкий изогнутый отлив, который крепиться и&nbsp;к&nbsp;раме и&nbsp;к&nbsp;потолку и&nbsp;выходит одновременно на&nbsp;улицу и&nbsp;заходит в&nbsp;комнату от&nbsp;15&nbsp;до&nbsp;50см. Ширина отливов будет напрямую зависеть от&nbsp;Вашего проема и&nbsp;состояния потолка на&nbsp;балконе.<br>Данный козырек <b>спасет вашу отделку</b> не&nbsp;только от&nbsp;сильного дождя, <b>но&nbsp;и&nbsp;продлит срок службы</b> монтажного шва, в&nbsp;случае, когда край верхней плиты уженачал разрушаться. <b>Важно:</b> данный козырек контактирует с&nbsp;улицей и&nbsp;естественно на&nbsp;нем будет образовываться конденсат в&nbsp;зимней период. Козырек подлежит утеплению и&nbsp;отделке по&nbsp;таким&nbsp;же правилам, как и&nbsp;монтажный шов. Заказать отделочные работы вы&nbsp;всегда можете у&nbsp;нас, просто свяжитесь с&nbsp;менеджерами нашей компании.
</template>

<script>
  import ImageItem from '@/components/common-components/ImageItem/component'

  export default {
    components: {
      ImageItem
    }
  }
</script>

<style src='./style.stylus' lang='stylus' scoped></style>
