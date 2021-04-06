<template lang='pug'>
  section.salamander
    .salamander-row-1
      p.salamander__p От&nbsp;элегантной простоты и&nbsp;функциональности до&nbsp;подчеркнутой индивидуальности с&nbsp;ПВХ профилем SALAMANDER

    .salamander-row-2
      .salamander-row-2__col-1
        image-item.salamander-row-2__img(:source='require("@/assets/images/profil-page/salamander-pic-02.png")')
        image-item.salamander-row-2__img(:source='require("@/assets/images/profil-page/krug.png")')

      .salamander-row-2__col-2
        image-item.salamander-row-2__img(:source='require("@/assets/images/profil-page/povar.png")')
        p.salamander-row-2__p-1 Все профильные системы Salamander <br>отличает <b>безукоризненное качество <br>пластика, белизна и&nbsp;глянец поверхности.</b>
        p.salamander-row-2__p-2 Одной из&nbsp;отличительных черт всех профильных систем Саламандер является наличие крепежных приливов на&nbsp;внутренней стенке рамы, которые обеспечивают надежность крепления элементов фурнитуры и&nbsp;тем самым высокую защиту от&nbsp;взлома всей оконной конструкции. Данное техническое преимущество подтверждено результатами испытаний независимого Института оконных технологий в&nbsp;Розенхайме (Германия).
        p.salamander-row-2__p-3 Металлическое армирование не&nbsp;соприкасается со&nbsp;стенками основной камеры благодаря специальным выступам на&nbsp;стенках камер, что снижает передачу тепла через армирование и&nbsp;тем самым повышает тепловые характеристики профиля;
        p.salamander-row-2__p-4 Легкость в&nbsp;уходе и&nbsp;чрезвычайная стойкость к&nbsp;воздействию окружающей среды окон Саламандер обеспечивается благодаря легированной поверхности профиля из&nbsp;фирменного ПВХ высокой плотности;

        .salamander-row-2__cont
          p.salamander-row-2__p-5 Мы&nbsp;заботимся о&nbsp;наших покупателях, гарантируя толщину несущих стенок и&nbsp;внутренних перегородок по&nbsp;RAL класс&nbsp;А, что в&nbsp;значительной степени влияет на&nbsp;прочность сварного шва и&nbsp;срок службы готового изделия.
          image-item.salamander-row-2__img(:source='require("@/assets/images/profil-page/salamander-pic-03.png")')
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
<style src='./responsive.stylus' lang='stylus' scoped></style>
