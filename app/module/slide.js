define(function(){
	function Slide(){
	}
	Slide.prototype.init = function(selector){
		var box = $(selector),
		ul = $(selector +" ul"),
		aLi = $(selector +" ul li"),
		ol = $(selector +" ol");
		//console.log(ul,aLi,ol);
		var flag=false;//播放标志
		var index = 0;//存当前处于第几张图
		//动态生成按钮
		for(var i = 0; i < aLi.length; i++){
			$("<li class="+ (i==0?"ac":"") +"></li>").appendTo(ol);
		}
		
		$(selector+" ol li").on("click",function(){
			//自己改变样式
			if(!flag){
				flag=true;
				$(this).addClass("ac").siblings().removeClass();
				aLi.eq(index).fadeOut(1000);
				index=$(this).index();
				aLi.eq(index).fadeIn(1000,function(){
					flag=false;
				});
			}
		})
		function play(){
			if(!flag){
				flag=true;
				aLi.eq(index).fadeOut(1000);
				index++;
				if(index>aLi.length-1) index=0;
				$(selector +" ol li").eq(index).addClass("ac").siblings().removeClass();
				aLi.eq(index).fadeIn(1000,function(){
					flag=false;
				});
			}
		}
		//自动播放
		var timer=null;
		function auto(){
			timer=setInterval(function(){
				play();
			},2000);
		}
		auto();
		//鼠标移上自动播放停止,移除自动播放
		$(selector).hover(function(){
			clearInterval(timer);
		},function(){
			auto();
		});
	//console.log(selector,box);
	}
	return new Slide();
})