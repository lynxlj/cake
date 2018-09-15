require(["config"],function(){
	//再引入依赖的模块
	require(["jquery","header","footer","random","url","cookie","md5"],function($,header,footer,random,url){
		header.init();
		footer.init();
		//console.log(url);
		//验证码
		var cont;
//		cont=random.init();
		//console.log(cont.toUpperCase());
		$("#change-cont").on("click",function(){
			cont=random.init();
			//console.log(cont.toUpperCase());
		});
		
		//注册验证
		//console.log(1);
		$(function(){
			var oInput=$("input");
			//console.log(oInput);
			//var oForm=$tag("form")[0];
			var register=$("#register-btn")
			//手机号 密码 确认密码 验证码 同意协议
			var arr=[false,false,false,false,false];
			//登录
			//获取第一次密码
			
			//注册跳转
//			var isSubmit=arr.every(function(item){
//					return item;
//				});
			/*$("#register-form").on("submit",function(e){
				console.log(arr);
				isSubmit=arr.every(function(item){
					return item;
				});
				console.log(isSubmit);
				if(!isSubmit){
					e.preventDefault();
				}
			});*/
			//登录跳转
			/*login.onclick=function(){
				window.location.href="login.html";
				setCookie("flag",false);
			}*/
			//手机号
			oInput[0].onblur=function(){
				var txt=this.value;
				var reg=/^[1]\d{10}$/;
				if(reg.test(txt)){
					arr[0]=true;
					$(".error").eq(0).removeClass("ac");
				}else{
					arr[0]=false;
					$(".error").eq(0).addClass("ac");
				}
			}
			//获取第一次密码			
			var firstpwd;
			//密码不能为空，且不少于6位
			oInput[1].onblur=function(){
				var reg=/^.{6,20}$/;
				var txt=this.value;
				if(reg.test(txt)){
					arr[1]=true;
					firstpwd=txt;
					console.log(firstpwd);
					$(".error").eq(1).removeClass("ac");
				}else{
					arr[1]=false;
					$(".error").eq(1).addClass("ac");
				}
			}
			console.log(firstpwd);
			//再次输入密码
			oInput[2].onblur=function(){
				var txt=this.value;
				if(txt==firstpwd){
					arr[2]=true;
					//this.parentNode.children[1].style.display="none";
					$(".error").eq(2).removeClass("ac");
				}else{
					arr[2]=false;
					$(".error").eq(2).addClass("ac");
				}
			}
			//输入验证码
			oInput[3].onfocus=function(){cont=(random.init()).toUpperCase();console.log(cont);};
			oInput[3].onblur=function(){
				var txt=(this.value).toUpperCase();
				//console.log(txt.toUpperCase());
				if(txt==cont){
					arr[3]=true;
					//this.parentNode.children[1].style.display="none";
					$(".error").eq(3).removeClass("ac");
				}else{
					arr[3]=false;
					$(".error").eq(3).addClass("ac");
				}
			}
			if(oInput[5].checked){
				arr[4]=true;
			}else{
				arr[4]=false;
			}
//			console.log(oInput[5]);
//			console.log(oInput[5].checked);
			//console.log(arr);
			//注册存入数据库
			register.on("click",function(e){
				//阻止默认事件
				e.preventDefault();
				console.log(arr);
				var isSubmit=arr.every(function(item){
					return item;
				});
				console.log(isSubmit);
				if(isSubmit){
					//console.log(arr);
					var user=oInput.eq(0).val();
					
					//密码加密
					var pwd=oInput.eq(1).val();
					pwd=hex_md5(pwd);
					//console.log(pwd);
					//console.log(pwd);
					$.get(url.url+"insert.php",{"user":user,"pwd":pwd},function(data){
						//data = JSON.parse(data);
						console.log(data);
						if(data.code){
							alert("注册成功！");
							window.location.href="/html/login.html";
						}else{
							alert("注册失败,请重新尝试！");
						}
					},"json");
				}
			});
		});
	});
})