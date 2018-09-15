<?php
	header("Access-Control-Allow-Origin:*");
	header("content-type:text/html;charset=utf-8");
	//获取页面输入信息
	$addUser=$_GET['user'];
	$addPwd=$_GET['pwd'];
	//echo "$addUser";
	mysql_connect("localhost","root","");
	mysql_select_db("cakeproject");
	//插入
	$sql="INSERT INTO user 	(userphone,pwd) VALUES ('$addUser','$addPwd')";
	mysql_query("set names 'utf8'");
	$result=mysql_query($sql);
	if($result){
			echo '{"code":1}';
		}else{
			echo '{"code":0}';
		}
	mysql_close();
	
?>