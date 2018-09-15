//首先引入config
require(["config"],function(){
	//再引入依赖的模块
	require(["jquery","slide","header","footer","add","cookie"],function($,slide,header,footer,add){
		 //console.log(slide);
		 slide.init("#banner");
		 header.init();
		 footer.init();
		//购买按钮
		  $(".product").on("click",".add-cart",function(){
		 	$(this).parent().siblings(".spec-detail").slideDown("slow");
		 });
		  //商品选择大小变化spec-detail
		 $(".spec-info").on("click","a",function(){
		 	$(this).addClass("ac").siblings().removeClass();
		 	$(this).parent().siblings(".spec-title").children().eq($(this).index()).addClass("ac").siblings().removeClass();
		 });
		 //点击购买按钮 购买框消失
		 $(".product").on("click","#add",function(){
			$(this).parent().parent().slideUp("slow");
		});
		$(".product").on("click",".exit",function(){
			$(this).parent().slideUp("slow");
		});
		//加入购物车
		add.init(".content");
		//获取当前点击产品信息
		$(".content .product").on("click","li",function(){
			//console.log($(this).children("h3"));
			var pro=$(this).children().eq(1).children("h6").html();
			$.cookie("pro",pro,{
					path:"/"
				});
		});
	})
})