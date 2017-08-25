$(function(){
	var oList = $(".sec-rol-list ul");
	var aLi  = oList.find("li");
	var oBox = $(".section-rollshows");
	var oNav = $(".sec-rol-nav").find("span")
	var preWidth = aLi.eq(0).width();
	oList.width(preWidth*aLi.length);
	var oBtnRight = $(".sec-rol-right")
	var oBtnLeft = $(".sec-rol-left")
		var k=0;
		console.log(oBox.width())
	oBtnRight.click(function(){
		k++
		if(k > 2){
			k=2;
		}
		console.log(k)
		oList.stop(true).animate({"left":-k*oBox.width()},500)
		oNav.eq(k).addClass("active").siblings().removeClass("active");
	})
	 
	
})
