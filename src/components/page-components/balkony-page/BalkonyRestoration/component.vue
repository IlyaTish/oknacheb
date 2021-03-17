<template lang='pug'>
  section.balkony-restoration
    .offer-heading
      h2.offer-heading__title Полная реставрация балконов от&nbsp;&laquo;Легос&raquo;
      span.offer-heading__info *подробности уточняйте по&nbsp;тел.

    .balkony-offer
      .balkony-offer__row
        .balkony-offer__col-1
          .balkony-offer__img-cont
            image-item.balkony-offer__img(
              :source='require("@/assets/images/balkony-page/balkony-restoration/balkon-01.jpg")'
              alt='Реставрация балконов в Чебоксарах ЛЕГОС'
            )
          .balkony-offer__img-cont
            image-item.balkony-offer__img(
              :source='require("@/assets/images/balkony-page/balkony-restoration/balkon-02.jpg")'
              alt='Реставрация балконов в Чебоксарах ЛЕГОС'
            )

        .balkony-offer__col-2
          p.balkony-offer__p.p Мы&nbsp;занимаемся остеклением балконов <b>уже более 10&nbsp;лет!</b> Нет объектов с&nbsp;которыми&nbsp;бы мы&nbsp;не&nbsp;смогли справиться или за&nbsp;которые&nbsp;бы мы&nbsp;не&nbsp;взялись. Производим инсталляцию, даже в&nbsp;тех ситуациях, когда на&nbsp;балкон опасно выходить. Все работы производятся непосредственно из&nbsp;квартиры. Производим полную реставрацию балконных экранов, восстановление половых покрытий, укрепление или полную переделку перил, обшив сайдингом или профнастилом, замена перил на&nbsp;цельную теплую раму с&nbsp;потолка до&nbsp;пола
          image-item.balkony-offer__img(
            :source='require("@/assets/images/balkony-page/balkony-restoration/balkon-03.jpg")'
            alt='Реставрация балконов в Чебоксарах ЛЕГОС'
          )

    .offer-heading
      h2.offer-heading__title Эксклюзивные утепленные балконы &laquo;Легос&raquo;
      span.offer-heading__info *подробности уточняйте по&nbsp;тел.

    .balkony-warm
      .balkony-warm__row-1
        .balkony-warm__txt-cont
          h3.balkony-warm__title Утепленный балкон &laquo;с&nbsp;потолка до&nbsp;пола&raquo;
          p.balkony-warm__p.p Уже <b>более 10&nbsp;лет</b> мы&nbsp;делаем не&nbsp;просто теплые балконы, мы&nbsp;создаем ещё одни дополнительные светлые многофункциональные комнаты. Не&nbsp;важно какое время года и&nbsp;какая температура за&nbsp;окном. Инсталляция рамы и&nbsp;козырьков производиться в&nbsp;<b>любую погоду</b> и&nbsp;<b>на&nbsp;любой высоте.</b> С&nbsp;таким балконом&nbsp;Вы экономите время и&nbsp;деньги на&nbsp;внутренней отделке балконного экрана и&nbsp;в&nbsp;итоге получаете полноценную комнату с&nbsp;панорамным видом и&nbsp;приятным эстетичным видом. Все конструкции и&nbsp;все работы производятся с&nbsp;учетом ветровых, эксплуатационных нагрузок и&nbsp;суровых климатических условий.
        image-item.balkony-warm__img(
          :source='require("@/assets/images/balkony-page/balkony-restoration/balkon-04.jpg")'
          alt='Утепленный балкон «с потолка до пола»'
        )

      .balkony-warm__row-2
        image-item.balkony-warm__img(
          :source='require("@/assets/images/balkony-page/balkony-restoration/balkon-05.jpg")'
          alt='Утепленный балкон «с потолка до пола»'
        )

      .balkony-warm__row-3
        .balkony-warm__txt-cont
          h3.balkony-warm__title Установка крыш и&nbsp;козырьков
          p.balkony-warm__p.p Уже более 10&nbsp;лет мы&nbsp;делаем не&nbsp;просто теплые балконы, мы&nbsp;создаем ещё одни дополнительные светлые многофункциональные комнаты. Не&nbsp;важно какое время года и&nbsp;какая температура за&nbsp;окном. Инсталляция рамы и&nbsp;козырьков производиться в&nbsp;любую погоду и&nbsp;на&nbsp;любой высоте. С&nbsp;таким балконом&nbsp;Вы экономите время и&nbsp;деньги на&nbsp;внутренней отделке балконного экрана и&nbsp;в&nbsp;итоге получаете полноценную комнату с&nbsp;панорамным видом и&nbsp;приятным эстетичным видом. Все конструкции и&nbsp;все работы производятся с&nbsp;учетом ветровых, эксплуатационных нагрузок и&nbsp;суровых климатических условий.
        image-item.balkony-warm__img(
          :source='require("@/assets/images/balkony-page/balkony-restoration/balkon-06.jpg")'
          alt='Установка крыш и козырьков'
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
