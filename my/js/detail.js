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
				var sum=0;
				var str=getCookie("shuliang");
				var getspan=document.getElementById("getspan");
				var obj=str?JSON.parse(str):{};
				
				for(var i in obj){
					sum+=obj[i];
				}
				getspan.innerHTML=sum;
				
				$("#shoucang").click(function(){
					var getId=$(this)[0].getAttribute("data-id")
					
					obj[getId]=obj[getId]?++obj[getId]:1;
					var strObj=JSON.stringify(obj);
					
					setCookie("shuliang",strObj,1);
					
					getspan.innerHTML= ++sum;
				})
				$("#getspan").parent().click(function(){
					location.href="gwc.html";
				})
			}
			