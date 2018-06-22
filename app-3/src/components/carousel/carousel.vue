<template>
	<div style="margin-top: 20px;"> 
		 <div class="carousel-wrap" id="carousel">
		    <transition-group tag="ul" class='slide-ul' name="list">
		        <li v-for="(list,index) in slideList" :key="index" v-show="index===currentIndex" @mouseenter="stop" @mouseleave="go">
		            <a :href="list.clickUrl" >
		                <img :src="list.image" :alt="list.desc">
		            </a>
		        </li>
		    </transition-group>
		    <div class="carousel-items">
		        <span v-for="(item,index) in slideList.length" :class="{'active':index===currentIndex}" @mouseover="change(index)"></span>
		    </div>
		</div>
	</div>
</template>  
<script>
	export default {
	  name: 'carousel',  
	  	data () {
		    return {
		      slideList: data.slideList,
		      currentIndex:0,
	  		  timer:''
		    }
		  },
		 methods: {
            go() {
                this.timer = setInterval(() => {
                    this.autoPlay()
                }, 4000)
            },
            stop() {
                clearInterval(this.timer)
                this.timer = null
            },
            change(index) {
                this.currentIndex = index
            },
            autoPlay() {
                this.currentIndex++
                if (this.currentIndex > this.slideList.length - 1) {
                    this.currentIndex = 0
                }
            }
        },
       created() {
         this.$nextTick(() => {
           this.timer = setInterval(() => {
             this.autoPlay()
           }, 4000)
         })
       } 
	  }
	var  data={ 
		slideList:[
		  	{
		  		"clickUrl":"#",
		  		"desc":"nhwc",
		  		"image":"../../../static/image/c1.jpg"
		  	},
		  	{
		  		"clickUrl":"#",
		  		"desc":"hxrj",
		  		"image":"../../../static/image/c2.jpg"
		  	},
		  	{
		  		"clickUrl":"#",
		  		"desc":"rsdh",
		  		"image":"../../../static/image/c3.jpg"
		  	}
	  	]
	} 
</script>
 
<style scoped> 
ul{
	list-style-type:none ;
	margin:0;
  	padding: 0;
}
 .carousel-wrap {
   height: 375px;
   width: 1012px;
   overflow: hidden;
   margin: 0 auto;
}
/*这里很重要，slide-ul slide-ul li 确保不会出现空白*/
.slide-ul {
  position: relative;
  width: 100%;
  height: 100%;
}

.slide-ul li {
  position: absolute;
  width: 100%;
  height: 100%;
}
 /*-------*/
.carousel-items {
  position: absolute;
  z-index: 10;
  top: 380px;
  left: 47%;
  width: auto;
  margin: 0 auto;
  text-align: center;
  font-size: 0;
}

.carousel-items span {
  display: inline-block;
  height: 6px;
  width: 30px;
  margin: 0 3px;
  background-color: #b2b2b2;
  cursor: pointer;
}
.carousel-items .active {
  background-color: orange;
}
 
 .list-enter-to {
  transition: all 1s ease;
  transform: translateX(0);
}

.list-leave-active {
  transition: all 1s ease;
  transform: translateX(-100%)
}

.list-enter {
  transform: translateX(100%)
}

.list-leave {
  transform: translateX(0)
}
 
</style> 