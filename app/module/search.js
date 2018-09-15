define(function(){
	function Search(){}

	Search.prototype.init = function(selector){
		//子菜单点击跳转页面
		$(selector).on("click","a",function(){
			$(this).css("color","#D5BFA7").parent().siblings().children().css("color","#684029");
			var type=$(this).prop("className");
			//console.log(type);
			if(type=="cake") window.location.href="/html/cake.html";
			else if(type=="ice") window.location.href="/html/ice.html";
			else if(type=="coffee") window.location.href="/html/coffee.html";
			else if(type=="norcake") window.location.href="/html/norcake.html";
			else if(type=="design") window.location.href="/html/design.html";
		});
	}
	return new Search();
	
})


