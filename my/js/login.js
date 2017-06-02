
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
				$("#btn").click(function(){
					$.post("http://127.0.0.1/stage333/Hgou_my/login.php",{"username":$("#un").val(),"password":$("#pw").val()},function(data){
						data=eval(data);
//						console.log($("#un").val());
				
						
						for(var i=0;i<data.length;i++){
//							console.log(data[0].username)
							if($("#un").val()==data[i].username&&$("#pw").val()==data[i].password&&$("#cd").val()=="3JC8"){
								
								var str=encodeURI($("#un").val());
//								console.log(str);
								setCookie("username",str,1);
								setTimeout(function(){location.href="sy.html";},100)
								
								
//								var getShuju=getCookie("user");
								return;
							}
							if($("#un").val()!=data[i].username){
								if(i<data.length-1){
									continue;
								}else{
									alert("用户名不存在！");
								}
							}else if($("#pw").val()!=data[i].password){
								alert("密码错误！");
								$("#pw")[0].value="";
								return;
							}else if($("#cd").val()!="3JC8"){
								alert("验证码不正确！");
								return;
							}
						}
						
					})
				})
			}