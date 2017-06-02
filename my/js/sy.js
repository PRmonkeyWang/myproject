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
			
			//----------------------------------------------menu....data--------------------
				

				$.get("json/menu.json",{},function(data){
					var data_menu=data;
//					console.log(data[0].type);
					var html0 = template("tab0",{"list0":data_menu});
					var amenu=document.getElementsByTagName("menu");
					for(var i=0;i<amenu.length;i++){
						amenu[i].innerHTML=html0;	
					}
					
				})
			
			//----------------------------------------------art-1....data--------------------
				
				var obig=document.getElementsByClassName("big");
				$.get("json/big.json",{},function(data){
					var data_big=data;
					for(var i=0;i<data_big.length;i++){
					obig[i].style.backgroundImage="url(img/big/"+data_big[i].imgsrc+")";	
					}
				})
				
				
				
				var osmall=document.getElementsByClassName("small");
				var small_price=document.getElementsByClassName("small_price");
				

				
				$.get("json/small.json",{},function(data){
					var data_small=data;
					for(var j=0;j<data_small.length;j++){
					osmall[j].style.backgroundImage="url(img/small/"+data_small[j].imgsrc+")";
//					console.log(small_price[0])
					small_price[j].innerHTML=data_small[j].price
					}
				})
				
				for(var i in obig){
					obig[i].onclick=function(){
					setTimeout(function(){location.href="detail.html"},200)
					}
				}
				for(var j in osmall){
					osmall[j].onclick=function(){
					setTimeout(function(){location.href="detail.html"},200)
				
					}
				}
				
				
				
			//----------------------------------------------art1....data--------------------
				
				$.get("json/data1.json",{},function(data){
					var data1=data;
					var html1 = template("tab1",{"list1":data1});
				document.getElementById("image2").innerHTML = html1;
				})
				
			//----------------------------------------------art2....data--------------------
			
			//----------------------------------------------art3....data--------------------
			
			//----------------------------------------------art4-1....data--------------------
			
			//----------------------------------------------art4-2....data--------------------
			
			//----------------------------------------------art6....data--------------------
				
				$.get("json/data6.json",{},function(data){
					var data6=data;
					var html6 = template("tab6",{"list6":data6});
					var article6=document.getElementsByClassName("article6")[0];
					var right=article6.getElementsByClassName("right")[0];
					right.getElementsByClassName("top")[0].innerHTML=html6;
				})
				
				$.get("json/data66.json",{},function(data){
					var data66=data
					var html66 = template("tab66",{"list66":data66});
					document.getElementsByClassName("con_right")[0].innerHTML=html66;
				})
				
				
			//----------------------------------------------art7....data--------------------
				$.get("json/data7.json",{},function(data){
					var data7=data;
					var html7 = template("tab7",{"list7":data7});
					document.getElementById("hz").innerHTML = html7;
				})
				
		}