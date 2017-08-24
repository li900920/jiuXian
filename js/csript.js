$(function(){
	var $oBanner = $(".banner");
	var oList = $(".banner ul");
	var oLi = oList.find("li")
	var oSpan = $(".banner-nav .banner-nav-center").find("span")
	
	var i=0;
	var iTimer = setInterval(function(){
		Move();
	},3000)
	
	function Move(){
		clearInterval(iTimer)
		i++;
		if(i==8){
			i=0;
		}
		oSpan.eq(i).addClass("on").siblings().removeClass("on");
		oLi.eq(i).fadeIn().siblings().fadeOut();
		iTimer = setInterval(function(){
			Move()
		},3000)
	}
		oSpan.hover(function(){
			 i = $(this).index()-1;
			 Move();
			 clearInterval(iTimer);
		},function(){
			i = $(this).index()-1;
			 Move();			 
		})
		$(".banner-center").hover(function(){
			clearInterval(iTimer);
		},function(){
			iTimer = setInterval(function(){
				Move();
			},3000)
		})
})
