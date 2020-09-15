<template lang='pug'>
  section.balkony-info
    h2.balkony-info__title Мы&nbsp;используем усиленные козырьки
    span.balkony-info__subtitle Все наши балконные рамы оборудуются усиленными верхними козырьками
    .balkony-info__cont
      img.balkony-info__img(
        src='@/assets/images/balkony-page/balkony-info/photo.jpg'
        alt='Усиленные козырьки балконов ЛЕГОС'
      )
      p.balkony-info__p Под усиленными верхними козырьками мы&nbsp;подразумеваем широкий изогнутый отлив, который крепиться и&nbsp;к&nbsp;раме и&nbsp;к&nbsp;потолку и&nbsp;выходит одновременно на&nbsp;улицу и&nbsp;заходит в&nbsp;комнату от&nbsp;15&nbsp;до&nbsp;50см. Ширина отливов будет напрямую зависеть от&nbsp;Вашего проема и&nbsp;состояния потолка на&nbsp;балконе.<br>Данный козырек <b>спасет вашу отделку</b> не&nbsp;только от&nbsp;сильного дождя, <b>но&nbsp;и&nbsp;продлит срок службы</b> монтажного шва, в&nbsp;случае, когда край верхней плиты уженачал разрушаться. <b>Важно:</b> данный козырек контактирует с&nbsp;улицей и&nbsp;естественно на&nbsp;нем будет образовываться конденсат в&nbsp;зимней период. Козырек подлежит утеплению и&nbsp;отделке по&nbsp;таким&nbsp;же правилам, как и&nbsp;монтажный шов. Заказать отделочные работы вы&nbsp;всегда можете у&nbsp;нас, просто свяжитесь с&nbsp;менеджерами нашей компании.
</template>

<style lang='stylus'>
  .balkony-info
    padding: 20px
    border-top: 5px solid #DEDEDE
    background: linear-gradient(0deg, #ECECEC, #F9F9F9 46%, #FFFFFF)

    &__title
      margin: 0 0 5px
      color: #8F8F8F
      font-size: 20px

    &__subtitle
      color: #000000
      font-size: 13px

    &__cont
      margin: 14px 0 0

    &__img
      width: 200px
      margin: 0 20px 10px 0
      float: left
    
    &__p
      margin: 0
      color: #8F8F8F
      font-size: 13px

  @media (max-width: 481px)
    .balkony-info
      padding: 14px

      &__img
        width: 100%
        float: none
</style>