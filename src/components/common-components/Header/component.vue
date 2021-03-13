<template lang='pug'>
  header.header
    .header__cont
      .header__col-1
        router-link.logo(to='/')
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
  import Mixins from '@/assets/scripts/mixins'
  import Links  from '@/data/header-menu'

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
    }
  }
</script>

<style src='./style.stylus' lang='stylus' scoped></style>
