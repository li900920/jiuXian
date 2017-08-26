$(function(){
	var oBox = $(".flo-left-top");
	var oList = $(".flo-left-top-list");
	var aLi = oList.find("li");
	var oNav = $(".flo-left-top-nav");
	var aSpan = oNav.find("span");
	 
	 aLi.eq(0).clone(true).appendTo(oList);
	
	Carousel(oList,aLi,oBox,aSpan);
	 
})
