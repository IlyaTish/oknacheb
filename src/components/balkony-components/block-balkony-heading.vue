<template lang='pug'>
  section.balkony-heading
    img.balkony-heading__img-main(
      src='@/assets/images/balkony-page/balkony-heading/banner.jpg'
      alt='Скидка 50%. Крыша за пол цены ЛЕГОС Чебоксары'
      @click='showPopup({ name: "commonPopup" })'
    )
    .balkony-heading__cont
      h1.balkony-heading__title Остекление балконов и&nbsp;лоджий в&nbsp;Чебоксарах
      h2.balkony-heading__subtitle Балконы &laquo;ЛЕГОС&raquo; Чебоксары
      p.balkony-heading__p-main Превртите свой балкон в&nbsp;<b>современную,</b> светлую, многофункциональную комнату со&nbsp;всеми преимуществами <b>новых технологий</b>
      img.balkony-heading__img(src='@/assets/images/balkony-page/balkony-heading/photo.jpg')
      p.balkony-heading__p С&nbsp;<b>2005 года</b> мы&nbsp;профессионально занимаемся остеклением <b>любых видов</b> витражей, балконов и&nbsp;лоджий. Мы&nbsp;распологаем собственным производством, складом, спец. транспортом, постоянным штатом собственных профессиональных мастеров и&nbsp;квалифицированных инженеров. Исполнение заказа производится в&nbsp;максимально сжатые сроки. <b>На&nbsp;все монтажные работы действует расширенная гаранития. В&nbsp;случае возникновения гарантийных или иных случаев мы&nbsp;незамедлительно выезжаем на&nbsp;адрес и&nbsp;устраняем выявленные недостатки за&nbsp;наш счет.</b>
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
  .balkony-heading
    &__cont
      margin: 20px 0
      padding: 0 20px

    &__title
      margin: 0 0 6px
      color: #2B2A29
      font-size: 20px
      font-weight: 600

    &__subtitle
      margin: 0 0 14px
      color: #707070
      font-size: 20px
      font-weight: 400

    &__p-main
      margin: 0 0 20px
      color: #000000
      font-size: 13px

    &__p
      margin: 0
      color: #000000
      font-size: 13px

    &__img-main
      cursor: pointer

    &__img
      width: 200px
      margin: 0 10px 0 0
      float: left


  @media (max-width: 769px)
    .balkony-heading
      &__cont
        padding: 0

  @media (max-width: 481px)
    .balkony-heading
      &__img
        width: 100%
        margin: 0 0 10px
        float: none
</style>