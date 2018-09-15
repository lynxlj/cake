require(["config"],function(){
	//再引入依赖的模块
	require(["jquery","header","footer","url","template","add","cookie"],function($,header,footer,url,template,add){
		header.init();
		footer.init();
		$(function(){
		//首次加载获取数据 模块渲染
			$.get(url.url+"selectpro.php",{"type":"coffee"},function(data){
	//			var html = template("list",{data: data});
	//			$("#content").html(html);
				console.log(data);
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
				add.init("#coffee");
				//获取当前点击产品信息
				$(".list-pro").on("click",".skip",function(){
					var pro=$(this).children("h3").html();
					$.cookie("pro",pro,{
							path:"/"
					});
					window.location.href="/html/product.html?kind=coffee";
				});
			},"json");
			
		});
	})
})