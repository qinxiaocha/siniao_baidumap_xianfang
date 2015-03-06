var Sidebar=function(options){
	this.main=options.main;
	this.point=options.point;
	this.init();
	this.btn=options.btn;
	this.Start();
};
Sidebar.prototype={
	init:function(){
		var _this=this;
		$(window).bind("load",function(){
			_this.main.css({
				top:_this.point.offset().top+30+"px",
				left:_this.point.offset().left+"px",
				visibility:"visible"
			});
		})
	},
	move:function(i){
		if(i==0){
			$("html,body").stop(true,true).animate({
				scrollTop:$("#a1").offset().top
			},450)
		}else if(i==1){
			$("html,body").stop(true,true).animate({
				scrollTop:$("#a2").offset().top
			},450)
	   }else if(i==2){
			$("html,body").stop(true,true).animate({
				scrollTop:$(".hisbox_l").offset().top
			},450)
		
		
		
		
		}
	},
	Start:function(){
		var _this=this;
		$(window).bind("scroll",function(){
			if($(this).scrollTop()>_this.point.offset().top+30){
				_this.main.addClass("fix");
				_this.main.css({top:0+"px"})
			}else{
				_this.main.removeClass("fix");
				_this.main.css({
					top:_this.point.offset().top+30
				})
				
			};
		});
		this.btn.each(function(i){
			$(this).attr("i",i);
			$(this).bind("click",function(event){
				event.preventDefault();
				var i=Number($(this).attr("i"));
				_this.move(i)
			})
		})
	}
};
(function(){
	new Sidebar({
		main:$(".news_left"),
		point:$(".news_contentbox"),
		btn:$(".news_left").find("a")
	})
})();