 <template> 
   <div>  
   	<div class="d-flex flex-justify-between flex-auto pl-3 container-lg">
   		<div class="d-flex flex-justify-between">  
   			<a class="header-logo-invertocat" href="#"> 
   				<img src="../../static/image/logo.png" height="32" width="32"/> 
   			</a> 
   		</div>	
   		<div class="d-flex flex-justify-between flex-auto">
   					<div class="d-flex">
	   					<ul class="d-flex pl-2 flex-items-center text-bold list-style-none" role="navigation">
	   						<li>
	   							<a class="js-selected-navigation-item HeaderNavlink px-2" href="#">
	   								星期一
	   							</a>
	   						</li>
	   						<li>
	   							<a class="js-selected-navigation-item HeaderNavlink px-2" href="#">
	   								星期一
	   							</a>
	   						</li>
	   						<li>
	   							<a class="js-selected-navigation-item HeaderNavlink px-2" href="#">
	   								星期一
	   							</a>
	   						</li>
	   						<li>
	   							<a class="js-selected-navigation-item HeaderNavlink px-2" href="#">
	   								星期一
	   							</a>
	   						</li>
	   					</ul>
   					</div> 
   		</div>  
   	</div> 
   	
   	
   	</div>  
   	
   	
   </div> 
  </template> 
 <style scoped>  
 *{
 	box-sizing: border-box;
 }
 ul{
 	padding:0;
 	margin: 0; 
 }
 .header-logo-invertocat{
 	margin: -1px 15px -1px -2px;
 	color:#fff;
 	white-space: nowrap; 
 }
 
.d-flex{
	display: flex !important;
} 
.flex-auto{
	flex: 1 1 auto !important;
}
.pl-3{
	padding-right: 16px !important;
	padding-left: 16px !important;
}
.flex-justify-between{
	justify-content: space-between !important;
}
.container-lg{
	max-width: 1188px;
	margin-right:auto;
	margin-left:auto;
}
.pl-2{
	padding-left: 8px !important;
}
.flex-items-center{
	align-items: center !important;
}
.text-bold{
	font-weight: 600 !important;
}
.list-style-none{
	list-style:none !important;
}
 
.HeaderNavlink{
	display: block;
	text-decoration: none;  
	color: #FFCC33;/*CC0066  009999 FFCC33*/
}
li{
	display: list-item;
	text-align: -webkit-match-parent;
	padding-left:10px ;
	padding-right:10px ;
	 
}
 </style>
 <script>
 	
 </script>