require(["config"],function(){
	//再引入依赖的模块
	require(["jquery","header","footer","cookie"],function($,header,footer){
		header.init();
		footer.init();
	})
})