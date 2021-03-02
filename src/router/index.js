import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Test1 from '../views/Test1.vue'
import Test2 from '../views/Test2.vue'
import Test3 from '../views/Test3.vue'
import Test4 from '../views/Test4.vue'
import Test5 from '../views/Test5.vue'
import Test6 from '../views/Test6.vue'
import Test7 from '../views/Test7.vue'
import Test8 from '../views/Test8.vue'
import Pruebas from '../views/Pruebas.vue'
import Weather from '../views/Weather.vue'
import NotFound from '../views/NotFound.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobDetails from '../views/jobs/JobDetails.vue'
import Practicas from '../views/practica/Practicas.vue'
import Practica from '../views/practica/Practica.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/test1',
    name: 'Test1',
    component: Test1
  },
  {
    path: '/test2',
    name: 'Test2',
    component: Test2
  },
  {
    path: '/test3',
    name: 'Test3',
    component: Test3
  },
  {
    path: '/test4',
    name: 'Test4',
    component: Test4
  },
  {
    path: '/test5',
    name: 'Test5',
    component: Test5
  },
  {
    path: '/test6',
    name: 'Test6',
    component: Test6
  },
  {
    path: '/pruebas',
    name: 'Pruebas',
    component: Pruebas
  },
  {
    path: '/test7',
    name: 'Test7',
    component: Test7
  },
  {
    path: '/test8',
    name: 'Test8',
    component: Test8
  },

  {
    path: '/weather',
    name: 'Weather',
    component: Weather
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetails,
    props: true
  },
 
  {
    path: '/practica/:id',
    name: 'Practicas',
    component: Practicas,
    props: true
  },
  //redirect
  {
    path: '/all-jobs',
    redirect: '/jobs'
  },
  //catchall
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
