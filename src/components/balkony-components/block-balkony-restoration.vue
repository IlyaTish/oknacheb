<template lang='pug'>
  section.balkony-restoration
    .offer-heading
      h2.offer-heading__title Полная реставрация балконов от&nbsp;&laquo;Легос&raquo;
      span.offer-heading__info *подробности уточняйте по&nbsp;тел.

    .balkony-offer
      .balkony-offer__row
        .balkony-offer__col-1
          .balkony-offer__img-cont
            img.balkony-offer__img(
              src='@/assets/images/balkony-page/balkony-restoration/balkon-01.jpg'
              alt='Реставрация балконов в Чебоксарах ЛЕГОС'
            )
          .balkony-offer__img-cont
            img.balkony-offer__img(
              src='@/assets/images/balkony-page/balkony-restoration/balkon-02.jpg'
              alt='Реставрация балконов в Чебоксарах ЛЕГОС'
            )
        .balkony-offer__col-2
          p.balkony-offer__p.p Мы&nbsp;занимаемся остеклением балконов <b>уже более 10&nbsp;лет!</b> Нет объектов с&nbsp;которыми&nbsp;бы мы&nbsp;не&nbsp;смогли справиться или за&nbsp;которые&nbsp;бы мы&nbsp;не&nbsp;взялись. Производим инсталляцию, даже в&nbsp;тех ситуациях, когда на&nbsp;балкон опасно выходить. Все работы производятся непосредственно из&nbsp;квартиры. Производим полную реставрацию балконных экранов, восстановление половых покрытий, укрепление или полную переделку перил, обшив сайдингом или профнастилом, замена перил на&nbsp;цельную теплую раму с&nbsp;потолка до&nbsp;пола
          img.balkony-offer__img(
            src='@/assets/images/balkony-page/balkony-restoration/balkon-03.jpg'
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
        img.balkony-warm__img(
          src='@/assets/images/balkony-page/balkony-restoration/balkon-04.jpg'
          alt='Утепленный балкон «с потолка до пола»'
        )

      .balkony-warm__row-2
        img.balkony-warm__img(
          src='@/assets/images/balkony-page/balkony-restoration/balkon-05.jpg'
          alt='Утепленный балкон «с потолка до пола»'
        )

      .balkony-warm__row-3
        .balkony-warm__txt-cont
          h3.balkony-warm__title Установка крыш и&nbsp;козырьков
          p.balkony-warm__p.p Уже более 10&nbsp;лет мы&nbsp;делаем не&nbsp;просто теплые балконы, мы&nbsp;создаем ещё одни дополнительные светлые многофункциональные комнаты. Не&nbsp;важно какое время года и&nbsp;какая температура за&nbsp;окном. Инсталляция рамы и&nbsp;козырьков производиться в&nbsp;любую погоду и&nbsp;на&nbsp;любой высоте. С&nbsp;таким балконом&nbsp;Вы экономите время и&nbsp;деньги на&nbsp;внутренней отделке балконного экрана и&nbsp;в&nbsp;итоге получаете полноценную комнату с&nbsp;панорамным видом и&nbsp;приятным эстетичным видом. Все конструкции и&nbsp;все работы производятся с&nbsp;учетом ветровых, эксплуатационных нагрузок и&nbsp;суровых климатических условий.
        img.balkony-warm__img(
          src='@/assets/images/balkony-page/balkony-restoration/balkon-06.jpg'
          alt='Утепленный балкон «с потолка до пола»'
        )
</template>

<style lang='stylus'>
  .balkony-restoration
    .offer-heading
      margin: 20px 0 0

      &__title
        font-weight: 600
        text-transform: unset

  .balkony-offer
    padding: 20px 20px 0

    &__row
      display: flex

    &__col-1
      width: 100%

      .balkony-offer__img-cont
        width: 276px
        margin: 0 0 20px 0

        &:last-of-type
          margin: 0

      .balkony-offer__img
        width: 100%

    &__col-2
      width: 100%

      .balkony-offer__img
        height: 380px

      .balkony-offer__p
        margin: 0 0 20px

  .balkony-warm
    margin: 0 0 20px
    padding: 20px 20px 0

    &__row-1
      display: flex
      align-items: flex-start

      .balkony-warm__img
        width: 260px
        margin: 0 0 0 10px

    &__row-2
      .balkony-warm__img
        width: 460px
        margin: 20px 0 0 auto

    &__row-3
      margin: 40px 0 0
      display: flex
      align-items: flex-start

      .balkony-warm__title
        font-size: 21px
        font-weight: 400

      .balkony-warm__p
        padding: 0 20px 0 0
        font-size: 14px
        line-height: 16px

      .balkony-warm__img
        width: 280px

    &__title
      margin: 0 0 10px
      color: #009DEA
      font-size: 15px

    &__p
      margin: 0


  @media (max-width: 1201px)
    .balkony-offer
      padding: 20px 0 0

      &__row
        flex-direction: column

      &__col-1
        display: flex
        margin: 0 0 20px

        .balkony-offer__img-cont
          width: 100%
          margin: 0 10px 0 0

    .balkony-warm
      padding: 20px 0 0

  @media (max-width: 769px)
    .balkony-warm
      &__row-3
        margin: 20px 0 0

        .balkony-warm__img
          display: none

  @media (max-width: 630px)
    .balkony-warm
      &__row-1
        flex-direction: column

        .balkony-warm__img
          width: 100%
          margin: 10px 0 0

      &__row-2
        .balkony-warm__img
          width: 100%
          margin: 10px 0 0

      &__row-3
        .balkony-warm__p
          padding: 0

  @media (max-width: 481px)
    .balkony-offer
      &__col-1
        flex-direction: column

        .balkony-offer__img-cont
          margin: 0 0 10px
</style>
