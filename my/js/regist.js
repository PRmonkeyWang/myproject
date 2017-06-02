var str1=getCookie("username");
			var str2=decodeURI(str1);
//			console.log(str2);
			str1?foo1():foo2()
			//--------------------------------------foo1
			function foo1(){
				$(function(){
					//---------------------------------------------------------head变化
					$("#header_top .top .left span").html("您好，欢迎您回来！")
					$("#header_top .top .left .user1").html(str2);
					
					$("#header_top .top .left .user1").css({"font-weight":"bold","font-style":"italic"});
					$("#header_top .top .left .user2").css("display","none");
					$("#header_top .top .left .user1").css("display","inline-block");
					
					$("#header_top .top .left .user1").click(function(){
						setTimeout(function(){location.href="usercenter.html"},100)
					})
					
					$("#header_top .top .left a").eq(3).css({"display":"inline-block","cursor":"pointer"})
					$("#header_top .top .left a").eq(3).click(function(){
//						return false;
						removeCookie("username");
						setTimeout(function(){location.reload()},100)	
					})
					//---------------
					foo3();
				})
			}
			//--------------------------------------foo2
			function foo2(){
				$(function(){
					foo3();
				})
			}
			
			
			
			function foo3(){
				$("#un,#el").blur(function(){
					//***************************************冗余代码
					$("#un").parent().find("i").html("*");
					$("#el").parent().find("i").html("*");
					$("#pw1").parent().find("i").html("*");
					$("#pw2").parent().find("i").html("*");
					
					var reg1=/[\u4e00-\u9fa5]/;
					var reg2=/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
					
					if($("#un").val()==""){
							
//								var reg=/^(\d{4})(\D{5})$/;
//								var val=oZh.value;
//								if(reg.test(val)){
//									console.log("正确");
//								}else{
//									console.log("不正确");
//								}
							
						$("#un").parent().find("i").html("-用户名不能为空");
						return;
					}else if(!reg1.test($("#un").val())){
						$("#un").parent().find("i").html("-用户名格式错误");
						return;
					}
					
					
					if($("#el").val()==""){
						$("#el").parent().find("i").html("-邮箱不能为空");
						return;
					}else if(!reg2.test($("#el").val())){
						$("#el").parent().find("i").html("-邮箱格式错误");
						return;
					}
					
					
					if($("#pw1").val()==""){
						$("#pw1").parent().find("i").html("-密码不能为空");
						return;
					}
					if($("#pw1").val()!=$("#pw2").val()){
						$("#pw2").parent().find("i").html("-两次密码不一致");
						return;
					}
					//************************************************
				})
				
				$("#btn").click(function(){
					$("#un").parent().find("i").html("*");
					$("#el").parent().find("i").html("*");
					$("#pw1").parent().find("i").html("*");
					$("#pw2").parent().find("i").html("*");
					
					if($("#un").val()==""){
						$("#un").parent().find("i").html("-用户名不能为空");
						return;
					}
					if($("#el").val()==""){
						$("#el").parent().find("i").html("-邮箱不能为空");
						return;
					}
					if($("#pw1").val()==""){
						$("#pw1").parent().find("i").html("-密码不能为空");
						return;
					}
					if($("#pw1").val()!=$("#pw2").val()){
						$("#pw2").parent().find("i").html("-两次密码不一致");
						return;
					}
					
//					console.log($("#un").val());
					$.post("http://127.0.0.1/stage333/Hgou_my/regist.php",{"username":$("#un").val(),"password":$("#pw1").val(),"email":$("#el").val()},function(data){
//						data=eval(data);

//						console.log($("#con .left ul li:nth-of-type(6)").find("input").attr("checked"))
//						console.log($("#cb").attr("checked"))
						if(data==0){
							
							alert("注册成功!");

							location.href="login.html";
							
						}else if(data==1){
							$("#un").parent().find("i").html("-该用户名已被使用");
						}else if(data==2){
							$("#el").parent().find("i").html("-该邮箱已被使用");
						}
					})
				})
				
			}