<template lang='pug'>
  section.okna-heading
    .okna-heading__cont
      .okna-heading__txt-cont
        p.okna-heading__p Сегодня всё большее значение имеют энергосберегающие свойства окон. Частным заказчикам мы&nbsp;предлагаем продукцию, выпускаемую в&nbsp;строгом соответствии с&nbsp;требованиями RAL и&nbsp;соответствующей классу&nbsp;А европейской нормы DIN EN&nbsp;12&nbsp;608.
      .okna-heading__img-cont
        img.okna-heading__img(src='@/assets/images/okna-page/zamer.jpg')

    h1.okna-heading__title &laquo;ЛЕГОС&raquo; монтаж пластиковых окон в&nbsp;Чебоксарах
    p.okna-heading__p-main С&nbsp;2005 года мы&nbsp;профессионально занимается установкой окон, остеклением витражей перегородок и&nbsp;всего, что можно назвать остеклением. Компания располагает собственным производством, складом спецтранспортом и&nbsp;постоянным штатом собственных профессиональных мастеров и&nbsp;квалифицированными инженерами. Исполнение заказа производиться в&nbsp;максимально сжатые сроки. На&nbsp;все монтажные работы действует расширенная гарантия. В&nbsp;случае возникновения гарантийных или иных случаев мы&nbsp;незамедлительно выезжаем на&nbsp;адрес и&nbsp;устраняем выявленные недостатки за&nbsp;наш счет.
</template>

<style lang='stylus'>
  .okna-heading
    &__cont
      display: flex
      height: 220px
      border-top: 5px solid #DEDEDE

    &__txt-cont
      width: 100%
      height: 100%
      padding: 10px
      max-width: 246px
      background: #0082C9
      box-sizing: border-box

    &__p
      margin: 0
      color: #FFFFFF
      font-size: 16px
      font-weight: 600

    &__img-cont
      width: 100%

    &__img
      height: 100%
      display: block

    &__title
      margin: 20px 0 10px
      color: #000000
      font-size: 24px
      font-weight: 600

    &__p-main
      margin: 0 0 10px
      color: #000000
      font-size: 14px


  @media (max-width: 993px)
    .okna-heading
      &__txt-cont
        width: 100%
        max-width: 100%
        padding: 20px

      &__img-cont
        width: auto
        overflow: hidden

  @media (max-width: 660px)
    .okna-heading
      &__cont
        height: auto
        flex-direction: column
      
      &__img-cont
        width: 100%
        height: auto
        order: 1

      &__img
        width: 100%
        height: auto

      &__txt-cont
        order: 2

      &__title
        font-size: 20px

  @media (max-width: 481px)
    .okna-heading
      &__txt-cont
        padding: 10px

      &__p
        font-size: 14px

      &__title
        font-size: 18px
</style>