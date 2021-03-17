<template lang='pug'>
  section.checkout
    .checkout__cont
      .checkout-form
        p.checkout-form__p Нам важно что вы&nbsp;думаете. Если у&nbsp;вас <b>возникли вопросы,</b> пожелания или недовольства или вы&nbsp;хотите оставить отзыв пишите сюда! Нам Важны ваши чувства!

        .checkout-form__cont
          .checkout-form__col-1
            image-item.checkout-form__img(:source='require("@/assets/images/checkout/lion.png")')

          .checkout-form__col-2
            form.checkout-form__form
              .input-cont
                span.input-title Ваше имя:
                input.input(
                  type='text'
                  name='Имя'
                  placeholder='Имя'
                )
              .input-cont
                span.input-title Задайте вопрос:
                textarea.textarea(
                  name='Сообщение'
                  placeholder='Вопрос'
                )
              button.btn Отправить

      .checkout__txt-cont
        h2.checkout__title Оформить заказ не&nbsp;выходя из&nbsp;дома
        p.checkout__p <b>Для оформления заказа Вам достаточно позвонить по&nbsp;телефону&nbsp;8&nbsp;(8352)&nbsp;36-72-66 и&nbsp;записаться на&nbsp;замер.</b> <br>Наш специалист оперативно выедет на&nbsp;адрес со&nbsp;всем <br>необходимым оборудованием и&nbsp;документами, произведет <br>замер, проконсультирует Вас и&nbsp;на&nbsp;месте рассчитает <br>стоимость. <br><b>Заключить договор можно не&nbsp;выходя из&nbsp;дома.</b>
        p.checkout__p Если у&nbsp;вас остались вопросы или вы&nbsp;хотите ознакомиться <br>с&nbsp;образцами продукции, ждем Вас в&nbsp;нашем офисе.
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
