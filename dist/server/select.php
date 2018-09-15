<?php
	//解决跨域
	header("Access-Control-Allow-Origin:*");
	header("content-type:text/html;charset=utf-8");
	$user=$_GET["user"];
	
	//$pageCount=$_GET['user'];
	//$index=$_GET['index'];
	//echo $pageCount;
	//数据库操作
	mysql_connect("localhost","root","");
	mysql_select_db("cakeproject");
	//获取三条数据
	//$sql=" SELECT * FROM question LIMIT ".($index-1)*$pageCount.",".$pageCount;
	$sql=" SELECT * FROM user WHERE userphone='$user' ";
	//获取总的数据量
	//$sql1=" SELECT count(*) AS allNum FROM question ";
	mysql_query("set names 'utf8'");
	$result=mysql_query($sql);
	/*$allNum=mysql_query($sql1);
	$allNum=mysql_fetch_assoc($allNum);*/

	$brr=array();
	while($arr = mysql_fetch_array($result)){
		array_push($brr, $arr);
	}
	echo json_encode($brr);
	/*$json = array('allNum' =>$allNum['allNum'] ,'data'=>$brr );*/
	//$json=json_encode($json);
	//echo ($result);
	mysql_close();
?>
