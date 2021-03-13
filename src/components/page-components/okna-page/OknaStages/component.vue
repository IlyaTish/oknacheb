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
  import Mixins from '@/assets/scripts/mixins'
  import Stages from '@/data/okna-page/okna-stages-data'

  export default {
    mixins: [Mixins],
    data() {
      return {
        stages: Stages.STAGES
      }
    }
  }
</script>

<style src='./style.stylus' lang='stylus' scoped></style>
