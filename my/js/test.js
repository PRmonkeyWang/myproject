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
						setTimeout(function(){location.href="usercenter.html"},100);
					})
					
					$("#header_top .top .left a").eq(3).css({"display":"inline-block","cursor":"pointer"})
					$("#header_top .top .left a").eq(3).click(function(){
//						return false;
						removeCookie("username");
						setTimeout(function(){location.reload()},100);	
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
			var index = 0;
			function start(){
				$(".pic li").eq(index).find(".img1").animate({"left":0},1000,function(){
					$(this).next().show().animate({"left":0},1000);
				})
			}
			start();
			setInterval(move,3000);
			function move(){
				index++;
				if(index == $(".pic li").length){
					index = 0;
				}
				$(".pic li").eq(index).fadeIn(500).siblings().fadeOut(500);
				$(".nav li").eq(index).addClass("select").siblings().removeClass("select");
				
				start();
				
				$(".pic li").eq(index).siblings().find(".img1").css("left",-910).next().hide().css("left",-20);
				
			}
				var data=[{"imgsrc":"1.jpg"},{"imgsrc":"2.jpg"},{"imgsrc":"3.jpg"},{"imgsrc":"4.jpg"},{"imgsrc":"5.jpg"},{"imgsrc":"6.jpg"},{"imgsrc":"7.png"},{"imgsrc":"8.jpg"},{"imgsrc":"9.jpg"},{"imgsrc":"10.jpg"},{"imgsrc":"11.jpg"},{"imgsrc":"12.jpg"},{"imgsrc":"13.jpg"},{"imgsrc":"14.jpg"},{"imgsrc":"15.jpg"},{"imgsrc":"16.jpg"}];
				var html = template("tabs",{"list":data});
				document.getElementById("image2").innerHTML = html;
//				var html3 = template("tabss",{"lists":data});
//				document.getElementById("image3").innerHTML = html;
		}
			