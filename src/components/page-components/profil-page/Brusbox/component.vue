<template lang='pug'>
  section.brusbox
    img.brusbox__main-img(src='@/assets/images/profil-page/brusbox-pic-01.jpg')

    h2.brusbox__title Окна BRUSBOX&nbsp;&mdash; сделают Вашу жизнь комфортной!
    p.brusbox__p Современные окна, балконные и&nbsp;входные двери из&nbsp;профильных систем BRUSBOX имеют многочисленные преимущества. Важные требования, такие как теплоизоляция, взломобезопасность, звукоизоляция учитываются индивидуально и&nbsp;полностью соответствуют особенностям вашего дома.. Оконные системы BRUSBOX от&nbsp;компании &laquo;ЛЕГОС&raquo; отличаются долговечностью, современным дизайном, легкостью в&nbsp;уходе.

    image-item.brusbox__img(:source='require("@/assets/images/profil-page/brusbox-pic-02.png")')

    p.brusbox__p Профиль Brusbox разрабатывался с&nbsp;учетом российских климатических особенностей: сильных холодов, порывистого ветра и&nbsp;обилия снега, а&nbsp;также частой смены циклов замерзания и&nbsp;оттаивания. Собранные из&nbsp;него окна рассчитаны на&nbsp;эксплуатации в&nbsp;российских погодных условиях и&nbsp;легко выдерживают морозы до&nbsp;&minus;40&nbsp;&deg;C.

    image-item.brusbox__img(:source='require("@/assets/images/profil-page/brusbox-pic-03.png")')
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
