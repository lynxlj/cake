<?php
	//解决跨域
	header("Access-Control-Allow-Origin:*");
	header("content-type:text/html;charset=utf-8");
	//判断查询类型
	$type=$_GET['type'];
	$flag=$_GET['flag'];
	$name=$_GET['name'];
	$kind=$_GET['kind'];
	
	$pageCount=$_GET['pageCount'];
	$index=$_GET['index'];
	//数据库操作
	mysql_connect("localhost","root","");
	mysql_select_db("cakeproject");
	
	if($pageCount){
		//获取八条数据
		$sql=" SELECT * FROM cake LIMIT ".($index-1)*$pageCount.",".$pageCount;
		//获取总的数据量
		$sql1=" SELECT count(*) AS allNum FROM cake ";
		mysql_query("set names 'utf8'");
		$result=mysql_query($sql);
		$allNum=mysql_query($sql1);
		$allNum=mysql_fetch_assoc($allNum);
	
		$brr=array();
		while($arr = mysql_fetch_array($result)){
			array_push($brr,$arr);
		}
		
		$json = array('allNum' =>$allNum['allNum'] ,'data'=>$brr );
		$json=json_encode($json);
		echo($json);
		
	}else{
		if($flag=="1") $sql=" SELECT * FROM cake WHERE type LIKE '%$type%' ";
		else if($name) {
			if($kind=="coffee"){
				$sql=" SELECT * FROM coffee WHERE name='$name' ";
			}else if($kind=="ice"){
				$sql=" SELECT * FROM ice WHERE name='$name' ";
			}else if($kind=="norcake"){
				$sql=" SELECT * FROM norcake WHERE name='$name' ";
			}else if($kind=="design"){
				$sql=" SELECT * FROM design WHERE name='$name' ";
			}else{
				$sql=" SELECT * FROM cake WHERE name='$name' ";
			}
		}
		else $sql=" SELECT * FROM $type " ;
		
		mysql_query("set names 'utf8'");
		$result=mysql_query($sql);
		$brr=array();
		while($arr = mysql_fetch_assoc($result)){
			array_push($brr, $arr);
		}
		echo json_encode($brr);
	}
	mysql_close();
?>
