import Vue         from 'vue'
import Router      from 'vue-router'
import HomePage    from '@/components/pages/home-page'
import OknaPage    from '@/components/pages/okna-page'
import BalkonyPage from '@/components/pages/balkony-page'
import '@/assets/libs/libs.min.css'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/okna',
      name: 'okna',
      component: OknaPage
    },
    {
      path: '/balkony',
      name: 'balkony',
      component: BalkonyPage
    }
  ]
})
