function Carousel(oList,aLi,oBox,aSpan){
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
		oList.stop(true).animate({"left":-i*(aLi.eq(0).width())},500)
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
	}