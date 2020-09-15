<template lang='pug'>
  section.checkout
    .checkout__cont
      .checkout-form
        p.checkout-form__p Нам важно что вы&nbsp;думаете. Если у&nbsp;вас <b>возникли вопросы,</b> пожелания или недовольства или вы&nbsp;хотите оставить отзыв пишите сюда! Нам Важны ваши чувства!
        .checkout-form__cont
          .checkout-form__col-1
            img.checkout-form__img(src='@/assets/images/checkout/lion.png')
          .checkout-form__col-2
            form.checkout-form__form
              .input-cont
                span.input-title Ваше имя:
                input.input(type='text' name='Имя' placeholder='Имя')
              .input-cont
                span.input-title Задайте вопрос:
                textarea.textarea(name='Сообщение' placeholder='Вопрос')
              button.btn Отправить

      .checkout__txt-cont
        h2.checkout__title Оформить заказ не&nbsp;выходя из&nbsp;дома
        p.checkout__p <b>Для оформления заказа Вам достаточно позвонить по&nbsp;телефону&nbsp;8&nbsp;(8352)&nbsp;36-72-66 и&nbsp;записаться на&nbsp;замер.</b> <br>Наш специалист оперативно выедет на&nbsp;адрес со&nbsp;всем <br>необходимым оборудованием и&nbsp;документами, произведет <br>замер, проконсультирует Вас и&nbsp;на&nbsp;месте рассчитает <br>стоимость. <br><b>Заключить договор можно не&nbsp;выходя из&nbsp;дома.</b>
        p.checkout__p Если у&nbsp;вас остались вопросы или вы&nbsp;хотите ознакомиться <br>с&nbsp;образцами продукции, ждем Вас в&nbsp;нашем офисе.
</template>

<style lang='stylus'>
  .checkout
    &__cont
      display: flex

    &__txt-cont
      padding: 0 20px
      box-sizing: border-box

    &__title
      margin: 0 0 30px
      color: #009DEA
      font-size: 20px
      font-weight: 400
      text-transform: uppercase

    &__p
      margin: 0
      color: #4F4F4F
      font-size: 16px

      &:last-of-type
        margin: 20px 0 0

  .checkout-form
    width: 100%
    max-width: 356px
    padding: 20px 20px 0
    border-top: 5px solid #DEDEDE
    background: linear-gradient(0deg, #ECECEC, #F9F9F9 80%, #FFFFFF)

    &__cont
      display: flex

    &__col-1
      margin: 0 10px 0 0
      display: flex
      align-items: flex-end

    &__p
      margin: 0 0 20px
      color: #000000
      font-size: 13px

    &__img
      width: 118px
      min-width: 118px

    .input-cont
      margin: 0 0 10px

    .input
      padding: 0 5px
      border-radius: 2px

    .textarea
      width: 100%

    .btn
      width: 100%
      padding: 7px 10px


  @media (max-width: 993px)
    .checkout
      &__txt-cont
        max-width: 400px
        padding: 0 10px

      &__title
        margin: 0 0 22px

      &__p
        font-size: 14px

    .checkout-form
      max-width: 100%
      padding: 10px 10px 0

      &__col-2
        width: 100%
        padding: 0 0 20px

      .input
        padding: 5px

  @media (max-width: 769px)
    .checkout
      &__txt-cont
        display: none

    .checkout-form
      padding: 12px 16px 0

      &__img
        width: 154px
        min-width: 154px

      .textarea
        height: 100px

  @media (max-width: 481px)
    .checkout-form
      padding: 12px

      &__col-1
        margin: 0

      &__col-2
        padding: 0

      &__img
        display: none

      .input-title
        margin: 0 0 6px

      .input, .textarea
        padding: 8px

      .btn
        padding: 10px
</style>
