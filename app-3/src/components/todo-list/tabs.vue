<template>
	<div class="helper">
		<span class="left">待处理{{unFinshedTodoLength}}条</span>
		<span  class="tabs">
			<span  :id="state" ref="tabState"  v-for="state in states""
				:key="state"
				:class="[state,filter === state?'actived':'']"
				@click="toggleFilter(state)"
				>
				{{state}}
			</span>
		</span>
		<span class="clear" @click="clearAllCompleted">清除（已完成）</span>
	</div>
</template>
<script>
 
	export default{
		name:'tabs',
		props:{
			filter:{
				type:String,
				required:true
			},
			todos:{
				type:Array,
				required:true
			} 	 
		},
		data(){
			return{
				states:['all','active','completed'] 
			}
		},
		computed:{
			unFinshedTodoLength(){
				return this.todos.filter(todos => !todos.completed).length
			}
		},
		methods:{ 
			clearAllCompleted(){  
				this.$emit('clearAllCompleted')
			},
			toggleFilter(state){
				this.$emit('toggle',state) 
				
			}
		}, 
		 mounted(){  
		  	var tabArray = this.$refs.tabState;
		  	for(var i=0;i<tabArray.length;i++){ 
		  		if(tabArray[i].id == 'all')
		  			tabArray[i].innerText = '全部'
		  		if(tabArray[i].id == 'active')
		  			tabArray[i].innerText ='待处理'
		  		if(tabArray[i].id == 'completed')
		  			tabArray[i].innerText ='已完成'  
		  	}   
		  }
		   
	}
</script>
<style>
	.helper{
		font-weight: 100;
		display: flex;
		justify-content: space-between;
		padding: 5px 0;
		line-height: 30px;
		background-color: #fff;
		font-size: 14px;
		font-smoothing: antialiased; 
	}
	.left,.clear,.tabs{
		padding: 0 10px;
		box-sizing: border-box;
	}
	.left,.clear{
		width:150px
	}
	.left{
		text-align: left;
	}
    .clear{
    	text-align: right;
    	cursor: pointer;
    	border:1px solid #d9d9d9;
    	margin-right: 5px;
    	border-radius: 5px;
    } 
    .clear:hover{
    	background-color: #ccc;
    }
.tabs {
  width: 200px;
  display: flex;
  justify-content: space-around;
}
.tabs * {
  display: inline-block;
  padding: 0 10px;
  cursor: pointer;
  border: 1px solid #FFFFFF;
}
.tabs *.actived {
  border-color: #66CCCC;
  border-radius: 5px;
}
</style>