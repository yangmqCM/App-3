<template>
	<div :class="['todo-item',todo.completed ? 'completed':'']">
		<input type="checkbox"
			class="toggle"
			v-model="todo.completed"
			/>
		<label>{{todo.content}}</label>
		<button class="destory" @click="deletedTodo()"></button>
	</div>
</template>
<script>
	export default{
		name:'item',
		props:{
			todo:{
				type:Object,
				required:true
			} 
		},
		methods:{
			deletedTodo(){
				this.$emit('del',this.todo.id)
			}
		}  
	}
</script>