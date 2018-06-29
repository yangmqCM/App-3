<template>
	<div>  
		<Header class="header f5"/>
		<Carousel/>
		<card-list/>   
		<Tab/>  
		<card-two/>
		<todo/>
		<Footer class="footer"/>
	</div>
</template>
<script> 
	import Header from './header'
	import Carousel from './carousel/carousel' 
	import CardList from './card/card-list'  
	import Tab from './tab/tab' 
	import CardTwo from './card/card-two'
	import Footer from './footer'
	import todo from './todo-list/todo'
	export default{
		components:{
			Header,Carousel,CardList,Tab,Footer,CardTwo,todo
		}
	}
</script>
<style>
 
 .header{
 	z-index: 1;
 	padding-top: 12px;
 	padding-bottom:12px;
 	color: #FFCC33;
 	background-color:#009999;
 }
 .footer{
 	z-index: 1;
 	padding-top: 12px;
 	padding-bottom:12px;
 	color: #FFCC33;
 	background-color:#009999;
 	font-size: 12px;  
 }
 .f5{
 	font-size: 14px !important;
 }
</style>