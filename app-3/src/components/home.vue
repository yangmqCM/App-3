<template>
	<div>  
		<Header class="header f5"/>
		<Carousel/>
		<CardList/>  
		<Footer class="footer"/>
	</div>
</template>
<script> 
	import Header from './header'
	import Carousel from './carousel/carousel' 
	import CardList from './card/cardList' 
	import Footer from './footer'
	
	export default{
		components:{
			Header,Carousel,CardList,Footer 
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