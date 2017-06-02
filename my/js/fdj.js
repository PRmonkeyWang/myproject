var oFdj = document.getElementById("fdj");
						var oZoomArea = document.getElementById("zoomArea");
						var oBigArea = document.getElementById("bigArea");
						var oMiddleArea = document.getElementById("middleArea");
						var oBigImg = oBigArea.getElementsByTagName("img")[0];
						var oArt2=document.getElementById("article2");
						var oLeft=oArt2.getElementsByClassName("left")[0];
						var oTop=oLeft.getElementsByClassName("top")[0];
						oMiddleArea.onmousemove = function(e){
							var evt = e || event;
							var x = evt.pageX-oZoomArea.offsetLeft-oFdj.offsetWidth/2-oTop.offsetLeft;
							var y = evt.pageY-oZoomArea.offsetTop-oFdj.offsetHeight/2-oTop.offsetTop;
							
							oFdj.style.display = "block";
							oBigArea.style.display = "block";
							
							if(x<=0){
								x = 0;
							}
							if(x>=oMiddleArea.offsetWidth-oFdj.offsetWidth){
								x = oMiddleArea.offsetWidth-oFdj.offsetWidth;
							}
							
							if(y<=0){
								y = 0;
							}
							if(y>=oMiddleArea.offsetHeight - oFdj.offsetHeight){
								y = oMiddleArea.offsetHeight - oFdj.offsetHeight;
							}
							
							
							oFdj.style.left = x + "px";
							oFdj.style.top = y + "px";
							
							
							
							oBigImg.style.left = -oBigImg.offsetWidth/oMiddleArea.offsetWidth * x + "px";
							
							oBigImg.style.top = -oBigImg.offsetHeight/oMiddleArea.offsetHeight * y + "px";
							
							
							
							
						}
						oMiddleArea.onmouseleave = function(){
							oFdj.style.display = "none";
							oBigArea.style.display = "none";
						}