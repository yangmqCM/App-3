<template> 
		<ul class="mo-paging">
			<li :class="['paging-item', 'paging-item--prev', {'paging-item--disabled' : index === 1}]"
				>prev</li>
			<li :class="['paging-item', 'paging-item--first', {'paging-item--disabled' : index === 1}]"
				>first</li>
			
			<li :class="['paging-item', 'paging-item--more']"
				>...</li>
			<li :class="['paging-item', {'paging-item--current' : index === pager}]"
				></li>
			<li :class="['paging-item', 'paging-item--more']"
				>...</li>
			
			<li :class="['paging-item', 'paging-item--last', {'paging-item--disabled' : index === pages}]"
				>last</li>
			<li :class="['paging-item', 'paging-item--next', {'paging-item--disabled' : index === pages}]"
				>next</li>
		</ul> 
</template>
<script>
	export default{
		name:'paging',
		props:{
			//页面中可见页码
			perPages:{
				type:Number,
				default:1
			},
			pageIndex:{
				type:Number,
				default:1
			},
			//每页显示的条数
			pageSize:{
				type:Number,
				default:10
			},
			//总记录
			total:{
				type:Number,
				default:1
			}
		},
		methods:{
			prev(){
				if(this.index > 1){
					this.go(this.index - 1)
				}
			},
			next(){
				if(this.index < this.pages){
					this.go(this.index + 1)
				}
			},
			first(){
				if(this.index !==1){
					this.go(1)
				}
			},
			last(){
				if(this.index != this.pages){
					this.go(this.pages)
				}
			},
			go(page){
				if(this.index !== page){
					this.index =page
					this.$emit('change',this.index)
				}
			}
		},
		computed:{/*computed是在HTML DOM加载后马上执行的*/
			//计算总页码
			pages(){
				return Math.ceil(this.size /this.limit)
			},
			//计算页码，当count等变化时自动计算
			pagers(){
				const array =[]
				const perPages = this.perPages
				const pageCount = this.pages
				let current = this.index
				const _offset = (perPages - 1)/2
				
				const offset = {
					start:current - _offset,
					end:current + _offset
				}
				
				if(offset.start <1){
					offset.end = offset.end + (1 - offset.start)
					offset.start = 1
				}
				if (offset.end > pageCount) {
               		 offset.start = offset.start - (offset.end - pageCount)
               		 offset.end = pageCount
           		}
				if (offset.start < 1) offset.start = 1

	            this.showPrevMore = (offset.start > 1)
	            this.showNextMore = (offset.end < pageCount)
	
	            for (let i = offset.start; i <= offset.end; i++) {
	                array.push(i)
	            }
	
	            return array
			}
		},
		data () {
		        return {
		            index : this.pageIndex, //当前页码
		            limit : this.pageSize, //每页显示条数
		            size : this.total || 1, //总记录数
		            showPrevMore : false,
		            showNextMore : false
		        }
		  	},
		 watch : {
		        pageIndex(val) {
		            this.index = val || 1
		        },
		        pageSize(val) {
		            this.limit = val || 10
		        },
		        total(val) {
		            this.size = val || 1
		        }
		    }
	}
	
</script>
<style scoped>
.mo-paging{
	display:inline-block;
	padding:0;
	margin:1rem 0;
	font-size:0;
	list-style:none;
	user-select:none;
}
.mo-paging .paging-item{
	display: inline;
	font-size: 14px;
	position: relative;
	padding:6px 12px;
	line-height: 1.42857143;
	text-decoration: none;
	border:1px solid #ccc;
	background-color: #fff;
	margin-left:-1px;
	cursor:pointer;
	color:#0275d8; 
}
.paging-item:first-child{
	margin-left: 0;
}
.paging-item:hover{
	background-color: #f0f0f0;
	color:#0275d8;
}
.paging-item.paging-item--disabled,
.paging-item.paging-item--more{
	background-color: #fff;
	opacity:.75;
}

/*禁用*
 * 
 */
.paging-item.paging-item--disbaled{
	cursor: not-allowed;
	opacity: .75;
}
.paging-item.paging-item--more,
.paging-item.paging-item--current{
	cursor:default;
}
.paging-item.paging-item--current{
	background-color: #0275d8;
	color: #fff;
	position:relative;
	z-index: 1;
	border-color: #0275D8;
}
</style>