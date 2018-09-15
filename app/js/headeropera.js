//$(function(){
//	//判断登录状态
//	console.log($.cookie("islogin"));
//	if($.cookie("islogin")=="true"){
//		console.log(1);
//		$(".right div").eq(3).addClass("ac");
//		$(".right div").eq(4).addClass("ac");
//	}
//	$("#exit").on("click",function(){
//		/*$.cookie("islogin","false",{
//			path:"/html"
//		});*/
//		$.cookie("islogin","false",{
//			path:"/"
//		});
//	});
//});
//导航点击事件
/*require(["url","template"],function(url,template){
	$(function(){
		$(".nav").on("click","a",function(){
			//window.location.href="/html/list.html";
			var type=$(this).prop("className");
			console.log(url.url);
			$.get(url.url+"selectpro.php",{"type":type},function(data){
		//			var html = template("list",{data: data});
		//			$("#content").html(html);
				console.log(data);
				var html = template("list",{data: data});
				$("#list-pro").html(html);
				
				//购买按钮
				  $(".pro-det").on("click",".pro-list-addcart",function(){
				 	$(this).siblings(".spec-detail").slideDown("slow");
				 });
				  //商品选择大小变化
				 $(".spec-info").on("click","a",function(){
				 	$(this).addClass("ac").siblings().removeClass();
				 	$(this).parent().siblings(".spec-title").children().eq($(this).index()).addClass("ac").siblings().removeClass();
				 });
				$("#add").on("click",function(){
					$(this).parent().parent().slideUp("slow");
				});
				$(".exit").on("click",function(){
					$(this).parent().slideUp("slow");
				});
			},"json");
		});
	});
})*/