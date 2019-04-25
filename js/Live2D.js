var l2dlc=true;
var l2dlv=true;

$(document).mousemove(function(e){
	var l2d = $('#live2d-widget');
	if(l2d.length!=0){
		if(l2dlc){
			l2d.animate({bottom:'-100px',opacity:'0.5'},1000);
			l2dlc = false;
		}
		if(e.pageY>l2d.offset().top&&e.pageX>l2d.offset().left){
			if(l2dlv){
				TipFade(l2d, true);
				l2dlv=false;
			}
		}else{
			if(!l2dlv){
				TipFade(l2d, false);
				l2dlv=true;
			}
		}
	}
});

function TipFade(e,mode){
	e.animate({bottom:(mode?-90:-100)+'px', opacity:(mode?1:0.5)},500);
}

function msgTip(e,mode,msg){
	
}