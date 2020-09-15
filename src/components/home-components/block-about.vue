<template lang='pug'>
  section.about
    h2.about__title <b>Легос&trade;.</b> Окна в&nbsp;Чебоксарах от&nbsp;надежного производителя.
    .about__cont
      .about__txt-cont
        p.about__p Компании &laquo;Легос&raquo; в&nbsp;2018&nbsp;г. исполняется 11&nbsp;лет. Опыт, приобретенный компанией за&nbsp;долгие годы упорной работы, позволяет браться за&nbsp;выполнение самых сложных и&nbsp;нестандартных объектов по&nbsp;остеклению целых зданий, квартир, балконов, входных групп, зимних садов и&nbsp;т.д.
        p.about__p Нашими заказчиками являются обычные люди&nbsp;&mdash; хозяева квартир и&nbsp;загородных домов, а&nbsp;так&nbsp;же крупные организации и&nbsp;госпредприятия. Количество выполненных объектов к&nbsp;2018г. достигло 10000&nbsp;шт, начиная с&nbsp;балконов и&nbsp;квартир &laquo;под ключ&raquo; заканчивая школами и&nbsp;крупными офисными зданиями. Работая в&nbsp;основном по&nbsp;г. Чебоксары и&nbsp;г. Новочебоксарск, мы&nbsp;так&nbsp;же обслуживаем районы Чувашии: Ишлеи, Кугеси, поселки Заволжья, Лапсары, и&nbsp;многие&nbsp;др. Инженеры-замерщики компании готовы в&nbsp;любое время выехать на&nbsp;объект в&nbsp;любую точку Чувашии.
      img.about__img(src='@/assets/images/about/konsib.jpg' alt='Консиб')
</template>

<style lang='stylus'>
  .about
    &__cont
      display: flex
      align-items: flex-start

    &__title
      margin: 0 0 14px
      color: #009DEA
      font-size: 19px
      font-weight: 400
      text-decoration: underline

    &__p
      color: #000000
      font-size: 13px
      margin: 0 0 14px

      &:last-of-type
        margin: 0

    &__img
      width: 100%
      max-width: 245px
      margin: 0 0 0 40px


    @media (max-width: 900px)
      &__img
        max-width 300px

    @media (max-width: 767px)
      display: none
</style>