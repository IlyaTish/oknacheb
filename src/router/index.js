import Vue             from 'vue'
import Router          from 'vue-router'
import HomePage        from '@/pages/HomePage/component'
import OknaPage        from '@/pages/OknaPage/component'
import BalkonyPage     from '@/pages/BalkonyPage/component'
import ProfilPage      from '@/pages/ProfilPage/component'
import AccessoriesPage from '@/pages/AccessoriesPage/component'
import ContactsPage    from '@/pages/ContactsPage/component'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Главная',
      component: HomePage
    },
    {
      path: '/okna',
      name: 'Окна',
      component: OknaPage
    },
    {
      path: '/balkony',
      name: 'Балконы',
      component: BalkonyPage
    },
    {
      path: '/profil',
      name: 'Выбираем профиль',
      component: ProfilPage
    },
    {
      path: '/contacts',
      name: 'Контакты',
      component: ContactsPage
    },
    {
      path: '/accessories',
      name: 'Аксессуары',
      component: AccessoriesPage
    }
  ]
})
