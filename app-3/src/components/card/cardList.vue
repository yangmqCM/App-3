<template>
	<div> 
		<card :cards="cardItems"/>   
	 	<Pageing/> 
	 	
	</div>
</template>  
<script> 
import Card from './card.vue' 
import Pageing from '../pagination/pageing'
export default {
  name: 'cardList', 
  components:{
  	'card':Card,
  	'Pageing':Pageing
  },
  data () {
    return {
      cardItems: data.list
    }
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
		}
		,
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
		}
		,
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
		}
		,
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
		}
	]
}
 
 
</script>

 