import Vue             from 'vue'
import Router          from 'vue-router'
import HomePage        from '@/pages/HomePage/component'
import OknaPage        from '@/pages/OknaPage/component'
import BalkonyPage     from '@/pages/BalkonyPage/component'
import AccessoriesPage from '@/pages/AccessoriesPage/component'
import ContactsPage    from '@/pages/ContactsPage/component'
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
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactsPage
    },
    {
      path: '/accessories',
      name: 'accessories',
      component: AccessoriesPage
    }
  ]
});
