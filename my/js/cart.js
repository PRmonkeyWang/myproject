//-----------------------------弄个数据
			var data=[{
				id:"101",
				imgsrc:"img/timg1.jpg",
				type:"50g",
				title:"法国Givenchy/纪梵希 轻盈无痕明星散粉",
				price1:"499.0",
				price2:"299.0"
			}]
			//----------------------------------
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
				//-----------------------------------动态生成
				var omiddle=document.getElementById("middle");
				var getspan=document.getElementById("getspan");
				var str=getCookie("shuliang");
				var jsonstr=JSON.parse(str);
				var html="";
				for(var i in jsonstr){
					for(var j in data){
				
					if(jsonstr[i]){
						if(data[j].id==i){
							html+="<li><span class='a' style='background:url("+data[j].imgsrc+") no-repeat center top/contain'></span><span class='b'>"+data[j].type+"</span><span class='c' style='text-decoration:line-through'>￥"+data[j].price1+"</span><span class='d'>￥"+data[j].price2+"</span><span class='e'><i id='jia' style='border:1px solid #ccc;font-size:20px;line-height:40px'> + </i>"+jsonstr[i]+"<i id='jian' date-id='"+data[j].id+"' style='border:1px solid #ccc;font-size:20px;line-height:40px'> - </i></span><span class='f'>￥"+parseInt(data[j].price2)*parseInt(jsonstr[i])+"</span><span class='g'><b class='delate' date-id='"+data[j].id+"' style='border:1px solid #000;margin-left:40px;cursor:pointer'>删除</b></span></li>"	
							
						}
						
					}	
				}	
			}
			omiddle.innerHTML=html;
			
			var aInput=omiddle.getElementsByTagName("b");
			for(var i in aInput){
				
				aInput[i].onclick=function(){
					var id2=this.getAttribute("date-id");
					this.parentElement.parentElement.style.display="none"
					if(jsonstr[id2]){
						jsonstr[id2]= --jsonstr[id2];
						getspan.innerHTML= --sum;
					}
					location.reload();
					var str2=JSON.stringify(jsonstr);
					setCookie("shuliang",str2,1);
					
				}
			}
				
				//----------------------------------------
				
				
				
				var sum=0;
				//------------------------------------加入购物车
				var str=getCookie("shuliang");
				var getspan=document.getElementById("getspan");
				var obj=str?JSON.parse(str):{};
				
				for(var i in obj){
					sum+=obj[i];
				}
				getspan.innerHTML=sum;
				
//				$("#jia").click(function(){
//					var getId=$(this)[0].getAttribute("data-id")
//					
//					obj[getId]=obj[getId]?++obj[getId]:1;
//					var strObj=JSON.stringify(obj);
//					
//					setCookie("shuliang",strObj,1);
//					
//					getspan.innerHTML= ++sum;
//				})
				//-----------------------------------------
//				$("#jian").click(function(){
//					var getspan=document.getElementById("getspan");
//					var str=getCookie("shuliang");
//					var jsonstr=JSON.parse(str);
//					var id3=this.getAttribute("date-id");
//					
//					if(jsonstr[id3]){
//						jsonstr[id3]= --jsonstr[id3];
//					}
//					location.reload();
//					var str3=JSON.stringify(jsonstr);
//					setCookie("shuliang",str3,1);
//					getspan.innerHTML= --sum;
//				})
			}
			