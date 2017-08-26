$(function(){
	var oBox = $(".flo2-left-top");
	var oList = $(".flo2-left-top-list");
	var aLi = oList.find("li");
	var oNav = $(".flo2-left-top-nav");
	var aSpan = oNav.find("span");
	 
	 aLi.eq(0).clone(true).appendTo(oList);
	
	Carousel(oList,aLi,oBox,aSpan);
	 
})