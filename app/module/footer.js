//定义footer模块
define(function(){
	function Footer(){}

	Footer.prototype.init = function(){
		//1、把header的html内容加载到对应的页面上
		//2、header的交互
		$("#footer").load("/html/footer.html",function(){
			//footer的功能代码
		});
	}

	return new Footer();
})