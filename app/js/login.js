require(["config"],function(){
	//再引入依赖的模块
	require(["jquery","header","footer","random","url","cookie","md5"],function($,header,footer,random,url){
		header.init();
		footer.init();
		//console.log(cookie);
		//console.log(islogin);
		//验证码
		var cont;
		
		//console.log(cont.toUpperCase());
		$("#change-cont").on("click",function(){
			cont=random.init();
			//console.log(cont.toUpperCase());
		});
		var oInput=$("input");
		//console.log(oInput);
		//判断登录是否填写（电话号码 密码 验证码）
		var arr=[false,false,false];
		//登录跳转
		/*$("#login-form").on("submit",function(e){
				var isSubmit=arr.every(function(item){
					return item;
				});
				if(!isSubmit){
					e.preventDefault();
				}
			});*/
		//登录验证
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
		//密码不能为空，且不少于6位
		oInput[1].onblur=function(){
			//var reg=/^.$/;
			var txt=this.value;
			if(txt!=''){
				arr[1]=true;
				$(".error").eq(1).removeClass("ac");
			}else{
				arr[1]=false;
				$(".error").eq(1).addClass("ac");
			}
		}
		//验证码验证
		oInput[2].onfocus=function(){cont=(random.init()).toUpperCase();console.log(cont);};
		oInput[2].onblur=function(){
			var txt=(this.value).toUpperCase();
			if(txt==cont){
				arr[2]=true;
				//this.parentNode.children[1].style.display="none";
				$(".error").eq(2).removeClass("ac");
			}else{
				arr[2]=false;
				$(".error").eq(2).addClass("ac");
			}
		}
		//连接数据库获取用户表数据
		/*$.get(url.url+"select.php",function(data){
				//data = JSON.parse(data);
				console.log(data);
			},"json");*/
			
		$("#login-btn").on("click",function(e){
			//阻止默认事件
			e.preventDefault();
			var isSubmit=arr.every(function(item){
					return item;
				});
			if(isSubmit){
				var user=$("#user").val();
				var pwd=$("#pwd").val();
				console.log(user);
				$.get(url.url+"select.php",{"user":user},function(data){
					console.log(data);
					if(data.length==0) alert("不存在此用户");
					else if(data[0].pwd==hex_md5(pwd)) {
						//判断是否登录
						/*$.cookie("islogin","true",{
							path:"/html"
						});*/
						$.cookie("islogin","true",{
							path:"/"
						});
						alert("登录成功！");window.location.href="/html/cake.html";
					}else{alert("密码错误！");}
				},"json");
			}else{
				alert("输入信息不完整或错误");
			}
		});
	})
})