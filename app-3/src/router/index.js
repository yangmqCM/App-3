import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import CardList from '@/components/card/cardlist'

import Header from '@/components/header'
import Footer from '@/components/footer'
import Carousel from '@/components/carousel/carousel'
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
    },
    {
    	path:'/header',
    	name:'Header',
    	component:Header
    },
    ,
    {
    	path:'/footer',
    	name:'Footer',
    	component:Footer
    }, 
    {
    	path:'/carousel',
    	name:'Carousel',
    	component:Carousel
    },
    {
    	path:'/card',
    	name:'Card',
    	component:CardList
    }
    
]
 
export default new Router({
  	routes
})
