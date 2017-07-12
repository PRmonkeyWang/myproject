<?php
header("content-type:text/html;charset=utf-8");
header("Access-Control-Allow-Origin:*");
$conn=new mysqli("","root");
$conn->select_db("lefeng");
$sql="select * from gwc ";
$result=$conn->query($sql);
$arr=array();

if($result->num_rows>0){
	while($row=$result->fetch_assoc()){
		array_push($arr,$row);
	}
	$json=json_encode($arr,JSON_UNESCAPED_UNICODE);
	echo $json;
}
if($result->num_rows==0){
	echo "1";
}

?>