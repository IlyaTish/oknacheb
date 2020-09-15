<template lang='pug'>
  section.okna-stages
    h2.okna-stages__title-main Этапы монтажа пластиковых окон в&nbsp;&laquo;готовый проем&raquo;. Или как мы&nbsp;делаем монтаж окно?
    p.okna-stages__p-main Данное руководство в&nbsp;иллюстрациях в&nbsp;первую очередь пригодится тем, кто решил произвести монтаж самостоятельно или у&nbsp;кого появились вопросы в&nbsp;&laquo;правильности&raquo; монтажа окон.

    .okna-stages__cont
      template(v-if='width <= 576')
        template(v-for='stage in stages.slice(0, 6)')
          .okna-stages__item
            img.okna-stages__img(
              :src='stage.img'
              :alt='stage.title'
              :key='stage.id'
            )
            h3.okna-stages__title(v-if='stage.title') {{ stage.title }}
            p.okna-stages__p(v-if='stage.p') {{ stage.p }}

      template(v-else)
        .okna-stages__img-cont
          template(v-for='stage in stages')
            img.okna-stages__img(
              :src='stage.img'
              :alt='stage.title'
              :key='stage.id'
            )

        .okna-stages__txt-cont
          template(v-for='stage in stages')
            h3.okna-stages__title {{ stage.title }}
            p.okna-stages__p {{ stage.p }}
</template>

<script>
  import Mixins from '../../assets/scripts/mixins'
  import Stages from '../../data/okna-page/okna-stages-data'

  export default {
    mixins: [Mixins],
    data() {
      return {
        stages: Stages.STAGES
      }
    }
  }
</script>

<style lang='stylus'>
  .okna-stages
    &__title-main
      margin: 0 0 6px
      color: #898989
      font-size: 14px

    &__p-main
      margin: 0
      color: #000000
      font-size: 14px

    &__cont
      margin: 20px 0 0
      display: flex

    &__img-cont
      max-width: 206px
      flex: 206px 0 0
      margin: 0 10px 0 0

    &__img
      margin: 0 0 10px

    &__title
      margin: 0 0 6px
      color: #898989
      font-size: 14px
      white-space: pre-line

    &__p
      margin: 0 0 16px
      color: #000000
      font-size: 13px
      line-height: 15px
      white-space: pre-line


  @media (max-width: 993px)
    .okna-stages
      &__title
        font-size: 18px

      &__p
        font-size: 15px
        line-height: 16px

  @media (max-width: 680px)
    .okna-stages
      &__title
        font-size: 14px

      &__p
        font-size: 13px
        line-height: 15px

  @media (max-width: 576px)
    .okna-stages
      &__cont
        flex-direction: column
</style>