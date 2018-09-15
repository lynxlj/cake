require(["config"],function(){
	//再引入依赖的模块
	require(["jquery","header","footer","template","url","search","add","cookie"],function($,header,footer,template,url,search,add){
		header.init();
		footer.init();
		
		$(function(){
			//获取当前产品类型
			var kind=window.location.pathname;
			kind=kind.split("/");
			kind=kind[2].split(".");
			kind=kind[0];
			console.log(kind);
			//分页操作
			//向数据库获取八条信息
			var pageCount=8;
			//页面总数
			var pageNum;
			//当前页数
			var index=1;
			//数据总数
			var allNum;
			//首次加载获取数据 模块渲染
			function selectData(){
				$.get(url.url+"selectpro.php",{"type":kind,"pageCount":pageCount,"index":index},function(data1){
					var data=data1.data;
					console.log(data);
					//数据总数量
					allNum=data1.allNum;
					//获取页数
					pageNum=Math.ceil(allNum/pageCount);
					///////////////////////////////////////
					var html = template("list",{data:data});
					$("#list-pro").html(html);
					//分页按钮
					/*console.log(document.getElementById("pagination"));*/
					document.getElementById("pagination").innerHTML=`<li>
						      <a href="#"  class="prev">
						        <span  class="prev">&laquo;</span>
						      </a>
						    </li>
						    <li id="lastLi">
						      <a href="#"  class="next">
						        <span class="next">&raquo;</span>
						      </a>
						    </li>`;
					for(var i=1;i<=pageNum;i++){
						var li=$("<li><a href='#'>"+i+"</a></li>");
						li.insertBefore($("#lastLi"));
					}
					///////////////////////
					button();
					//点击获取当前产品信息
					$(".pro").on("click",function(){
						//console.log($(this).children("h3"));
						var pro=$(this).children("h3").html();
						$.cookie("pro",pro,{
								path:"/"
						});
						window.location.href="/html/product.html?kind="+kind;
					});

				},"json");
			}
			selectData();
			//点击换页
			$("#pagination").on("click","a",function(e){
				//e=e||window.event;
				if(!isNaN(Number($(this).html()))){
					index=$(this).html();
					//console.log(index);
				}else if($(this).attr("class")=="prev"){
					index--;
					if(index<1) index=1;
				}else if($(this).attr("class")==="next"){
					index++;
					if(index>pageNum) index=pageNum;
				}
				selectData();
			});
			//子菜单点击
			search.init(".type-list");
			//口味类型选择
			$(".tag-list").on("click","a",function(){
				$(".page").html("");
				var type=$(this).prop("className");
				console.log(type);
				//根据类型获取数据(根据父类)
				$.get(url.url+"selectpro.php",{"flag":"1","type":type},function(data){
		//			var html = template("list",{data: data});
		//			$("#content").html(html);
					$("#list-pro").html("");
					console.log(data);
					var html = template("list",{data: data});
					$("#list-pro").html(html);
					button();
					//点击获取当前产品信息
					$(".pro").on("click",function(){
						//console.log($(this).children("h3"));
						var pro=$(this).children("h3").html();
						$.cookie("pro",pro,{
								path:"/"
						});
						window.location.href="/html/product.html?kind="+kind;
					});
					
				},"json");
			});
			//添加购物车
			add.init("#cake");
			//点击购买按钮样式
			function button(){
				//购买按钮
				 $(".list-box").on("click",".pro-list-addcart",function(){
				 	$(this).siblings(".spec-detail").slideDown("slow");
				 });
				  //商品选择大小变化
				 $(".list-box .spec-info").on("click","a",function(){
				 	$(this).addClass("ac").siblings().removeClass();
				 	$(this).parent().siblings(".spec-title").children().eq($(this).index()).addClass("ac").siblings().removeClass();
				 });
				 $(".list-box").on("click","#add",function(){
					$(this).parent().parent().slideUp("slow");
				});
				$(".list-box").on("click",".exit",function(){
					$(this).parent().slideUp("slow");
				});

			}
		});
	});
});