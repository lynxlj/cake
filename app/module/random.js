define(function(){
	function Random(){
	}
	Random.prototype.init = function(){
		var oCont=document.getElementById("cont");
		
		var arrStr="123456789zxcvbnmasdfghjklqwertyuiopZXCVBNMASDFGHJKLQWERTYUIOP";
		var arr=[];
		for(var i=0;i<4;i++){
			var n=parseInt(Math.random()*arrStr.length);
			arr.push(arrStr[n]);
		}
		var randomNum=arr.join("")
		oCont.innerHTML=randomNum;
		//返回验证码
		return randomNum;
	}
	return new Random();
	
})