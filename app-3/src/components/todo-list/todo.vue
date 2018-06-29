<template>
	<div class="container-lg  todo-back"> 
		<section class="real-app marg100 padd100 cover">
			<HeaderTodo/>
			<div class="todo-content">
			<input 
				type="text"
				class="add-input"
				autofocus="autofocus"
				placeholder="接下去要做什么"
				@keyup.enter="addTodo"
				/>
				<item
					class="todo-item"
					:todo="todo" 
					v-for="todo in filteredTodos"
					:key="todo.id"
					@del="deleteTodo"
					/>
				<tabs :filter="filter" 
					  :todos="todos"
					  @toggle="toggleFilter"
					  @clearAllCompleted="clearAllCompleted"
					  />
			</div>
		</section>
	</div>
</template>
<script>
import Item from './item'
import Tabs from './tabs'
import HeaderTodo from './header-todo'
let id = 0;
	export default{
		data(){
			return{
				todos:[],
				filter:'all'
			}
		},
		components:{
			Item,Tabs,HeaderTodo
		},
		computed:{
			filteredTodos(){
				if(this.filter === 'all'){
					return this.todos
				}
				const completed = this.filter ==='completed'
				return this.todos.filter(todo => completed === todo.completed)
			}
		},
		methods:{
			addTodo(e){ 
				let todoObj = {
					id:id++,
					content:e.target.value.trim(),
					completed:false
				}
				this.todos.unshift(todoObj)
				e.target.value = "";
				
				let url="static/data/data.json";
			  	 /*this.$http.get(url)
	                .then(({body}) => {
					 //console.log(body.list)
	                    //子组件监听到count变化会自动更新DOM
	                    //this.count = body.count
	                   // this.items = body.list
	                   //this.$set(body.list,todoObj);
	                })*/
				
			},
			deleteTodo(id){
				this.todos.splice(this.todos.findIndex(todo => todo.id ===id),1)
			},
			toggleFilter(state){
				this.filter = state
				
			},
			clearAllCompleted(){
				this.todos = this.todos.filter(todo => !todo.completed)
			},
			saveTodo(){
				
			},
			getTodo(){
				let url="static/data/data.json";
			  	 this.$http.get(url)
	                .then(({body}) => {
					 console.log(body.list)
	                    //子组件监听到count变化会自动更新DOM
	                    //this.count = body.count
	                   // this.items = body.list
	                })
			}
		},
		mounted(){
			this.getTodo()
		}
                
	}
</script>

<style>
	.container-lg {
	    max-width: 1188px;
	    margin-right: auto;
	    margin-left: auto;
	} 
	.marg100{
		margin-top: 100px;
		margin-bottom: 100px;
	}
	.todo-back{
		background-image:url(../../../static/image/todo.jpg);
		background-repeat: repeat-y;  
	}
	.cover{
		background-color:#66CCCC;
		opacity: .9;
		z-index: -1;
	}
	
	.padd100{
		padding: 100px;
	}
	.todo-content{
		background-color: #FFFFFF;
	}
	.add-input{
		position: relative;
		margin: 0;
		font-size: 24px;
		font-family: inherit;
		line-height: 1.4em;
		width: 100%;
		box-sizing: border-box;
		font-smoothing:antialiased;
		padding: 16px 16px 16px 60px;
		border: 1px solid #000000;
		border: 0;
		color: #586069;
		outline: none;
	}
	.todo-item{
		position: relative;
		font-size: 20px;
		border-bottom: 1px solid #ccc;
	}
	.todo-item:hover .destory:after{
		content:url(../../../static/image/cross.svg);
	}
	label{
		white-space: pre-line;
		word-break: break-all;
		padding: 15px 60px 15px 15px;
		margin-left: 45px;
		display: block;
		line-height: 1.2;
		transition: color 0.4s;
		text-align: left;
	}
	.todo-item.completed label{
		color: #d9d9d9;
		text-decoration: line-through;
	}
	.toggle{
		text-align: center;
		width: 26px;
		height: 26px;
		position: absolute;
		top:0;
		bottom: 0;
		left: 10px;
		margin: auto 0;
		border: none;
		appearance: none;
		outline: none; 	
		color:#FFFACD;
		font-size: 12px;
	}
	.toggle:after{
		content: url(../../../static/image/radio-unchecked.svg);
		 
		 color:#FFFACD;
	}
	.toggle:checked:after{
		content:url(../../../static/image/checkmark.svg);
		 fill:pink;
		 color:#FFFACD;
	}
	.destory{
		position: absolute;
		top: 0;
		right: 10px;
		bottom: 0;
		width: 26px;
		height: 26px;
		margin: auto 0;
		font-size: 18px;
		color: #cc9a9a;
		margin-bottom: 11px;
		transition: color 0.2s ease-out;
		background-color: transparent; 
		appearance: none;
		border-width: 0;
		cursor: pointer;
		outline: none;
	}
</style>