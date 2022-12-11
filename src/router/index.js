import Vue from 'vue'
import VueRouter from 'vue-router'
import defaultLayout from '../layouts/DefaultLayout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: defaultLayout,
    children: [
      {
        path: '/',
        name: 'Main',
        component: () => import('../pages/MainPage.vue'),
      },
      {
        path: '/favourites',
        name: 'Main',
        component: () => import('../pages/FavouritesPage'),
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
