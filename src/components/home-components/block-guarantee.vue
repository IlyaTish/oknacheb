<template lang='pug'>
  section.guarantee
    .guarantee__col-1
      .guarantee__img-cont
        img.guarantee__img(src='@/assets/images/guarantee/lion.svg')
      .guarantee__txt-cont
        h2.guarantee__title Бессрочная гарантия ЛЕГОС
        p.guarantee__p *Всем заказчикам Компания Легос ООО &laquo;Окна профиль&raquo; предоставляет бесплатное выполнение работ по&nbsp;устранению недостатков, возникших в&nbsp;процессе всего срока эксплуатации окон.

    .guarantee__col-2
      .guarantee__img-cont
        img.guarantee__img(src='@/assets/images/guarantee/sertificat-01.jpg' alt='Сертификат ЛЕГОС')
        img.guarantee__img(src='@/assets/images/guarantee/sertificat-02.jpg' alt='Сертификат ЛЕГОС')
      .guarantee__txt-cont
        h3.guarantee__title Гарантия качества
        p.guarantee__p Вся продукция компании <b>&laquo;Легос&raquo;</b> <br>от&nbsp;стеклопакетов до&nbsp;комплектующих имеет <br>сертификаты качества как по&nbsp;российскому <br>стандарту ГОСТ, так и&nbsp;европейским стандартам <br>качества RAL, DIN ISO.
</template>

<style lang='stylus'>
  .guarantee
    display: flex
    margin: 30px 0 0

    &__col-1, &__col-2
      width: 100%
      display: flex
      overflow: hidden

    &__col-1
      padding: 0 0 0 15px
      margin: 0 10px 0 0
      background: url('../../assets/images/guarantee/bg.svg') no-repeat
      background-position: 50%
      background-size: 100%

      .guarantee__img-cont
        width: 120px
        flex: 120px 0 0
        padding: 10px 0 0

      .guarantee__txt-cont
        padding: 20px 20px 0 30px
        box-sizing: border-box

      .guarantee__title
        margin: 0 0 10px
        color: #333333
        font-size: 17px
        text-transform: uppercase

      .guarantee__p
        margin: 0
        color: #00A0E3
        font-size: 12px
        font-weight: 600

    &__col-2
      padding: 20px
      border-top: 5px solid #DEDEDE
      background: linear-gradient(0deg, #ECECEC, #F9F9F9 80%, #FFFFFF)

      .guarantee__img-cont
        display: flex

      .guarantee__img
        width: 70px
        margin: 0 14px 0 0

        &:las-of-type
          margin: 0

      .guarantee__title
        margin: 0 0 10px
        color: #009DEA
        font-size: 16px
        font-weight: 100

      .guarantee__p
        margin: 0
        color: #727271
        font-size: 12px

    @media (max-width: 991px)
      display: none
</style>