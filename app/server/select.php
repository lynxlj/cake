<?php
	//解决跨域
	header("Access-Control-Allow-Origin:*");
	header("content-type:text/html;charset=utf-8");
	$user=$_GET["user"];
	//数据库操作
	mysql_connect("localhost","root","");
	mysql_select_db("cakeproject");
	//获取三条数据
	$sql=" SELECT * FROM user WHERE userphone='$user' ";
	//获取总的数据量
	mysql_query("set names 'utf8'");
	$result=mysql_query($sql);

	$brr=array();
	while($arr = mysql_fetch_array($result)){
		array_push($brr, $arr);
	}
	echo json_encode($brr);
	mysql_close();
?>
