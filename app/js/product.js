require(["config"],function(){
	//再引入依赖的模块
	require(["jquery","header","footer","tab","url","template","add","cookie"],function($,header,footer,tab,url,template,add){
		header.init();
		footer.init();
		
		//获取当前商品信息
		//console.log(add);
		var kind=window.location.href;
		kind=kind.split("=");
		kind=kind[1];
		var name=$.cookie("pro");
		console.log(kind);
		console.log(name);
		//数据库获取当前产品信息
		$.get(url.url+"selectpro.php",{"name":name,"kind":kind},function(data){
			console.log(data);
			//if(!data) window.location.href="/html/cake.html";
			//数据库页面渲染
			//产品基本信息
			$(".pro-details-title").html(data[0].name);
			if(data[0].link) $(".link").html(data[0].link+"&gt;");
			else $(".link").remove();
			$(".group").html(data[0].group);
			//banner
			var banner = template("bannerList",{data: data});
			$(".details-banner").html(banner);
			//价格
			var html = template("list",{data: data});
			$("#outer-box").html(html);
			//tab
			tab.init(".outer-box",".img-box");
			tab.init(".details-banner",".otherImg");
			//详情图
			var pics = template("pics",{data: data});
			$(".details-introduction").html(pics);
		},"json");
		//点击购买存cookie
		//添加购物车
		add.init("#outer-box");
	})
})