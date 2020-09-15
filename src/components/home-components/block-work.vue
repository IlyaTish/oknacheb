<template lang='pug'>
  section.work
    h2.work__title Как мы работаем
    .work-items
      .work-items__item
        h3.work-items__title 1. Производство
        img.work-items__img(src='@/assets/images/work/pic-01.jpg' alt='Производство ЛЕГОС')
        p.work-items__p Мы&nbsp;работаем исключительно с&nbsp;зарекомендовавшими себя <b>европейскими</b> поставщиками высокопроизводительного оборудования для эффективного производства пластиковых окон.
      .work-items__item
        h3.work-items__title 2. Склад
        img.work-items__img(src='@/assets/images/work/pic-02.jpg' alt='Склад ЛЕГОС')
        p.work-items__p Центральный склад <b>в&nbsp;центре</b> города для оперативной организации доставки по&nbsp;адресам. Мы&nbsp;работаем с&nbsp;широким спектром профилей, в&nbsp;том числе нестандартных цветов и&nbsp;размеров.
      .work-items__item
        h3.work-items__title 3. Доставка
        img.work-items__img(src='@/assets/images/work/pic-03.jpg' alt='Доставка ЛЕГОС')
        p.work-items__p <b>Бесплатная</b> доставка спецтранспортом по&nbsp;городу. Мы&nbsp;привезем Ваши окна в&nbsp;целости и&nbsp;сохранности.
</template>

<style lang='stylus'>
  .work
    padding: 0 20px 20px
    border-top: 5px solid #DEDEDE
    background: linear-gradient(0deg, #ECECEC, #F9F9F9 90%, #FFFFFF)

    &__title
      width: 100%
      margin: 10px 0
      font-size: 20px
      font-weight: 400

  .work-items
    display: grid
    grid-gap: 20px
    grid-template-columns: 1fr 1fr 1fr

    &__title
      margin: 0 0 10px
      color: #009DEA
      font-size: 16px
      font-weight: 600

    &__img
      width: 100%

    &__p
      margin: 10px 0 0
      color: #000000
      font-size: 13px


  @media (max-width: 767px)
    .work
      padding: 0 10px 10px

    .work-items
      grid-gap: 14px


  @media (max-width: 680px)
    .work
      display: none
</style>
