import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login' 
import Home from '@/components/home'

Vue.use(Router)

const routes = [
	{
      path: '/',
      name: 'Login',
      component: Login
    },
    {
    	path:'/home',
    	name:'Home',
    	component:Home
    } 
    
]
 
export default new Router({
  	routes
})
