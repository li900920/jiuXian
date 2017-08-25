$(function(){
	var oBox = $(".con-right-bottom");
	var oList = $(".con-bottom-pic");
	var aLi  = oList.find("li");
	var oCon = $(".con-bottom-nav")
	var aSpan = oCon.find("span");	 
	aLi.eq(0).clone(true).appendTo(oList);
	
	var totalWidth = (aLi.length+1)*aLi.eq(0).width();	
	
	var preWidth = aLi.eq(0).width();
	
	oList.width(totalWidth);
	
	var i = 0;
	var iTimer = setInterval(function(){
		Move()
	},3000)
	
	function Move(){
		i++
		if(i == aLi.length+1){
			i = 1;
			oList.css('left',0)
		}
		if(i == aLi.length){			 
			aSpan.eq(0).addClass("active").siblings().removeClass("active");
		}
		aSpan.eq(i).addClass("active").siblings().removeClass("active");
		oList.stop(true).animate({"left":-i*preWidth},500)
	}
	oBox.hover(function(){
		clearInterval(iTimer)
	},function(){
		iTimer = setInterval(function(){
			Move()
		},3000)
	})
	aSpan.click(function(){
		i = $(this).index()-1;
		Move();
	})
})
