$(function(){
	var oBox = $(".rol-list-box");
	 
	var oList= $(".rol-list")
	var preWidth = oList.width()
	var oNav = $(".sec-rol-nav").find("span")	 
	var oBtnRight = $(".sec-rol-right")
	var oBtnLeft = $(".sec-rol-left")
	  	 
		 var k=0;  
	function Move(){
		k++;
		if(k>2){
			k=2;
		}
 		 
		oBox.stop(true).animate({'left':-k*preWidth},500)
		oNav.eq(k).addClass("active").siblings().removeClass("active");
	}
		 
	oBtnRight.click(function(){		
		Move();
	})
	oBtnLeft.click(function(){
		k--	
		if(k<0){
			k=0;
		}
		oNav.eq(k).addClass("active").siblings().removeClass("active");
		oBox.stop(true).animate({'left':-k*preWidth},500) 
	})
		 
		 
		 
		
	 
	 
	
})
