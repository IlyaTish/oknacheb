<template lang='pug'>
  section.about
    h2.about__title <b>Легос&trade;.</b> Окна в&nbsp;Чебоксарах от&nbsp;надежного производителя.
    .about__cont
      .about__txt-cont
        p.about__p Компании &laquo;Легос&raquo; в&nbsp;2018&nbsp;г. исполняется 11&nbsp;лет. Опыт, приобретенный компанией за&nbsp;долгие годы упорной работы, позволяет браться за&nbsp;выполнение самых сложных и&nbsp;нестандартных объектов по&nbsp;остеклению целых зданий, квартир, балконов, входных групп, зимних садов и&nbsp;т.д.
        p.about__p Нашими заказчиками являются обычные люди&nbsp;&mdash; хозяева квартир и&nbsp;загородных домов, а&nbsp;так&nbsp;же крупные организации и&nbsp;госпредприятия. Количество выполненных объектов к&nbsp;2018г. достигло 10000&nbsp;шт, начиная с&nbsp;балконов и&nbsp;квартир &laquo;под ключ&raquo; заканчивая школами и&nbsp;крупными офисными зданиями. Работая в&nbsp;основном по&nbsp;г. Чебоксары и&nbsp;г. Новочебоксарск, мы&nbsp;так&nbsp;же обслуживаем районы Чувашии: Ишлеи, Кугеси, поселки Заволжья, Лапсары, и&nbsp;многие&nbsp;др. Инженеры-замерщики компании готовы в&nbsp;любое время выехать на&nbsp;объект в&nbsp;любую точку Чувашии.
      image-item.about__img(
        :source='require("@/assets/images/about/konsib.jpg")'
        alt='Консиб'
      )
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