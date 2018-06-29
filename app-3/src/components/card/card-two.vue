<template>
	<div class="container-lg">
		<div v-for="item in lists" class="card-two">
			<h3>{{item.title}}</h3>
			<p>{{item.desc}}</p>
			<ul>
				<li>
					<em class="em-right">{{item.lastTag}}</em>
					<a target="view_window" v-bind:href="item.videoAddr"> 
						<i class="icon-play2 play"></i>
						<i class="icon-meter address"></i>
						<span>{{item.videoTitle}}</span>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		name:'card-two',
		data(){
			return{
				lists:dataList.list
			} 
		}
	}
	var dataList = {
		"list": [{
			"title": "凡是看开点，就会释怀，阿弥陀佛",
			"desc": "取色器",
			"videoAddr": "http://tool.c7sky.com/webcolor/", 
			"videoTitle": "取色器",
			"lastTag": "初级" 
		},
		{
			"title": "要开心，健康，高效的过每一天",
			"desc": "vue手册",
			"videoAddr": "https://cn.vuejs.org/v2/guide/list.html", 
			"videoTitle": "vue手册",
			"last-tag": "初级" 
		},
		{
			"title":"自私点的人会更幸福",
			"desc": "爱莫能助",
			"videoAddr": "https://icomoon.io/app/#/select/font", 
			"videoTitle": "svg生成font",
			"last-tag": "初级" 
		},
		{
			"title": "不要以为你可以拯救全世界，先把自己过舒服了",
			"desc": "慕课网",
			"videoAddr": "https://www.imooc.com/learn/643", 
			"videoTitle": "慕课网",
			"last-tag": "初级" 
		}
		]
	}
</script>
<style scoped>  
 
	.container-lg { 
	    max-width: 1188px;
	    margin-right: auto;
	    margin-left: auto; 
	}
	.card-two{
		margin: 8px;
		padding: 20px;
		box-shadow: 0px 5px 10px 2px #CCCCFF;
		border-radius: 15px;
		background-color: #FFFACD;
		text-align: left;
		color: #666600;
	}
	.card-two p,.card-two a,.card-two em{
		color: #666600;
	}
	 
	h3{
		margin: 0px;
		padding:0px; 
	    font-weight: 700;
	    line-height: 24px;
	    display: block;
	    font-size: 16px;
	   
	    
	}
	p{
		    margin:5px 2px 5px 2px;
		    font-size: 12px; 
		    line-height: 18px;
		    padding: 0; 
		    
		} 
	ul {
		margin:0;
		padding: 10px 2px 10px 2px;
   		list-style: none;
   		
	}
	li{
		line-height: 38px;
		position: relative; 
		padding:0px 20px; 
	}
	li:hover{
		background-color: #FFE4E1; 
	}
	li:hover span,li:hover i,li:hover em{
		color: red;
	}
	a{   
	    display: block;
	    overflow: hidden;
	    word-break: break-all;
	    text-decoration: none;
	}
	em{
		font-style: normal;
    	font-weight: 400;
    	
	}
	.em-right{
		font-size: 12px; 
		position: absolute;
		top:0px;
		right: 40px;
	}
	.address{
		position: absolute;
		top:9px;
		right: 20px;
		font-size: 16px;
	}
	.play{ 
	    position: relative;
	    top: 3px;
	}
	span{
		font-size: 14px;
		margin-bottom: 10px;
	}
	i{
	 	font-size: 18px;
	 }
</style>