<template lang='pug'>
  aside.sidebar
    template(v-for='offer in handlers.sidebar.offers')
      .sidebar-offer-dop
        span.sidebar-offer-dop__title {{ offer.title }}
        p.sidebar-offer-dop__p {{ offer.p1 }}
        img.sidebar-offer-dop__img(:src='offer.img')
        p.sidebar-offer-dop__p {{ offer.p2 }}
        .btn-blue(@click='showPopup({ name: "commonPopup" })') Подробнее

    .sidebar__cont.about-veka
      span.about-veka__title Лидер рынка:
      .about-veka__content
        img.about-veka__img(src='@/assets/images/sidebar/veka.png')
        p.about-veka__p На&nbsp;сегодняшний день <b>VEKA</b> является одним из&nbsp;<b>крупнейших в&nbsp;мире</b> производителей пластикового профиля для изготовления оконных и&nbsp;дверных конструкций. В&nbsp;2004 году компания VEKA стала первой экструзионной компанией в&nbsp;Росссии, получившей <b>сертификат</b> соответсвия стандарту качества <b>DIN ISO 9001:2000.</b> В&nbsp;2006 году VEKA Rus стала ппервой и&nbsp;единственной компнией в&nbsp;России, чья продукция прошла сертификацию на&nbsp;соответствие европейскому знаку <b>качества RAL</b>
        .btn-blue(@click='showPopup({ name: "commonPopup" })') Подробнее

    .sidebar__cont.advantages
      span.advantages__title Преимущества:
      ul.advantages-list
        li.advantages-list__item
          span.advantages-list__title Автоматическая установка энергосберегающего стекла
          p.advantages-list__p До 70% теплее. Энергосберегающий стеклопакет избавит Вас от проблем с запотеванием стекла и дополнительным обогревом помещения, сохранив прохладу летом.
        li.advantages-list__item
          span.advantages-list__title Противовзломная фурнитура MACO
          p.advantages-list__p Противовзломная фурнитура избавит Вас от заклинивания замков и проблем с провисанием петель.
        li.advantages-list__item
          span.advantages-list__title Монтаж строго по ГОСТу

    .sidebar__cont.sidebar-offer
      span.sidebar-offer__title Раздвижное остекление балконов
      img(src='@/assets/images/sidebar/akciya-na-okno.png', alt='Акция на окна "Легос"')
      p.sidebar-offer__p <b>легко</b> собирается, <b>быстро</b> устанавливается и&nbsp;очень <b>эффектно</b> смотрится. Применение специально разработанных профилей делает раздвижное остекление черезвычайно <b>привлекательным</b> как для массового, так и&nbsp;для индивидуального строительства
      .btn-blue(@click='showPopup({ name: "commonPopup" })') Подробнее

    .sidebar-video
      img.sidebar-video__img(src='@/assets/images/sidebar/video-thumbnail-01.jpg')

    .sidebar-articles
      .sidebar-articles__heading
        span.sidebar-articles__title Сервисный центр
        p.sidebar-articles__p Ремонт и&nbsp;регулировка окон в&nbsp;Чебоксарах. Замена стеклопакетов. Установка москитный сеток и&nbsp;многое&nbsp;др.
      ul.sidebar-articles-list
        li.sidebar-articles-list__item
          a.sidebar-articles-list__link(href='#') Установка пластиковых окон в&nbsp;нестандартных проемах
        li.sidebar-articles-list__item
          a.sidebar-articles-list__link(href='#') Монтаж пластиковых окон в&nbsp;деревянном доме. Сруб.
        li.sidebar-articles-list__item
          a.sidebar-articles-list__link(href='#') Монтаж пластиковых окон в&nbsp;монолитном доме.
        li.sidebar-articles-list__item
          a.sidebar-articles-list__link(href='#') Монтаж пластиковых окон в&nbsp;панельном доме.
        li.sidebar-articles-list__item
          a.sidebar-articles-list__link(href='#') Монтаж пластиковых окон в&nbsp;кирпичном доме.

    .sidebar-video(v-if='handlers.sidebar.video')
      img.sidebar-video__img(src='@/assets/images/sidebar/video-thumbnail-02.jpg')
</template>

<script>
  import Mixins from '../../assets/scripts/mixins'

  export default {
    mixins: [Mixins],
    props: {
      handlers: Object
    }
  }
</script>

