require(["config"],function(){
	//再引入依赖的模块
	require(["jquery","header","footer","template","url","search","add","cookie"],function($,header,footer,template,url,search,add){
		header.init();
		footer.init();
		//口味样式
		$(".tag-list a").css("color","#E0DEDE");
		$(function(){
			//获取当前产品类型
			var kind=window.location.pathname;
			kind=kind.split("/");
			kind=kind[2].split(".");
			kind=kind[0];
			console.log(kind);
			//首次加载获取数据 模块渲染
			$.get(url.url+"selectpro.php",{"type":kind},function(data){
				var html = template("list",{data: data});
				$("#list-pro").html(html);
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
				//添加购物车
				add.init(".otherpro");
				//获取当前点击产品信息
				$(".list-pro").on("click",".skip",function(){
					var pro=$(this).children("h3").html();
					$.cookie("pro",pro,{
							path:"/"
					});
					window.location.href="/html/product.html?kind="+kind;
				});
				
			},"json");
			//子菜单点击
			search.init(".type-list");
			
			//获取当前点击产品信息跳转到商品详情
			$(".list-pro").on("click",".skip",function(){
				var pro=$(this).children().eq(1).children("h6").html();
				$.cookie("pro",pro,{
						path:"/"
				});
				window.location.href="/html/product.html?kind="+kind;
			});
		});
	});
});