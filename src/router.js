import Vue from 'vue'
import Router from 'vue-router'
import Cars from './components/Cars.vue'
import Watches from './components/Watches.vue'
import Software from './components/Software.vue'
import Etc from './components/Etc.vue'

Vue.use(Router)

export default new Router({
 routes: [
   {
     path: '/',
     name: 'cars',
     component: Cars
   },
   {
     path: '/watches',
     name: 'watches',
     component: Watches
   },
   {
     path: '/software',
     name: 'software',
     component: Software
   },
   {
     path: '/etc',
     name: 'etc',
     component: Etc
   }
 ]
})
