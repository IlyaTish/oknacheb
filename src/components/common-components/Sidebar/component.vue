<template lang='pug'>
  aside.sidebar
    template(v-for='offer in handlers.sidebar.offers')
      .sidebar-offer-dop
        span.sidebar-offer-dop__title {{ offer.title }}
        p.sidebar-offer-dop__p {{ offer.p1 }}
        image-item.sidebar-offer-dop__img(:source='offer.img')
        p.sidebar-offer-dop__p {{ offer.p2 }}
        .btn-blue(@click='showPopup({ name: "commonPopup" })') Подробнее

    .sidebar__cont.about-veka
      span.about-veka__title Лидер рынка:
      .about-veka__content
        image-item.about-veka__img(:source='require("@/assets/images/sidebar/veka.png")')
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
      image-item.sidebar-offer__img(
        :source='require("@/assets/images/sidebar/akciya-na-okno.png")'
        alt='Акция на окна "Легос"'
      )
      p.sidebar-offer__p <b>легко</b> собирается, <b>быстро</b> устанавливается и&nbsp;очень <b>эффектно</b> смотрится. Применение специально разработанных профилей делает раздвижное остекление черезвычайно <b>привлекательным</b> как для массового, так и&nbsp;для индивидуального строительства
      .btn-blue(@click='showPopup({ name: "commonPopup" })') Подробнее

    .sidebar-video
      image-item.sidebar-video__img(:source='require("@/assets/images/sidebar/video-thumbnail-01.jpg")')

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
      image-item.sidebar-video__img(:source='require("@/assets/images/sidebar/video-thumbnail-02.jpg")')
</template>

<script>
  import Mixins from '@/assets/scripts/mixins'
  import ImageItem from '@/components/common-components/ImageItem/component'

  export default {
    mixins: [Mixins],
    props: {
      handlers: Object
    },
    components: {
      ImageItem
    }
  }
</script>

<style src='./style.stylus' lang='stylus' scoped></style>
