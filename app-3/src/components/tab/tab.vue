<template>
	<div class="container clearfix">
		<ul class="nav nav-pills mb-3" >
			<li v-for="(tab,index) in tabs" class="nav-item" @click="showTab(index)" 
				> <a :class="{active:index == num}" class="nav-link">{{tab}}</a></li>
		</ul>
		<div class="tab-content">
			<div v-for="(content,index) in contents" class="tab-pane fade show active"  v-show="index == num">
				<img v-bind:src="content.image" class="img-card"/>
				<div class="course-wrap" >
					<h2>{{content.title}}</h2>
					<p v-for="(value,key) in content.desc">{{ key }}: {{ value }}</p>
				</div> 
				<!--<div class="course-wrap"> 
					<h2>{{content.name}}</h2>
					<p><label>地址：</label> <span>{{content.address}}</span></p>
					<p><label>年纪：</label> <span>{{content.age}}</span></p>
					<p><label>婚否：</label> <span>{{content.marry}}</span></p>
					<p><label>工作：</label> <span>{{content.work}}</span> </p>  
					<p class="desc">{{content.desc}}</p>
				</div>-->
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:'tab',
		data(){
			return{
				 tabs:tabs.tab,
				 contents:contents.content,
				 num:0
			}
		},
		methods:{
			showTab(index){
				this.num = index;
			}
		}
	}
	
	var tabs= {'tab':['工作','生活','对象','娱乐']}
	var contents = { 
		'content':[
		  	{
		  		"image":"../../../static/image/work.jpg",
		  		"title":"前端工程师",
		  		"desc":{
		  		"测试":"单元测试，端到端测试",
		  		"自动化":"自己玩吧",
		  		"基础":"html js css"
		  		}
		  		
		  	},
		  	{
		  		"image":"../../../static/image/life.jpg",
		  		"title":"认真踏实的生活，看开点",
		  		"desc":{
		  			"吃饭":"准点少吃多餐",
			  		"睡觉":"11:00pm", 
			  		"学习":"每天一小时",
			  		"运动":"每天一小时" 
		  		}
		  		
		  	},
		  	{
		  		"image":"../../../static/image/gg.jpg",
		  		"title":"柴敏",
		  		"desc":{
		  		"地址":"湖南常德石门县", 
		  		"年纪":"26",
		  		"婚否":"未婚",
		  		"职业":" C++程序员", 
		  		"个人评价":" 喜欢打游戏,当兵头,啤酒肚,总是说搞学习,都不搞.狮子座.精通C++,QT,已经各种算法.懒癌中期，宅男，会做饭,西红柿鸡蛋，辣椒炒肉，清炒白菜，清蒸鲈鱼，辣椒炒鸡肉，白灼基围虾"
		  		}
		  	}
		  	,
		  	{
		  		"image":"../../../static/image/play.jpg", 
		  		"title":"看你还能玩几年，能玩几年玩几年",
		  		"desc":{
		  		"娱乐":"我们是认真的"
		  		 }
		  	}
	  	]
		
		
	}
</script>
<style scope>
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
	.mb-3,
	.my-3 {
	  margin-bottom: 1rem !important;
	}
	.container{
		width:1188px;
		margin: 0 auto;
	}
	.nav{ 
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		padding-left: 0;
		margin-bottom: 0;
		list-style: none;
	}
	a{
		cursor: pointer;
	}
	.nav-link{
		dispaly:block;
		padding:0.5rem 1rem; 
	}
	.nav-link:hover,.nav-link:focus{
		text-decoration: none;
	}
	.nav-link.disabled{
		color:#6c757d;
	}
	.nav-tabs{
		border-bottom:1px solid #dee2e6;
	}
	.nav-tabs .nav-item{
		margin-bottom:-1px;
	}
	.nav-tabs .nav-link{
		border:1px solid transparent;
		border-top-left-radius:0.25rem;
		border-top-right-radius:0.25rem;
	}
	.nav-tabs .nav-link:hover,.nav-tabs .nav-link:focus{
		border-color:#E9ECEF #E9ECEF #DEE2E6;
	}
	.nav-tabs .nav-link.disabled{
		color:#6C757D;
		background-color: transparent;
		border-color:transparent;
	}
	.nav-tabs .nav-link.active,.nav-tabs .nav-item.show .nav-link{
		color:#495057;
		background-color: #fff;
		border-color:#DEE2E6 #DEE2E6 #fff;
	}
	.nav-tabs .dropdown-menu{
		margin-top:-1px;
		border-top-left-radius:0;
		border-top-right-radius:0; 
	}
	.nav-pills .nav-link {
		  border-radius: 0.25rem;
		}
		
		.nav-pills .nav-link.active,
		.nav-pills .show > .nav-link {
		  color: #fff;
		  background-color: #007bff;
		}
		
		.nav-fill .nav-item {
		  -webkit-box-flex: 1;
		  -ms-flex: 1 1 auto;
		  flex: 1 1 auto;
		  text-align: center;
		}
		
		.nav-justified .nav-item {
		  -ms-flex-preferred-size: 0;
		  flex-basis: 0;
		  -webkit-box-flex: 1;
		  -ms-flex-positive: 1;
		  flex-grow: 1;
		  text-align: center;
		}
		
		.tab-content > .tab-pane {
		  display: none;
		}
		
		.tab-content > .active {
		  display: block;
		}

		.fade {
		  opacity: 0;
		  transition: opacity 0.15s linear;
		}
		
		.fade.show {
		  opacity: 1;
		}
		
		.tab-pane{
			 background-color:#fff ;
			 color:#2C3E50;
			 width: 100%;
			 height: 297px;
			 box-shadow: 0 2px 40px 1px rgba(0, 0, 0, 0.08);
			 border-radius:25px;
			 margin-bottom: 50px;
		}
		.img-card{
			float: left;
			width: 35%;
			height: 260px; 
			border:0px;
			border-radius:25px; 
			transform: scale(1);  
            transition: all 1s ease 0s;  
            -webkit-transform: scale(1);  
            -webkit-transform: all 1s ease 0s; 
		}
		   
              
        .img-card:hover{  
            transform: scale(0.9);  
            transition: all 1s ease 0s;  
            -webkit-transform: scale(0.9);  
            -webkit-transform: all 1s ease 0s;  
        }  
        .course-wrap {
        	float: right; 
		    padding: 10px; 
		    width: 60%;
		    text-align: left;
		}
		p{
			font-size: 14px;
			color: #586069;
			line-height:18px;
		} 
		h2{padding: 0;margin: 0;}
</style>