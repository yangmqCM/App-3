<template>
	<div class="clearfix">
		<div  v-for="card in cards" class="card">
			<div class="card-img-shadow">
				<img  class="card-img-top" v-bind:src="card.c_img"  /> 
				<div class="img-label">
					<label v-for="c_tag in card.c_tag">{{c_tag}}</label>  
				</div>
			</div>
			<div class="card-body">
				<h5 class="card-title">{{card.c_title}}</h5>
				<div class="card-span">
					<span>{{card.c_type}}</span>
					<span>{{card.c_rank}}</span>
					<span><i class="icon-user"></i>{{card.c_people_num}}</span>
					<span class="star-box on"> 
						<i>*</i>
						<i>*</i>
						<i>*</i>
						<i>*</i>
						{{card.c_evaluate}}
					</span>
				</div>
				<div class="card-price">
					￥{{card.c_price}}
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
	  name: 'card-show',  
	  props:{
	  	cards:{
	  		type: Array  
	  	}
	  }
	}

</script>
<style scoped>
/*为清除浮动样式    可以撑开中间块*/
.clearfix:after {
	content: '\0020';
	display: block;
	height: 0;
	clear: both;
	visibility: hidden
}
 
.clearfix {
	*zoom: 1;
	width:1188px;
	margin: 0 auto;
	margin-top:20px;
	background-color: #fff;
}
	.card{
		position: relative;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient:vertical;/*属性规定框的子元素应该被水平或垂直排列*/
		-webkit-box-direction:normal;/*默认方式显示子元素*/
		-ms-flex-direction: column;
		flex-direction: column;/*列显示*/
		min-width:0;
		word-wrap: break-word;/*长单词和url换行*/
		background-color: #fff;
		background-clip:border-box;/*显示内容范围到边框*/ 
		/*border:1px solid rgba(0,0,0,0.125);*/
		border-radius:0.25rem; 
		/*display: inline-block;*/
		float: left;
		margin-left: 18px;
		margin-bottom: 12px;
		text-align: left;
		
	} 
	.card-body{
		-webkit-box-flex:1;
		-ms-flex:1 1 auto;
		flex: 1 1 auto; 
		font-size:12px; 
		font-weight: 400;
	}
	.card-span{ 
		color:#93999f;
		line-height: 24px; 
	}
	.card-span span{
		display: inline-block;
   		margin-right: 12px;
	}
	.card-price{
		color:#4D555D;
		line-height: 20px;  
		margin-top: 8px;
	}
	.card-title{
		margin-bottom: 0.5rem;
		margin-top: 18px;
		line-height: 24px;
		overflow: hidden;
		-webkit-line-clamp: 2;
		max-height: 46px;
		transition:all .3s;
		font-size: 16px;
	}
	.card-img-top{
		width:216px;
		border-top-left-radius:calc(0.25rem - 1px);
		border-top-right-radius:calc(0.25rem - 1px);
	}
	.star-box{
	color: rgba(255,153,0,.4);
    margin-right: 0;
	}
	.star-box .on{
		color:#f90;
	}
	.[class*=" icon-"], [class^=icon-] {
    font-family: Ionicons!important;
    speak: none;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
	}
	.img-label{
		position: absolute;
		left:8px;
		bottom: 110px; 
		opacity:0.6;
	}
	.img-label label{
		background-color: #F7F7F7;
		border-radius: 12px;
		font-size:12px;
		color:black;
		line-height:16px;
		display: inline-block;
		padding: 4px 8px;
		margin-bottom: 2px;
		margin-right:0 ;
		font-weight:200;
	}
	.card-img-shadow{
		overflow: hidden; 
	}
</style>