<template>
	<div> 
		<card :cards="items"/>   
		<!--props传值 需要再父组件定义-->
	    <pageing :page-index="currentPage" 
            :total="count" 
            :page-size="pageSize" 
            @change="pageChange"/> 
	</div>
</template>  
<script> 
import Card from './card.vue' 
import Pageing from '../pagination/pageing'
export default {
  name: 'cardList', 
  components:{
  	'card':Card,'pageing':Pageing
  },
  data () { 
    return {
      pageSize:5,
      currentPage:1,
      count:0,
      items: []
    }  
  },
  methods:{
  	getList(){
  		var pageIndex = this.currentPage 
  		var pageSize = this.pageSize 
		var count = data.list.length 
		var pageNumber = Math.ceil(count/pageSize);
		var start = (pageIndex-1)*pageSize
		var end = pageSize*pageIndex-1
		if(end>count){
			end = count -1;
		}
		var datas=[]
		for(;start<=end;start++){
			datas.push(data.list[start]) 
		} 
		//return datas  
		this.count = count;
		this.items = datas;
	},
	pageChange(page){
		this.currentPage = page
		this.getList()
	}
  },
  mounted(){ 
  	this.getList() 
  }
}

var data = {
	"list": [{
			"id": 1,
			"c_title": "论单身狗的精神世界",
			"c_img": "static/image/card1.jpg",
			"c_tag": ["比基尼",
				"沙滩",
				"阳光宅男"
			],
			"c_type": "实战",
			"c_rank": "初级",
			"c_people_num": 6666,
			"c_evaluate": 45,
			"c_price": 15445
		},
		{
			"id": 2,
			"c_title": "论学习的重要性",
			"c_img": "static/image/card2.png",
			"c_tag": ["小腹",
				"马甲线",
				"露脐装"
			],
			"c_type": "实战",
			"c_rank": "中级",
			"c_people_num": 556,
			"c_evaluate": 555,
			"c_price": 55
		},
		{
			"id": 3,
			"c_title": "论坚持每天读书的重要性",
			"c_img": "static/image/card3.png",
			"c_tag": ["基友",
				"拉拉",
				"百合花"
			],
			"c_type": "实战",
			"c_rank": "高级",
			"c_people_num": 1116,
			"c_evaluate": 5222,
			"c_price": 15225
		},
		{
			"id": 4,
			"c_title": "论坚持每天读书的重要性",
			"c_img": "static/image/card3.png",
			"c_tag": ["基友",
				"拉拉",
				"百合花"
			],
			"c_type": "实战",
			"c_rank": "高级",
			"c_people_num": 1116,
			"c_evaluate": 5222,
			"c_price": 15225
		},
		{
			"id": 5,
			"c_title": "论坚持每天读书的重要性",
			"c_img": "static/image/card3.png",
			"c_tag": ["基友",
				"拉拉",
				"百合花"
			],
			"c_type": "实战",
			"c_rank": "高级",
			"c_people_num": 1116,
			"c_evaluate": 5222,
			"c_price": 15225
		}
		,
		{
			"id": 6,
			"c_title": "论坚持每天读书的重要性",
			"c_img": "static/image/card3.png",
			"c_tag": ["基友",
				"拉拉",
				"百合花"
			],
			"c_type": "实战",
			"c_rank": "高级",
			"c_people_num": 1116,
			"c_evaluate": 5222,
			"c_price": 15225
		}
		,
		{
			"id": 7,
			"c_title": "论坚持每天读书的重要性",
			"c_img": "static/image/card3.png",
			"c_tag": ["基友",
				"拉拉",
				"百合花"
			],
			"c_type": "实战",
			"c_rank": "高级",
			"c_people_num": 1116,
			"c_evaluate": 5222,
			"c_price": 15225
		}
		,
		{
			"id": 8,
			"c_title": "论坚持每天读书的重要性end",
			"c_img": "static/image/card3.png",
			"c_tag": ["基友",
				"拉拉",
				"百合花"
			],
			"c_type": "实战",
			"c_rank": "高级",
			"c_people_num": 1116,
			"c_evaluate": 5222,
			"c_price": 15225
		},
		{
			"id": 9,
			"c_title": "论坚持每天读书的重要性end",
			"c_img": "static/image/card3.png",
			"c_tag": ["基友",
				"拉拉",
				"百合花"
			],
			"c_type": "实战",
			"c_rank": "高级",
			"c_people_num": 1116,
			"c_evaluate": 5222,
			"c_price": 15225
		},
		{
			"id": 10,
			"c_title": "论坚持每天读书的重要性end",
			"c_img": "static/image/card3.png",
			"c_tag": ["基友",
				"拉拉",
				"百合花"
			],
			"c_type": "实战",
			"c_rank": "高级",
			"c_people_num": 1116,
			"c_evaluate": 5222,
			"c_price": 15225
		},
		{
			"id": 11,
			"c_title": "论坚持每天读书的重要性end",
			"c_img": "static/image/card3.png",
			"c_tag": ["基友",
				"拉拉",
				"百合花"
			],
			"c_type": "实战",
			"c_rank": "高级",
			"c_people_num": 1116,
			"c_evaluate": 5222,
			"c_price": 15225
		},
		{
			"id": 12,
			"c_title": "论坚持每天读书的重要性end",
			"c_img": "static/image/card3.png",
			"c_tag": ["基友",
				"拉拉",
				"百合花"
			],
			"c_type": "实战",
			"c_rank": "高级",
			"c_people_num": 1116,
			"c_evaluate": 5222,
			"c_price": 15225
		},
		{
			"id": 13,
			"c_title": "论坚持每天读书的重要性end",
			"c_img": "static/image/card3.png",
			"c_tag": ["基友",
				"拉拉",
				"百合花"
			],
			"c_type": "实战",
			"c_rank": "高级",
			"c_people_num": 1116,
			"c_evaluate": 5222,
			"c_price": 15225
		},
		{
			"id": 14,
			"c_title": "论坚持每天读书的重要性end",
			"c_img": "static/image/card3.png",
			"c_tag": ["基友",
				"拉拉",
				"百合花"
			],
			"c_type": "实战",
			"c_rank": "高级",
			"c_people_num": 1116,
			"c_evaluate": 5222,
			"c_price": 15225
		},
		{
			"id": 15,
			"c_title": "论坚持每天读书的重要性end",
			"c_img": "static/image/card3.png",
			"c_tag": ["基友",
				"拉拉",
				"百合花"
			],
			"c_type": "实战",
			"c_rank": "高级",
			"c_people_num": 1116,
			"c_evaluate": 5222,
			"c_price": 15225
		},
		{
			"id": 16,
			"c_title": "论坚持每天读书的重要性end",
			"c_img": "static/image/card3.png",
			"c_tag": ["基友",
				"拉拉",
				"百合花"
			],
			"c_type": "实战",
			"c_rank": "高级",
			"c_people_num": 1116,
			"c_evaluate": 5222,
			"c_price": 15225
		},
		{
			"id": 17,
			"c_title": "论坚持每天读书的重要性end",
			"c_img": "static/image/card3.png",
			"c_tag": ["基友",
				"拉拉",
				"百合花"
			],
			"c_type": "实战",
			"c_rank": "高级",
			"c_people_num": 1116,
			"c_evaluate": 5222,
			"c_price": 15225
		},
		{
			"id": 18,
			"c_title": "论坚持每天读书的重要性end",
			"c_img": "static/image/card3.png",
			"c_tag": ["基友",
				"拉拉",
				"百合花"
			],
			"c_type": "实战",
			"c_rank": "高级",
			"c_people_num": 1116,
			"c_evaluate": 5222,
			"c_price": 15225
		},
		{
			"id": 20,
			"c_title": "论坚持每天读书的重要性end",
			"c_img": "static/image/card3.png",
			"c_tag": ["基友",
				"拉拉",
				"百合花"
			],
			"c_type": "实战",
			"c_rank": "高级",
			"c_people_num": 1116,
			"c_evaluate": 5222,
			"c_price": 15225
		},
		{
			"id": 21,
			"c_title": "论坚持每天读书的重要性end",
			"c_img": "static/image/card3.png",
			"c_tag": ["基友",
				"拉拉",
				"百合花"
			],
			"c_type": "实战",
			"c_rank": "高级",
			"c_people_num": 1116,
			"c_evaluate": 5222,
			"c_price": 15225
		},
		{
			"id": 22,
			"c_title": "论坚持每天读书的重要性end",
			"c_img": "static/image/card3.png",
			"c_tag": ["基友",
				"拉拉",
				"百合花"
			],
			"c_type": "实战",
			"c_rank": "高级",
			"c_people_num": 1116,
			"c_evaluate": 5222,
			"c_price": 15225
		},
		{
			"id": 23,
			"c_title": "论坚持每天读书的重要性end",
			"c_img": "static/image/card3.png",
			"c_tag": ["基友",
				"拉拉",
				"百合花"
			],
			"c_type": "实战",
			"c_rank": "高级",
			"c_people_num": 1116,
			"c_evaluate": 5222,
			"c_price": 15225
		},
		{
			"id": 24,
			"c_title": "论坚持每天读书的重要性end",
			"c_img": "static/image/card3.png",
			"c_tag": ["基友",
				"拉拉",
				"百合花"
			],
			"c_type": "实战",
			"c_rank": "高级",
			"c_people_num": 1116,
			"c_evaluate": 5222,
			"c_price": 15225
		},
		{
			"id": 25,
			"c_title": "论坚持每天读书的重要性end",
			"c_img": "static/image/card3.png",
			"c_tag": ["基友",
				"拉拉",
				"百合花"
			],
			"c_type": "实战",
			"c_rank": "高级",
			"c_people_num": 1116,
			"c_evaluate": 5222,
			"c_price": 15225
		},
		{
			"id": 26,
			"c_title": "论坚持每天读书的重要性end",
			"c_img": "static/image/card3.png",
			"c_tag": ["基友",
				"拉拉",
				"百合花"
			],
			"c_type": "实战",
			"c_rank": "高级",
			"c_people_num": 1116,
			"c_evaluate": 5222,
			"c_price": 15225
		},
		{
			"id": 27,
			"c_title": "论坚持每天读书的重要性end",
			"c_img": "static/image/card3.png",
			"c_tag": ["基友",
				"拉拉",
				"百合花"
			],
			"c_type": "实战",
			"c_rank": "高级",
			"c_people_num": 1116,
			"c_evaluate": 5222,
			"c_price": 15225
		},
		{
			"id": 28,
			"c_title": "论坚持每天读书的重要性end",
			"c_img": "static/image/card3.png",
			"c_tag": ["基友",
				"拉拉",
				"百合花"
			],
			"c_type": "实战",
			"c_rank": "高级",
			"c_people_num": 1116,
			"c_evaluate": 5222,
			"c_price": 15225
		}
	]
}
 /*
function pageUp(pageIndex,pageSize){
	var count = data.list.length
	var pageNumber = Math.ceil(count/pageSize);
	var start = (pageIndex-1)*pageSize
	var end = pageSize*pageIndex-1
	if(end>count){
		end = count -1;
	}
	var datas=[]
	for(;start<=end;start++){
		datas.push(data.list[start])
		//alert(data.list[start])
	}
	alert(datas);
	return datas
//	alert(JSON.stringify(aa));
	//var pageStart = data.list[start]
	//var pageEnd = data.list[end]
	//alert(pageStart);
}
pageUp(1,5);*/
</script>

 