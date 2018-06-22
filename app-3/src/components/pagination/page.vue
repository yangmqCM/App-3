<template>
	<div class="list">
		<template v-if="count">
			<ul>
				<li v-for="item in items">...</li>
			</ul>
			<Pageing
				:page-index="currentPage"
				:totla="count"
				:page-size="pageSize"
				@change="pageChnage"
				/>
		</template>
	</div>
</template>
<script> 
import Pageing from './pageing'
export default{
	components:{
		Pageing
	},
	data(){
		return{
			pageSize:20,
			currentPage:1,
			count:0,
			items:[]
		}
	},
	methods:{
		getList(){
			//模拟
                let url = `/api/list/?pageSize=${this.pageSize}&currentPage=${this.currentPage}`
                this.$http.get(url)
                .then(({body}) => {

                    //子组件监听到count变化会自动更新DOM
                    this.count = body.count
                    this.items = body.list
                })
		},
		//从page组件传递过来的当前page
        pageChange (page) {
            this.currentPage = page
            this.getList()
        }
	},
	mounted() {
            //请求第一页数据
            this.getList()
    } 
}
</script>