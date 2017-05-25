<?php
	header("content-type:text/html;charset=utf-8");
	header("Access-Control-Allow-Origin:*");
//	$userName=$_POST["username"];
//	$passWord=$_POST["password"];
	
	$users=new mysqli("","root");
	$users->select_db("hgou");
	
	$sql="select * from user";
	$result=$users->query($sql);
	
	$newarray=array();
	if($result->num_rows>0){
	while($row=$result->fetch_assoc()){
		array_push($newarray,$row);	
	}
}
	$json=json_encode($newarray,JSON_UNESCAPED_UNICODE);
	echo $json;
	
//	if($result1->num_rows==0&&$result2->num_rows==0){}
	
?>