<style lang='stylus'>
  .sidebar
    width: 100%
    max-width: 320px
    flex: 320px 0 0
    margin: 0 0 0 auto

    &__cont
      padding: 0 20px
      border-top: 5px solid #DEDEDE
      background: linear-gradient(0deg, #ECECEC, #F9F9F9 46%, #FFFFFF)
      box-sizing: border-box

  .about-veka
    padding-top: 10px
    padding-bottom: 10px

    &__title
      display: inline-block
      color: #009DEA
      font-size: 20px

    &__content
      margin: 10px 0 0

    &__img
      width: 105px
      height: 90px
      display: block
      margin: 0 10px 10px 0
      top: 14px
      position: relative
      float: left

    &__p
      padding: 0 0 10px
      color: #000000
      font-size 13px
      border-bottom: 1.3px dotted #898989

  .advantages
    margin: 10px 0 0
    padding: 0 20px 20px
    background: linear-gradient(180deg, #ECECEC, #F9F9F9 80%, #FFFFFF)

    &__title
      width: 100%
      display: inline-block
      padding: 20px 0
      font-size: 20px
      font-weight: 600
      border-bottom: 1.3px dotted #898989

  .advantages-list
    margin: 0
    padding: 0

    &__item
      margin: 20px 0 0
      list-style: none

    &__title
      display: inline
      color: #009DEA
      font-size: 13px
      text-decoration: underline
      line-height: 18px

      &:before
        width: 10px
        height: 10px
        margin: 0 6px 0 0
        flex: 10px 0 0
        content: ''
        display: inline-block
        background: #009DEA
        border-radius: 100%

    &__p
      margin: 10px 0 0
      font-size: 13px
      line-height: 16px

  .sidebar-offer
    margin: 10px 0 0
    padding: 20px 32px 10px

    &__title
      font-size: 19px
      font-weight: 400

    &__p
      margin: 20px 0 0
      padding: 0 20px 20px 0
      font-size: 13px
      line-height: 16px
      border-bottom: 1.3px dotted #898989

  .sidebar-video
    margin: 10px 0 0
    cursor: pointer

    &__img
      width: 100%

  .sidebar-articles
    margin: 20px 0 0

    &__heading
      padding: 20px
      border-top: 1.3px dotted #898989
      border-bottom: 1.3px dotted #898989
      box-sizing: border-box

    &__title
      display: flex
      margin: 0 0 14px
      color: #00A0E3
      font-size: 18px
      font-weight: 600
      text-transform: uppercase

      &:after
        width: 30px
        height: 18px
        content: ''
        display: inline-block
        margin: 0 0 0 10px
        background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNy43ODIiIGhlaWdodD0iNy4xMzUiIHZpZXdCb3g9IjAgMCAxLjY4IDAuNjciIHNoYXBlLXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIiB0ZXh0LXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIiBpbWFnZS1yZW5kZXJpbmc9Im9wdGltaXplUXVhbGl0eSIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xLjY4LjUxSC44NHYuMTdMMCAuMzQuODQgMHYuMTdoLjg0di4zNHpNMS42OC4zNCIgZmlsbD0iIzAwYTBlMyIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9zdmc+')
        background-position: center center
        background-repeat: no-repeat
        background-size: 100%

    &__p
      margin: 0
      color: #000000
      font-size: 14px

  .sidebar-articles-list
    margin: 0
    padding: 20px

    &__item
      margin: 0 0 8px
      list-style: none
      list-style-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjEwIiB2aWV3Qm94PSIwIDAgMC4wOCAwLjEzIiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgdGV4dC1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgaW1hZ2UtcmVuZGVyaW5nPSJvcHRpbWl6ZVF1YWxpdHkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAuMTNWMGwuMDguMDdMMCAuMTR6TS4wNC4xIiBmaWxsPSIjZDlkYWRhIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=')

      &:last-of-type
        margin: 0

    &__link
      display: flex
      align-items: baseline
      color: #00A0E3
      font-size: 14px
      text-decoration: underline
      transition: .2s

      &:hover
        color: lighten(#00A0E3, 20%)

  .sidebar-offer-dop
    margin: 0 0 10px
    padding: 20px 20px 10px
    box-sizing: border-box
    border-top: 5px solid #DEDEDE
    background: linear-gradient(0deg, #ECECEC, #F9F9F9 46%, #FFFFFF)

    &__title
      display: inline-block
      margin: 0 0 10px
      color: #898989
      font-size: 19px
      font-weight: 600

    &__p
      margin: 0
      color: #898989
      font-size: 13px

      &:last-of-type
        padding: 0 0 20px
        border-bottom: 1.3px dotted #898989

    &__img
      margin: 20px 0


  @media (max-width: 991px)
    .sidebar
      display: none
</style>
