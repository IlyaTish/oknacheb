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
  import Mixins from '@/assets/scripts/mixins'

  export default {
    mixins: [Mixins],
    props: {
      handlers: Object
    }
  }
</script>

<style src='./style.stylus' lang='stylus' scoped></style>
