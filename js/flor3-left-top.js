$(function(){
	var oBox = $(".flo3-left-top");
	var oList = $(".flo3-left-top-list");
	var aLi = oList.find("li");
	var oNav = $(".flo3-left-top-nav");
	var aSpan = oNav.find("span");
	 
	 aLi.eq(0).clone(true).appendTo(oList);
	
	Carousel(oList,aLi,oBox,aSpan);
	 
})