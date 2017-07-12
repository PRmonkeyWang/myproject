<?php
header("content-type:text/html;charset=utf-8");
header("Access-Control-Allow-Origin:*");
$id=$_GET["id"];
$num=$_GET["num"];
$title=$_GET["title"];
$imgsrc=$_GET["imgsrc"];
$price=$_GET["price"];
$conn=new mysqli("","root");
$conn->select_db("lefeng");
$sql="select num from gwc where id='$id'";

$result=$conn->query($sql);

if($result->num_rows==0){
	$sql="insert into gwc values('$id','$num','$title','$imgsrc','$price')";
	$conn->query($sql);
}else{
	$sql="update gwc set  num=$num where id='$id'";
	$conn->query($sql);
}
?>