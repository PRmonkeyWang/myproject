<?php
	header("content-type:text/html;charset=utf-8");
	header("Access-Control-Allow-Origin:*");
	$userName=$_POST["username"];
	$passWord=$_POST["password"];
	$email=$_POST["email"];
	
	$users=new mysqli("","root");
	$users->select_db("hgou");
	
	$sql="select * from user where username='$userName'";
	$result1=$users->query($sql);
	
	$sql="select * from user where email='$email'";
	$result2=$users->query($sql);
	if($result1->num_rows==0&&$result2->num_rows==0){
		echo 0;
			$sql = "insert into user (username,password,email) values ('$userName','$passWord','$email')";
			$users->query($sql);
	}
	if($result1->num_rows>0&&$result2->num_rows==0){
		echo 1;
	}
	if($result1->num_rows==0&&$result2->num_rows>0){
		echo 2;
	}
	
?>