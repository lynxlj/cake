define(function(){
	//console.log($);
	function Tab(){
	}

	Tab.prototype.init = function(ele,item){
			$(ele+" li").click(function(){
			//链式操作
			$(this).addClass("ac").siblings().removeClass("ac");
			$(ele+" "+item).eq($(this).index()).addClass("ac").siblings().removeClass("ac");
		});
	}

	return new Tab();
})