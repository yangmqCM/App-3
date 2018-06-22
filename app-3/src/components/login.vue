<template>
  <div class="container"> 
  	<h1>欢迎来到ymq的vue第一个登录</h1>
  	<form>
  		<div class="input-group">
  			<input id="user_name" name="user_name" class="form-control" placeholder="手机号/邮箱">
  		</div>
  		<div class="input-group">
  			<input id="user_password" name="user_password" class="form-control" placeholder="密码">
  		</div>
  		<div class="pt-15">
     		<router-link to="/home">Home</router-link> 
  			<button class="btn btn-success full" @click="login">登录</button> 
  		</div> 
  		<div class="pt-15">
  			<router-link to="/home">注册</router-link> |<router-link to="/home">忘记密码</router-link>
  		</div>  
  	</form> 
  </div>
 
</template>

<script> 
export default {
  name: 'login', 
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
  	login:function(event){
  		 this.$router.push({path:'/home'});
  		 
  	}
  }
}
</script> 
<style scoped>
	a {
  color: #42b983;
  cursor:pointer;
}
</style>
