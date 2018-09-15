define(function(){
	function Add(){}

	Add.prototype.init = function(id){
		//加入购物车
		$(id).on("click","#add",function(){
			//当前点击产品名称
			if(id=="#cake"){
				var name=$(this).parent().parent().parent().children().eq(0).children("h3").html();
				var size=$(this).parent().siblings(".spec-info").children(".ac").html().slice(0,4);
				var price=$(this).parent().siblings(".spec-title").children(".ac").html().slice(1,-5);
				var src=$(this).parent().parent().siblings().eq(0).children().attr("src");
				var type="cake";
			}else if(id==".content"){
				var name=$(this).parent().parent().parent().children().eq(1).children().html();
				var size=$(this).parent().siblings(".spec-info").children(".ac").html().slice(0,4);
				var price=$(this).parent().siblings(".spec-title").children(".ac").html().slice(1,-5);
				var src=$(this).parent().parent().siblings().eq(0).children().attr("src");
				var type="cake";
			}else if(id=="#outer-box"){
				var name=$(".pro-details-title").html();
				var size=$(this).parent().siblings(".details-img-box").children(".ac").children("p").html().slice(-4);
				var price=$(this).parent().siblings(".details-img-box").children(".ac").children("p").children("span").html();
				var src=$(this).parent().parent().parent().parent().parent().siblings(".details-banner").children(".left-img-box").children(".video-box").children(".ac").attr("src");
			}else{
				var name=$(this).parent().parent().parent().children().eq(0).children("h3").html();
				var size="一 份";
				var price=$(this).parent().parent().parent().children().eq(0).children("span").html().slice(1,-2);
				var src=$(this).parent().parent().parent().children().eq(0).children("img").attr("src");
			}
			var num=1;
			//console.log(price);
			//cookie存购物车信息
			type=type?type:'';
			var pros=$.cookie("cart");
			if(pros == null || pros =="") {
				pros = [];
				var pro = {name:name,size:size,price:price,num:num,src:src,type:type};
				var proStr = JSON.stringify(pro);
				pros.push(proStr);
				$.cookie("cart", pros.join("$"), { path : '/'});
				alert("加入成功！！！");
			}else{
				pros = pros.split("$");
				//var obj = JSON.parse(pros);
				//console.log(pros);
				//console.log(pros.length);
				var len=pros.length;
				for(var i=0;i<len;i++){
					var obj=JSON.parse(pros[i]);
					//console.log(JSON.parse(pros[i]).name==name&&JSON.parse(pros[i]).price==price)
					if(obj.name==name&&obj.price==price){
						var newNum=obj.num;
						newNum++;
						obj.num=newNum;
						pros[i] = JSON.stringify(obj);
						$.cookie("cart", pros.join("$"), { path : '/'});
						alert("加入成功！！！");
						return;
					}
				}
				var pro = {name:name,size:size,price:price,num:num,src:src,type:type};
				var proStr = JSON.stringify(pro);
				pros.push(proStr);
				/*obj = JSON.stringify(obj);*/
				$.cookie("cart", pros.join("$"), { path : '/'});
				alert("加入成功！！！");
			}
			
		});
	}

	return new Add();
})