<template lang='pug'>
  header.header
    .header__cont
      .header__col-1
        .logo
          picture
            source(srcset='@/assets/images/common/logo-small.svg' media='(max-width: 768px)')
            source(srcset='@/assets/images/common/logo.png')
            img(src='@/assets/images/common/logo.png' alt='Легос' title='Легос')
        .burger-btn-wrapper(v-if='width <= 579' :class='{ active: isActive }' @click='setActiveClass')
          .burger-btn
            span.burger-btn__elem
          span.burger-btn-txt Меню

      .header__col-2
        template(v-if='width <= 991')
          .header-info
            p.header-info__p Пластиковые окна в&nbsp;Чебоксарах. <br>Производство, изготовление, монтаж, ремонт окон в&nbsp;Чебоксарах

            .burger-btn-wrapper(v-if='width >= 579' :class='{ active: isActive }' @click='setActiveClass')
              .burger-btn
                span.burger-btn__elem
              span.burger-btn-txt Меню

        template(v-else)
          .header-info
            p.header-info__p Пластиковые окна в&nbsp;Чебоксарах. Производство, изготовление, монтаж, ремонт окон в&nbsp;Чебоксарах

          nav.header-nav
            ul.header-nav__list
              li.header-nav__item(
                v-for='link in links'
                :key='link.title'
              )
                router-link.header-nav__link.link(
                  :to='`${ link.url }`'
                ) {{ link.title }}

        p.legal-info ЛЕГОС ИП&nbsp;Паутов В.&nbsp;В. ОГРНИП 319213000008859&nbsp;ул. К.&nbsp;Воробьевых, 20, офис 512 (ДОМ МОД, 5&nbsp;этаж)

    .burger-menu(
      v-if='width <= 991'
      :class='{ active: isActive }'
      :style='isActive ? "top:"+ height +"px; opacity: 1; will-change: opacity, top; transition: ease-in-out .2s" : "top: -200px; opacity: 0; will-change: opacity, top; transition: ease .09s"'
    )
      nav.header-nav
        ul.header-nav__list
          li.header-nav__item(
            v-for='link in links'
            :key='link.title'
          )
            router-link.header-nav__link(
              :to='`${ link.url }`'
            ) {{ link.title }}
</template>

<script>
  import Mixins from '../../assets/scripts/mixins'
  import Links  from '../../data/header-menu'

  export default {
    mixins: [Mixins],
    data() {
      return {
        isActive: false,
        links: Links.LINKS,
        height: 0
      }
    },
    methods: {
      setActiveClass: function() {
        const headerHeight = document.querySelector('.header').offsetHeight;
        this.height = headerHeight;
        this.isActive = !this.isActive
      },
      updateHeight() {
        const headerHeight = document.querySelector('.header').offsetHeight;
        this.height = headerHeight;
      }
    },
    mounted() {
      const headerHeight = document.querySelector('.header').offsetHeight;
      window.addEventListener('resize', this.updateHeight);
    },
  }
</script>

<style lang='stylus'>
  .header
    width: 100%
    position: relative
    box-sizing: border-box

    &__cont
      display flex
      position: relative
      box-sizing: border-box

      &:before
        width: calc(100% + 40px)
        height: 100%
        margin-left: -20px
        content: ''
        display: block
        left: 0
        bottom: 0
        position: absolute
        background: #FFFFFF
        z-index: 9999

    &__col-1
      flex: 210px 0 0
      box-sizing: border-box
      position relative
      z-index: 99999

    &__col-2
      width: 100%
      margin: 0 0 0 20px
      box-sizing: border-box
      position relative
      z-index: 99999

    .logo
      height: 100%
      max-width: 210px
      display flex
      align-items: center
      justify-content center

      img
        width: 100%
        max-width: 170px

    .legal-info
      margin: 0
      color: #9E9E9E
      font-size: 10px
      font-weight 600
      font-style: italic
      text-align right

  .header-info
    padding: 5px
    background: #D2D2D2
    box-sizing: border-box

    br
      display: none

    &__p
      margin: 0
      color: #FFFFFF
      font-size: 13px

  .header-nav
    box-sizing: border-box

    &__list
      padding: 0
      margin: 0
      display flex
      flex-wrap: wrap
      justify-content: space-between
      box-sizing: border-box

    &__item
      margin: 0 8px 0 0
      list-style: none
      &:last-of-type
        margin: 0

    &__link
      display inline-block
      padding: 10px 0 4px
      color: #0082C9
      font-size: 13px
      font-weight: 600
      text-decoration: none
      text-transform: uppercase
      box-sizing: border-box
      position relative
      outline: none

      &:after
        width: 100%
        height: 2px
        margin: 4px 0 0
        content: ''
        display: block
        background: lighten(#0082C9, 20%)
        opacity: 0
        transition: .2s

      &:hover
        color: lighten(#0082C9, 20%)

        &:after
          opacity: 1

  .burger-btn-wrapper
    margin: 0 0 0 20px
    display: flex
    flex-direction: column
    align-items: center

  .burger-btn-wrapper.active
    .burger-btn
      .burger-btn__elem
        opacity: 0

      &:before
        top: 14px
        transform: rotate(-135deg)

      &:after
        bottom: 12px
        transform: rotate(135deg)

  .burger-btn
    width: 28px
    height: 28px
    display: flex
    flex-direction: column
    justify-content: space-between
    position: relative
    cursor: pointer
    z-index: 999999

    &:before, &:after, &__elem
      width: 26px
      min-height: 2px
      margin: 0 auto
      content: ''
      display: block
      position: relative
      background: #000000
      transition: .2s

    &:before
      top: 7px

    &:after
      bottom: 7px

  .burger-btn-txt
    width: 100%
    display: inline-block
    color: #000000
    font-size: 8px
    text-align: center
    text-transform: uppercase

  .burger-menu
    width: calc(100% + 40px)
    margin-left: -20px
    padding: 10px 0 0
    top: 0
    left: 0
    position: absolute
    background: #FFFFFF
    box-sizing: border-box
    box-shadow: 0 8px 6px 1px #00000014
    transition: top .2s
    transition: opacity .2s
    z-index: 99

    .header-nav
      width: 100%
      padding: 10px 0 0
      border-top: 1px solid #CCCCCC

      &__list
        align-items: center
        flex-direction: column

      &__item
        width: 100%
        margin: 0
        border-bottom: 1px solid #EEEEEE

        &:last-of-type
          border: 0

      &__link
        width: 100%
        padding: 10px 20px
        text-align: left


  @media (max-width: 993px)
    .header
      .legal-info
        margin: 10px 0 0
        text-align: left

    .header-info
      display: flex
      justify-content: space-between

      br
        display: block

      &__p
        line-height: 20px


  @media (max-width: 769px)
    .header
      &__col-1
        flex: 140px 0 0

    .header-info
      &__p
        line-height: 16px


  @media (max-width: 576px)
    .header
      &__cont
        flex-direction: column
        justify-content: flex-start

      &__col-1
        display: flex
        flex: auto 0 0
        justify-content: space-between
        padding: 10px 0
        box-sizing: border-box

      &__col-2
        margin: 0

      .logo
        justify-content: flex-start

      .legal-info
        display: none

    .header-info
      &__p
        width: 100%
        text-align: center
</style>
