//定义header模块
define(function(){
	
	function Header(){}

	Header.prototype.init = function(){
		//1、把header的html内容加载到对应的页面上
		//2、header的交互
		$("#header").load("/html/header.html",function(){
			//header的功能代码
			$(function(){
				//判断当前选择城市
				var nowCity=$.cookie("city");
				$(".city").children("span").html(nowCity);
				//判断登录状态
				if($.cookie("islogin")=="true"){
					$(".right div").eq(3).addClass("ac");
					$(".right div").eq(4).addClass("ac");
				}
				$("#exit").on("click",function(){
//					$.cookie("islogin","false",{
//						path:"/html"
//					});
					$.cookie("islogin","false",{
						path:"/"
					});
				});
				$("#current-city").on("click","a",function(){
					var city=$(this).html();
					$.cookie("city",city,{
								path:"/"
							});
					$(this).parent().parent().parent().children().eq(0).html(city);
					
				});
			
			});

		});

	}
	return new Header();
})