require(["config"],function(){
	//再引入依赖的模块
	require(["jquery","header","footer","template","cookie"],function($,header,footer,template){
		header.init();
		footer.init();
		console.log($.cookie("cart"));
		$(function(){
			//cookie数据渲染购物车
			//获取当前存储的cookie
			function count(){
				var pros=$.cookie("cart");
				//当没有商品时
				if(!pros){
					$(".cart-empty").css("display","block");
					$("#cart").css("display","none");
				}else{
					var data=pros.split("$");
					for(var i=0;i<data.length;i++){
						data[i] = JSON.parse(data[i]);
					}
					var html = template("list",{data:data});
					$("#each_pro").html(html);
					
					//获取当前总金额 判断配送费
					var allMoney=0;
					data=pros.split("$");
					for(var i=0;i<data.length;i++){
						allMoney+=(JSON.parse(data[i]).price)*(JSON.parse(data[i]).num);
					}
					$(".allMoney").html("商品金额："+allMoney+".00");
					if(allMoney>100){
						$(".ps").html("配送费：0.00");
						$(".lastAllMoney").html(allMoney+".00");
					}else{
						$(".ps").html("配送费：10.00");
						$(".lastAllMoney").html(allMoney+10+".00");
					}
					
				}
			}
			count();
			//购物车为空样式
			function fix(){
				$(".cart-empty").css("display","block");
				$("#cart").css("display","none");
				$(".allMoney").html("商品金额：0.00");
				$(".ps").html("配送费：10.00");
				$(".lastAllMoney").html("0.00");
			}
			//购物车列表操作
			//生日卡选择		
			$("tbody").on("click",".action-birthday_card",function(){
				$(this).children(".action-birthday-options").css("display","block");
				$(this).children(".action-birthday-options").children().on("click",function(){
					$(this).parent().parent().children("span").html($(this).html());
					$(this).parent().hover(function(){
					},function(){
						$(this).css("display","none");
					});
				});
				$(".action-birthday-options").hover(function(){
				},function(){
					$(this).css("display","none");
				});
			});
			//商品数量增减
			//数量减少
			//console.log($.cookie("cart"));
			$("tbody").on("click",".minus",function(){
				var num=parseInt($(this).siblings(".pro_num").val());
				console.log(num);
				if(num<=1) {
					num=1;
					$(this).siblings(".pro_num").val(num);
				}else{
					num--;
					$(this).siblings(".pro_num").val(num);
				}
				//获取当前商品名字及价格
				var name=$(this).parent().parent().siblings(".goods-cake").children().children("h4").children("a").html();
				var price=$(this).parent().parent().siblings(".cart-unit-Price").html();
				var pros=$.cookie("cart");
				pros=pros.split("$");
				var len=pros.length;
				//定义空数组存放减少后的cookie数据
				var arr=[];
				for(var i=0;i<len;i++){
					var obj=JSON.parse(pros[i]);
					if(obj.name==name&&obj.price==price){
						obj.num=num;
						var objStr=JSON.stringify(obj);
						arr.push(objStr);
					}else{
						var objStr=JSON.stringify(obj);
						arr.push(objStr);
					}
				}
				$.cookie("cart", arr.join("$"), { path : '/'});
				count();
				//商品单价
				var price=$(this).parent().parent().siblings(".cart-unit-Price").html();
				$(this).parent().parent().siblings(".money").html((price*num).toFixed(2));
			});
			//数量增加
			$("tbody").on("click",".plus",function(){
				var num=parseInt($(this).siblings(".pro_num").val());
				num++;
				$(this).siblings(".pro_num").val(num);
				var price=$(this).parent().parent().siblings(".cart-unit-Price").html();
				console.log(price);
				$(this).parent().parent().siblings(".money").html((price*num).toFixed(2));
				//获取当前商品名字及价格
				var name=$(this).parent().parent().siblings(".goods-cake").children().children("h4").children("a").html();
				var price=$(this).parent().parent().siblings(".cart-unit-Price").html();
				var pros=$.cookie("cart");
				pros=pros.split("$");
				var len=pros.length;
				//定义空数组存放减少后的cookie数据
				var arr=[];
				for(var i=0;i<len;i++){
					var obj=JSON.parse(pros[i]);
					if(obj.name==name&&obj.price==price){
						var newNum=obj.num;
						newNum++;
						obj.num=newNum;
						var objStr=JSON.stringify(obj);
						arr.push(objStr);
					}else{
						var objStr=JSON.stringify(obj);
						arr.push(objStr);
					}
				}
				$.cookie("cart", arr.join("$"), { path : '/'});
				count();
				
			});
			//删除商品
			$("tbody").on("click",".delete a",function(){
				var index=$(this).parent().parent().index();
				var pros=$.cookie("cart");
				var data=pros.split("$");
				data.splice(index,1);
				$.cookie("cart", data.join("$"), { path : '/'});
				$(this).parent().parent().remove();
				count();
				//购物车为空 页面改变
				if(!$.cookie("cart")){
					fix();
				}
			});
			//清除购物车
			$(".clear").on("click",function(){
				$.cookie("cart","",{expires:-1,path:"/"}); 
				$("#cart").remove();
				fix();
			});	
			//结算
			$("#action-submit-btn").on("click",function(){
				if($.cookie("islogin")=="true"){
					alert("周思佚继续吃，唐纯别吃了，这么胖！！！");
				}else{
					alert("请先登录你的账号！");
					window.location.href="/html/login.html";
				}
			});
			
		});
	});
})